/* Pick a Car Script */

window.onload = initForm;

function initForm() {
	/* Initialise form */
	document.forms[0].onsubmit = validForm;
	document.getElementById("sunroof").onclick = doorSet;
}

function validForm() {
	/* Validate formt */
	let allGood = true;
	let allTags = document.forms[0].getElementsByTagName("*");

	for (let i=0; i<allTags.length; i++) {
		if (!validTag(allTags[i])) {
			allGood = false;
		}
	}
	return allGood;

	function validTag(thisTag) {
		/* Validate tag */
		let outClass = "";
		let allClasses = thisTag.className.split(" ");
	
		for (let j=0; j<allClasses.length; j++) {
			outClass += validBasedOnClass(allClasses[j]) + " ";
		}
	
		
		thisTag.className = outClass;
	
		if (outClass.indexOf("invalid") > -1) {
			invalidLabel(thisTag.parentNode);
			thisTag.focus();
			if (thisTag.nodeName == "INPUT") {
				thisTag.select();
			}
			return false;
		}
		return true;
		
		function validBasedOnClass(thisClass) {
			let classBack = "";
		
			switch(thisClass) {
				case "":
				case "invalid":
					break;
				case "reqd":
					if (allGood && thisTag.value == "") {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "radio":
					if (allGood && !radioPicked(thisTag.name)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "isNum":
					if (allGood && !isNum(thisTag.value)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "isZip":
					if (allGood && !isZip(thisTag.value)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "email":
					if (allGood && !validEmail(thisTag.value)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				default:
					if (allGood && !crossCheck(thisTag,thisClass)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
			}
			return classBack;
				
			function crossCheck(inTag,otherFieldID) {
				if (!document.getElementById(otherFieldID)) {
					return false;
				}
				return (inTag.value != "" || document.getElementById(otherFieldID).value != "");
			}
			
			function radioPicked(radioName) {
				let radioSet = document.forms[0][radioName];
	
				if (radioSet) {
					for (k=0; k<radioSet.length; k++) {
						if (radioSet[k].checked) {
							return true;
						}
					}
				}
				return false;
			}
			
			function isNum(passedVal) {
				if (passedVal == "") {
					return false;
				}
				for (let k=0; k<passedVal.length; k++) {
					if (passedVal.charAt(k) < "0") {
						return false;
					}
					if (passedVal.charAt(k) > "9") {
						return false;
					}
				}
				return true;
			}
			
			function validEmail(email) {
				let invalidChars = " /:,;";
			
				if (email == "") {
					return false;
				}
				for (let k=0; k<invalidChars.length; k++) {
					let badChar = invalidChars.charAt(k);
					if (email.indexOf(badChar) > -1) {
						return false;
					}
				}
				let atPos = email.indexOf("@",1);
				if (atPos == -1) {
					return false;
				}
				if (email.indexOf("@",atPos+1) != -1) {
					return false;
				}
				let periodPos = email.indexOf(".",atPos);
				if (periodPos == -1) {	
					return false;
				}
				if (periodPos+3 > email.length)	{
					return false;
				}
				return true;
				
				function isZip(inZip) {
					if (inZip == "") {
						return true;
					}
					return (isNum(inZip));
				}
			}
		}
	}
		
	function invalidLabel(parentTag) {
		if (parentTag.nodeName == "LABEL") {
			parentTag.className += " invalid";
		}
	}
}

function doorSet() {
	if (this.checked) {
		document.getElementById("twoDoor").checked = true;
	}
}

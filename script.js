var disableKey = false;
function Instructions() {
	$(".instructionsMain").slideToggle(800,"linear");
}
function explain(type) {
	$(".instructions"+type).slideToggle(800,"linear");
}
function configureCaesar() {
	document.getElementById("key").disabled=false;
	document.getElementById("key").defaultValue="13";
}
function configureVigenere() {
	document.getElementById("key").disabled=false;
	document.getElementById("key").defaultValue="baz";
}
function configureRailFence() {
	document.getElementById("key").disabled=false;
	document.getElementById("key").defaultValue="3";
}
function configureAutokey() {
	document.getElementById("key").disabled=false;
	document.getElementById("key").defaultValue="qux";
}
function Backward() {
	document.getElementById("submit").innerHTML = "Decrypt";
	if(document.getElementById("piglatin").checked === true) {
		document.getElementById("key").defaultValue="disabled";
	}
	else if(document.getElementById("caesar").checked === true) {
		document.getElementById("key").defaultValue="13";
	}
	else if(document.getElementById("vigenere").checked === true) {
		document.getElementById("key").defaultValue="baz";
	}
	else if(document.getElementById("railfence").checked === true) {
		document.getElementById("key").defaultValue="3";
	}
	else if(document.getElementById("autokey").checked === true) {
		document.getElementById("key").defaultValue="qux";
	}
	else {
		document.getElementById("key").defaultValue="Leave blank if key is unknown";
	}
}
function Forward() {
	document.getElementById("submit").innerHTML = "Encrypt";
	if(document.getElementById("caesar").checked === true) {
		document.getElementById("key").defaultValue="13";
	}
	else if(document.getElementById("vigenere").checked === true) {
		document.getElementById("key").defaultValue="baz";
	}
	else if(document.getElementById("piglatin").checked === true) {
		document.getElementById("key").defaultValue="disabled";
	}
	else if(document.getElementById("railfence").checked === true) {
		document.getElementById("key").defaultValue="3";
	}	
	else if(document.getElementById("autokey").checked === true) {
		document.getElementById("key").defaultValue="qux";
	}
	else {
		document.getElementById("key").defaultValue="";
	}
	disableKey = false;
}
function noKey() {
	document.getElementById("key").disabled=true;
	document.getElementById("key").defaultValue="disabled";
}
function Switch() {
  var output = document.getElementById("cipher").value;
  document.getElementById("txt").value=output;
}
		

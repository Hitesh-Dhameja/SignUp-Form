const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function ValidateName(){
	name = document.getElementById('name').value;
	if(name === "" || name === null || name === undefined){
		document.getElementById('error1').style.display='block';
		setTimeout(function(){
			document.getElementById('error1').style.display='none';
		}, 9000);
	}
	else{
		return true;
	}
}

function ValidateEmail(){
	email = document.getElementById('email').value;
	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) || email === undefined){
		return true;
	}
	document.getElementById('error2').style.display='block';
	setTimeout(function(){
		document.getElementById('error2').style.display='none';
	}, 9000);
	
  
}

function ValidatePhone(){
	phone = document.getElementById('phone').value;
	var phoneno = /^\d{10}$/;
	if(phone.match(phoneno)){
      return true;
    }
    else{
		document.getElementById('error3').style.display='block';
		setTimeout(function(){
			document.getElementById('error3').style.display='none';
		}, 9000);
    }
}

function ValidateDOB(){
	dob = document.getElementById('dob').value;
	var patternDOB =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
	if(patternDOB.test(dob)){
      return true;
    }
    else{
		document.getElementById('error4').style.display='block';
		setTimeout(function(){
			document.getElementById('error4').style.display='none';
		}, 9000);
    }
}

function Register(){
	name = ValidateName();
	email = ValidateEmail();
	phone = ValidatePhone();
	dob = ValidateDOB();
	password = document.getElementById('password').value;
	var passwordFormat =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	if(password.match(passwordFormat)){
		pass = true;
		if(name && email && phone && dob && pass){
			alert('Congratulations! You have Successfully Registered.')
			location.reload();
		}
	}
	else{
		document.getElementById('error5').style.marginTop='1rem';
		document.getElementById('error5').style.marginLeft='1rem';
		document.getElementById('error5').style.fontSize='10px';
		document.getElementById('error5').style.display='block';
		setTimeout(function(){
			document.getElementById('error5').style.display='none';
		}, 9000);
	}

}

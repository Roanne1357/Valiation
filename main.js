const form = document.getElementById('form');
const username = document.getElementById('signup-username');
const email = document.getElementById('signup-email');
const password = document.getElementById('signup-password');
const password2 = document.getElementById('signup-password2');
const birthdayYear = document.getElementById('signup-birth-year');
const birthdayMonth = document.getElementById('signup-birth-month');
const birthdayDay = document.getElementById('signup-birth-day');
const birthdayBox0 = document.getElementById('row').children[0];
const birthdayBox1 = document.getElementById('row').children[1];
const birthdayBox2 = document.getElementById('row').children[2];

function eventListener(){
	var elements = document.getElementsByClassName("eye");
	var elements2 = document.getElementsByClassName("eye2");

	var myFunction = function() {
		pwd_toggle()
	};

	var myFunction2 = function() {
		pwd_toggle2()
	};


	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click', myFunction, false);
	}

	for (var i = 0; i < elements2.length; i++) {
		elements2[i].addEventListener('click', myFunction2, false);
	}

	form.addEventListener('submit', e => {
		e.preventDefault();
		
		checkInputs();
	});
	
	username.addEventListener('input', e => {
		e.preventDefault();
		
		checkUserName();
	});
	
	email.addEventListener('input', e => {
		e.preventDefault();
		
		checkEmail();
	});
	
	password.addEventListener('input', e => {
		e.preventDefault();
		
		checkPassword();
	});
	
	password2.addEventListener('input', e => {
		e.preventDefault();
		
		checkPassword();
	});
	
	birthdayYear.addEventListener('input', e => {
		e.preventDefault();
		
		maxLengthCheck(birthdayYear);
		checkBirthday();
		checkBirthday2();
		checkBirthday3();
		checkBirthdayAll()
	});
	
	birthdayMonth.addEventListener('change', e => {
		e.preventDefault();
		checkBirthday();
		checkBirthday2();
		checkBirthday3();
		checkBirthdayAll()
	});
	
	birthdayDay.addEventListener('change', e => {
		e.preventDefault();
		checkBirthday();
		checkBirthday2();
		checkBirthday3();
		checkBirthdayAll()
	});
}

function checkUserName() {
    if(isEmpty(username) || lessThan(username, 5) || containsHS(username)){
		setErrorFor(username, '5~20?????? ??????, ????????? ?????? ???????????????.');
	} else {
		setSuccessFor(username);
    }
}

function checkEmail() {
    if(isEmpty(email) ) {
		setErrorFor(email, '?????? ???????????????.');
	} else if (!isEmail(email.value)) {
		setErrorFor(email, '????????? ????????? ?????? ??????????????????.');
	} else {
		setSuccessFor(email);
	}
}

function checkPassword() {
	if(isEmpty(password) || lessThan(password, 8) || !containsHS(password)) {
		setErrorFor(password, '8~16??? ?????? ??? ?????????, ??????, ??????????????? ???????????????.');
	} else {
		setSuccessFor(password);
	}
	
	if(isEmpty(password2) || equals(password, password2)) {
		setErrorFor(password2, '??????????????? ???????????? ????????????.');
	} else{
		setSuccessFor(password2);
	}
}

function checkBirthday() {
	const date = new Date;
	const birthdayValue = birthdayYear.value.trim();
	if(birthdayValue === '' || birthdayValue < 1900 || birthdayValue > date.getFullYear()) {
		setErrorBirthday(birthdayYear);

	} else {
		setSuccessBirthday(birthdayYear);
	}
}

function checkBirthday2() {
	if(birthdayMonth.value == "month") {
		setErrorBirthday(birthdayMonth);
	} else {
		setSuccessBirthday(birthdayMonth);
	}
}

function checkBirthday3() {
	if(birthdayDay.value == "day") {
		setErrorBirthday(birthdayDay);
	} else {
		setSuccessBirthday(birthdayDay);
	}
}

function checkBirthdayAll(){
	if (birthdayBox0.className == "birthday-box error" ||birthdayBox1.className == "birthday-box error" ||birthdayBox2.className == "birthday-box error") {
		setErrorFor(birthdayYear, '????????? ????????? ???????????????.');
	}else{
		setSuccessFor(birthdayYear);
	}
}

function checkInputs() {
	// trim to remove the whitespaces
	const date = new Date;
	const birthdayValue = birthdayYear.value.trim();

	
	
	if(isEmpty(username) || lessThan(username, 5) || containsHS(username)){
		setErrorFor(username, '5~20?????? ??????, ????????? ?????? ???????????????.');
	} else {
		setSuccessFor(username);
    }
	
	
	if(isEmpty(password) || lessThan(password, 8) || !containsHS(password)) {
		setErrorFor(password, '8~16??? ??????, ??????, ??????????????? ???????????????.');
	} else {
		setSuccessFor(password);
	}
	
	if(isEmpty(password2) || lessThan(password, 8) || equals(password, password2)) {
		setErrorFor(password2, '??????????????? ???????????? ????????????.');
	} else{
		setSuccessFor(password2);
	}

	if(birthdayValue === '' || birthdayValue < 1900 || birthdayValue > date.getFullYear()) {
		setErrorBirthday(birthdayYear);

	} else {
		setSuccessBirthday(birthdayYear);
	}

	if(birthdayMonth.value == "month") {
		setErrorBirthday(birthdayMonth);
	} else {
		setSuccessBirthday(birthdayMonth);
	}

	if(birthdayDay.value == "day") {
		setErrorBirthday(birthdayDay);
	} else {
		setSuccessBirthday(birthdayDay);
	}

	if (birthdayBox0.className == "birthday-box error" ||birthdayBox1.className == "birthday-box error" ||birthdayBox2.className == "birthday-box error") {
		setErrorFor(birthdayYear, '????????? ????????? ???????????????.');
	}else{
		setSuccessFor(birthdayYear);
	}
	
	if(isEmpty(email) ) {
		setErrorFor(email, '?????? ???????????????.');
	} else if (!isEmail(email.value)) {
		setErrorFor(email, '????????? ????????? ?????? ??????????????????.');
	} else {
		setSuccessFor(email);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement.parentElement.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setErrorBirthday(input, message) {
	const div = input.parentElement;
	div.className = 'birthday-box error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement.parentElement.parentElement;
	formControl.className = 'form-control success';
}

function setSuccessBirthday(Select) {
	const div = Select.parentElement;
	div.className = 'birthday-box success';
}

function setAllSuccessFor(input) {
	const formControl = input.parentElement.parentElement.parentElement;
	formControl.className = 'form-control successAll';
}

function pwd_toggle() {
    let pwd = document.querySelector('#signup-password');

    if(pwd.type === "password"){
        pwd.type = "text";
    }else{
        pwd.type = "password";
    }
}

function pwd_toggle2() {
    let pwd2 = document.querySelector('#signup-password2');

    if(pwd2.type === "password"){
        pwd2.type = "text";
    }else{
        pwd2.type = "password";
    }
}

function maxLengthCheck(object){
    if (object.value.length > 4){
      object.value = object.value.slice(0, 4);
    }    
}

eventListener();

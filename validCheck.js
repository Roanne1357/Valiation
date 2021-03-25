// 자바스크립트 유효성 검사 라이브러리

// 공백체크
function isEmpty(input) {
	return !input.value.trim();
}

// 글자수체크
function lessThan(input, l) {
	return input.value.trim().length < l;
}

// ok 에 있는 문자열만 쓸 수 있음
function containsHS(input) {
	let ok = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";

	for (let i = 0; i < input.value.trim().length; i++) {
		if (ok.indexOf(input.value.trim()[i]) == -1) {
			return true;
		}
	}
	return false;
}

function containsHS2(input) {
	let ok = "qwertyuiopasdfghjklzxcvbnm1234567890";

	for (let i = 0; i < input.value.trim().length; i++) {
		if (ok.indexOf(input.value.trim()[i]) == -1) {
			return true;
		}
	}
	return false;
}

// input 두개 같으면 true
function equals(input1, input2) {
	return input1.value.trim() != input2.value.trim();
}

// 특정 문자열 체크
function notContains(input, set) {
	// input.value : qwerASD123
	// set : 1234567890
	for (let i = 0; i < set.length; i++) {
		if (input.value.trim().indexOf(set[i]) != -1) {
			return false;
		}
	}
	return true;
}

// 숫자 체크
function isNotNumber(input) {
	 return isNaN(input.value.trim());
}

// 확장자 체크
function isNotType(input, type) {
	type = "." + type; // .png
	return input.value.trim().indexOf(type) == -1;
}

// 이메일 체크
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
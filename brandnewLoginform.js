document.addEventListener("DOMContentLoaded", () => {
	const signupBtn = document.getElementById('signupBtn');
	const loginBtn = document.getElementById('loginBtn');
	const logregBox = document.querySelector('.logreg-box');

	signupBtn.addEventListener('click', () => {
		logregBox.classList.add('active');
	});

	loginBtn.addEventListener('click', () => {
		logregBox.classList.remove('active');
	});
});

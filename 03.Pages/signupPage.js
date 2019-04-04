/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


module.exports = (function(signupPage) { 
	
	signupPage.signupUser = function (URL,email,password,username){
		//Se acceseaza direct pagina de Sign Up : https://www.freelancer.com/signup
		browser.get(URL);
		
		//Se inchide ferestra cu Cookies
		signupPage.closeCookies();
		
		//Se verifica ca apare textul Sign up in pagina
		expect (signupPage.verifySignupSign).toBeTruthy();
		
		//Se apasa butonul Join Freelancer
		signupPage.joinFreelancerButton();
		
		// Se verifica ca apare mesajul "Please enter an email address." deoarece campul email nu a fost completat
		expect (signupPage.emailErrorMsgEnabled).toBeTruthy();
		
		// Se verifica ca apare mesajul "Please enter a password." deoarece campul password nu a fost completat
		expect (signupPage.passErrorMsgEnabled).toBeTruthy();
		
		//-----------------------------

		//Se completeaza campul email
		signupPage.fillInEmail(email);
		
		//Se verifica ca nu mai apare mesajul "Please enter an email address." deoarece campul email a fost completat
		expect (signupPage.emailErrorMsgDisabled).toBeTruthy();
		
		//Se completeaza campul password
		signupPage.fillInPassword(password);
		
		//Se verifica ca nu mai apare mesajul "Please enter a password." deoarece campul password a fost completat
		expect (signupPage.passErrorMsgDisabled).toBeTruthy();
		
		//Se apasa butonul Join Freelancer
		signupPage.joinFreelancerButton();
		
		//Se verifica ca apare textul Choose a username in pagina
		expect (signupPage.verifyChooseUsernameSign).toBeTruthy();
		
		//Se completeaza campul userame
		signupPage.fillInUsername(username);
		
		//Se apasa butonul Next din interfata username
		signupPage.usernameNextButton();
		
		//Se verifica ca apare textul Select account type in pagina
		expect (signupPage.verifyAccountTypeSign).toBeTruthy();
		
		//Se selecteaza optiunea I want to work
		signupPage.selectWorkOption();
		
		//Se verifica ca apare textul Email Opt-in
		expect (signupPage.verifyEmailOptSign).toBeTruthy();
		
		//Se alege optiunea Personal Use
		signupPage.checkPersonalUse();
		
		//Se apasa butonul Sign Up
		signupPage.signUpButtonClick();
		
		//Se asteapta 3 secunde pentru a se incarca datele
		browser.sleep(3000);
		
		//Se verifica ca apare textul Signup Success!
		signupPage.verifySignupSuccessSign();
	};
	

	
	return signupPage;
	
})(require('../02.Functions/basePageObj.js'));
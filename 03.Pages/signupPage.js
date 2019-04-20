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
	
	signupPage.signupUser = function (URL,email,password,emailError, passwordError,usernameError,username){
		
		//------SIGN UP PAGE1
		//Se acceseaza direct pagina de Sign Up : https://www.freelancer.com/signup
		browser.get(URL);
		
		//Se inchide ferestra cu Cookies
		signupPage.closeCookies();
		
		browser.sleep(1500);
		
		//Se verifica ca apare textul Sign up in pagina
		expect (signupPage.verifySignupSign).toBeTruthy();
		console.log ("Textul Sign up este prezent in pagina.");
		
		//Se apasa butonul Join Freelancer
		signupPage.joinFreelancerButton();
		
		browser.sleep(1500);
		
		// Se verifica ca apare mesajul "Please enter an email address." deoarece campul email nu a fost completat
		expect (signupPage.emailErrorMsgEnabled).toBeTruthy();
		console.log ("Eroarea pentru EMPTY EMAIL este prezenta");
		
		// Se verifica ca apare mesajul "Please enter a password." deoarece campul password nu a fost completat
		expect (signupPage.passErrorMsgEnabled).toBeTruthy();
		console.log ("Eroarea pentru EMPTY PASSWORD este prezenta");
		
		browser.sleep(1000);
		
		//Verificare Text pentru Empty Email Field
		expect(signupPage.verifyEmptyEmailError()).toEqual(emailError);
		console.log("Text Verification for Empty Email field is: " + emailError);
		
		//Verificare Text pentru Empty Password Field
		expect(signupPage.verifyEmptyPasswordError()).toEqual(passwordError);
		console.log("Text Verification for Empty Email field is: " + passwordError);

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
		
		//------SIGN UP PAGE2
		
		//Se verifica ca apare textul Choose a username in pagina
		expect (signupPage.verifyChooseUsernameSign).toBeTruthy();
		console.log ("Textul Choose a username este prezent in pagina.");
				
		//Se apasa butonul Next din interfata username cu username empty
		signupPage.usernameNextButton();
		
		// Se verifica ca apare mesajul "Please enter a username" deoarece campul username nu a fost completat
		expect (signupPage.usernameErrorMsgEnabled).toBeTruthy();
		console.log ("Eroarea pentru EMPTY USERNAME este prezenta");
		
		browser.sleep(1000);
		
		//Verificare Text pentru Empty Username Field
		expect(signupPage.verifyEmptyUsernameError()).toEqual(usernameError);
		console.log("Text Verification for Empty Username field is: " + usernameError);
		
		//Se completeaza campul userame
		signupPage.fillInUsername(username);
		
		//Se apasa butonul Next din interfata username
		signupPage.usernameNextButton();
		
		//------SIGN UP PAGE3
		
		//Se verifica ca apare textul Select account type in pagina
		expect (signupPage.verifyAccountTypeSign).toBeTruthy();
		console.log ("Textul Select account type este prezent in pagina.");
		
		//Se selecteaza optiunea I want to work
		signupPage.selectWorkOption();
		
		//------SIGN UP PAGE4
		
		//Se verifica ca apare textul Email Opt-in
		expect (signupPage.verifyEmailOptSign).toBeTruthy();
		console.log ("Textul Email Opt-in este prezent in pagina.");
		
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
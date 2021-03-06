/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/
//import window.location;

module.exports = (function(loginPage) { 
	
//--------------functie login invalid Username------------------------
	
	loginPage.loginInvalidUsername = function (URL,email,password,loginInvalidUsername){
		
		//Se acceseaza direct pagina de Login : https://www.freelancer.com/login
		browser.get(URL);
		
		//Se inchide fereastra Cookies
		loginPage.closeCookies();
		
		//Se verifica ca apare textul Welcome back in pagina
		expect (loginPage.verifyWelcomeBackSign).toBeTruthy();
		
		//Se introduce email-ul
		loginPage.fillInEmailLogin(email);
		
		//se verifica ca apare mesajul de eroare ca s-a completat emailul cu o valoare invalida
		expect (loginPage.invalidUsernameMsg).toBeTruthy();
		
		//Aici verificam eroare de empty username
		expect(loginPage.verifyInvalidUsernameMsg()).toEqual(loginInvalidUsername);
		console.log("When login is unsuccessfull due to invalid Username you will see a message like -> " + loginInvalidUsername);
		
		
		//Se introduce password
		loginPage.fillInPasswordLogin(password);
		
		//se verifica ca nu apare mesajul de eroare ca s-a completat password
		expect (loginPage.passErrorMsgLoginDisabled).toBeTruthy();
		
		//se apasa butonul Remember me
		loginPage.rememberMeCheck();
		
		//se apasa butonul Login
		loginPage.loginButtonClick();
		
        //Se verifica ca dupa apasarea butonului Login suntem in aceeasi pagina
		
		expect (loginPage.verifyWelcomeBackSign).toBeTruthy();
		
		//wait 3 seconds
		browser.sleep(3000);
	};
//--------------functie login incorrect Username and/or password------------------------
	
	loginPage.loginIncorrectUsernamePass = function (URL,email,password,wrongCredentialsError){
		
		//Se acceseaza direct pagina de Login : https://www.freelancer.com/login
		browser.get(URL);
		
		//Se inchide fereastra Cookies
		loginPage.closeCookies();
		
		//Se verifica ca apare textul Welcome back in pagina
		expect (loginPage.verifyWelcomeBackSign).toBeTruthy();
		
		//Se introduce email-ul
		loginPage.fillInEmailLogin(email);
		
		//se verifica ca nu apare mesajul de eroare ca s-a completat emailul
		expect (loginPage.emailErrorMsgLoginDisabled).toBeTruthy();
		
		//Se introduce password
		loginPage.fillInPasswordLogin(password);
		
		//se verifica ca nu apare mesajul de eroare ca s-a completat password
		expect (loginPage.passErrorMsgLoginDisabled).toBeTruthy();
		
		//se apasa butonul Remember me
		loginPage.rememberMeCheck();
		
		//se apasa butonul Login
		loginPage.loginButtonClick();
		
        //Se verifica ca dupa apasarea butonului Login suntem in aceeasi pagina		
		expect (loginPage.verifyWelcomeBackSign).toBeTruthy();
		
		browser.sleep(1000);
		
		//verificare ca apare mesajul Incorrect username and password
		expect (loginPage.incorectUsernamePassMsg).toBeTruthy();
		
		expect(loginPage.verifyIncorectUsernamePassMsg()).toEqual(wrongCredentialsError);
		console.log("When login is unsuccessfull due to invalid credentials you will see a message like -> " + wrongCredentialsError);
		
				
		//wait 3 seconds
		browser.sleep(3000);
	};
	
	
//--------------functie login Unsuccesfully Blank Password------------------------
	
	loginPage.loginUnsuccesfullyBlankPassword = function (URL,email,password,loginEmptyPassword){
		
		//Se acceseaza direct pagina de Login : https://www.freelancer.com/login
		browser.get(URL);
	 
		//wait 3 seconds
		browser.sleep(3000);
		  
		//Se inchide fereastra Cookies
		loginPage.closeCookies();
		
		//Se verifica ca apare textul Welcome back in pagina
		expect (loginPage.verifyWelcomeBackSign).toBeTruthy();
		
		//Se introduce email-ul
		loginPage.fillInEmailLogin(email);
		
		//se verifica ca nu apare mesajul de eroare ca nu s-a completat emailul
		expect (loginPage.emailErrorMsgLoginDisabled).toBeTruthy();
		
		//Se introduce password
		loginPage.fillInPasswordLogin(password);
		
		//se verifica ca apare mesajul de eroare ca nu s-a completat password
		expect (loginPage.passErrorMsgLoginEnabled).toBeTruthy();
		
		//se apasa butonul Remember me
		loginPage.rememberMeCheck();
		
		//se apasa butonul Login
		loginPage.loginButtonClick();
		
		browser.sleep(1000);
		//Se verifica ca dupa apasarea butonului Login suntem in aceeasi pagina
				
		expect (loginPage.verifyWelcomeBackSign).toBeTruthy();
		
		//Aici verificam eroare de empty password
		expect(loginPage.verifyEmptyPasswordLoginError()).toEqual(loginEmptyPassword);
		console.log("When login is unsuccessfull due to empty password you will see a message like -> " + loginEmptyPassword);
		
		
		//wait 3 seconds
		browser.sleep(3000);
		
	};
	
//--------------functie login Unsuccesfully Blank Username------------------------
	
	loginPage.loginUnsuccesfullyBlankUsername = function (URL,email,password,loginEmptyUsername){
		
		//Se acceseaza direct pagina de Login : https://www.freelancer.com/login
		browser.get(URL);
	 
		//wait 3 seconds
		browser.sleep(3000);
		  
		//Se inchide fereastra Cookies
		loginPage.closeCookies();
		
		//Se verifica ca apare textul Welcome back in pagina
		expect (loginPage.verifyWelcomeBackSign).toBeTruthy();
		
		//Se introduce email-ul
		loginPage.fillInEmailLogin(email);
		
		//se verifica ca nu apare mesajul de eroare ca nu s-a completat emailul
		expect (loginPage.emailErrorMsgLoginEnabled).toBeTruthy();
		
		//Se introduce password
		loginPage.fillInPasswordLogin(password);
		
		//se verifica ca apare mesajul de eroare ca s-a completat password
		expect (loginPage.passErrorMsgLoginDisabled).toBeTruthy();
		
		//se apasa butonul Remember me
		loginPage.rememberMeCheck();
		
		//se apasa butonul Login
		loginPage.loginButtonClick();
		
		browser.sleep(1000);
		//Se verifica ca dupa apasarea butonului Login suntem in aceeasi pagina
		
		//expect(browser.getCurrentUrl()).toBe(URL);  //nu functioneaza deoarece la URL mai apare un # la sfarsit dar nu mereu
		
		expect (loginPage.verifyWelcomeBackSign).toBeTruthy();
		
		//Aici verificam eroare de empty username
		expect(loginPage.verifyEmptyUsernameLoginError()).toEqual(loginEmptyUsername);
		console.log("When login is unsuccessfull due to Empty Username you will see a message like -> " + loginEmptyUsername);
		
		//wait 3 seconds
		browser.sleep(3000);
		
	};
	
	
//--------------functie login Unsuccesfully Blank Credentials------------------------
	
	loginPage.loginUnsuccesfullyBlankCredentials = function (URL,email,password,loginEmptyPassword,loginEmptyUsername){
		
		
		//Se acceseaza direct pagina de Login : https://www.freelancer.com/login
		browser.get(URL);
		
		//wait 3 seconds
		browser.sleep(3000);
	 
		//Se inchide fereastra Cookies
		loginPage.closeCookies();
		
		//Se verifica ca apare textul Welcome back in pagina
		expect (loginPage.verifyWelcomeBackSign).toBeTruthy();
		
		//Se introduce email-ul
		loginPage.fillInEmailLogin(email);
		
		//se verifica ca nu apare mesajul de eroare ca nu s-a completat emailul
		expect (loginPage.emailErrorMsgLoginEnabled).toBeTruthy();
		
		//Se introduce password
		loginPage.fillInPasswordLogin(password);
		
		//se verifica ca nu apare mesajul de eroare ca nu s-a completat password
		expect (loginPage.passErrorMsgLoginEnabled).toBeTruthy();
		
		//se apasa butonul Remember me
		loginPage.rememberMeCheck();
		
		//se apasa butonul Login
		loginPage.loginButtonClick();
		
		//Se verifica ca dupa apasarea butonului Login suntem in aceeasi pagina
				
		expect (loginPage.verifyWelcomeBackSign).toBeTruthy();
		
		//Aici verificam eroare de empty password
		expect(loginPage.verifyEmptyPasswordLoginError()).toEqual(loginEmptyPassword);
		console.log("When login is unsuccessfull due to empty password you will see a message like -> " + loginEmptyPassword);
	
		//Aici verificam eroare de empty username
		expect(loginPage.verifyEmptyUsernameLoginError()).toEqual(loginEmptyUsername);
		console.log("When login is unsuccessfull due to Empty Username you will see a message like -> " + loginEmptyUsername);
		
		
		//wait 3 seconds
		browser.sleep(3000);
		
	};
		
	
	//--------------functie login Successfully------------------------
	
	loginPage.loginSuccesfully = function (URL,email,password,postLoginSuccessText){
		
		//Se acceseaza direct pagina de Login : https://www.freelancer.com/login
		browser.get(URL);
		
		//Se inchide fereastra Cookies
		loginPage.closeCookies();
		
		//Se verifica ca apare textul Welcome back in pagina
		expect (loginPage.verifyWelcomeBackSign).toBeTruthy();
		
		//Se introduce email-ul
		loginPage.fillInEmailLogin(email);
		
		//se verifica ca nu apare mesajul de eroare ca s-a completat emailul
		expect (loginPage.emailErrorMsgLoginDisabled).toBeTruthy();
		
		//Se introduce password
		loginPage.fillInPasswordLogin(password);
		
		//se verifica ca nu apare mesajul de eroare ca s-a completat password
		expect (loginPage.passErrorMsgLoginDisabled).toBeTruthy();
		
		//se apasa butonul Remember me
		loginPage.rememberMeCheck();
		
		//se apasa butonul Login
		loginPage.loginButtonClick();
		
		//verificare ca logarea s-a efectuat cu succes
		loginPage.verifyLoginSuccessSign();
		
		//browser.ignoreSynchronization = true;
	    browser.sleep(3000);
		
	    //verificam ca meniul este prezent dupa login
		expect (loginPage.verifyMenuButtonPresent).toBeTruthy();
		console.log ("Butonul de MENIU este prezent in pagina.");	
		
		//verificam daca userul este cel corect
		expect(loginPage.verifyLoginSuccessText()).toEqual(postLoginSuccessText);
		console.log ("Textul de succes login unde se regaseste ");	
		
		
	};
	
	
	
	
	return loginPage;
	
})(require('../02.Functions/basePageObj.js'));
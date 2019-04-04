/**********************************************************************************
* 
*	Created by: Alexandra Dumitrescu
*
*	Description: aici se afla toate functiile folosite pentru testele automate de pe aplicata web
*
*	
*
**********************************************************************************/

module.exports = (function () {
	var that ={};
	
	//---------------------Sign UP-------------------------------------------------------------
	
	
	//functie inchide cookies
	that.closeCookies = function (){
		element(by.id("close-cookie-banner")).isDisplayed().then(function (isVisible) {
		    if (isVisible) {
		    	return element (by.id("close-cookie-banner")).click(); //element is visible
		    } else {
		        // element is not visible
		    }
		});
		
	};
	
	//functie verificare mesaj la Sign up
	that.verifySignupSign =function (){
		return element (by.xpath("//*[contains(text(),'Sign Up')]")).isPresent();
	};
	
	//functie apasare buton Join Freelancer
	that.joinFreelancerButton =function (){
		return element (by.id("signup_btn")).click();
	};
	
	//functie verificare aparitie mesaj de eroare
	that.emailErrorMsgEnabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter an email address.')]")).isEnable();
	};
	
	//functie verificare aparitie mesaj de eroare
	that.passErrorMsgEnabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter a password.')]")).isEnable();
	};
	
	//functie de adaugare email la singup
	that.fillInEmail =function (email){
		element (by.id("new-email")).clear();
		return element (by.id("new-email")).sendKeys(email);
	};
	
	//functie de adaugare parola la singup
	that.fillInPassword =function (password){
		element (by.id("new-password")).clear();
		return element (by.id("new-password")).sendKeys(password);
	};
	
	//functie verificare neaparitie mesaj de eroare
	that.emailErrorMsgDisabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter an email address.')]")).isDisable();
	};
	
	//functie verificare neaparitie mesaj de eroare
	that.passErrorMsgDisabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter a password.')]")).isDisable();
	
	};
	
	//functie verificare mesaj la Choose Username
	that.verifyChooseUsernameSign =function (){
		return element (by.xpath("//*[contains(text(),'Choose a username')]")).isPresent();
	};
	
	//functie introducere username la signup
	that.fillInUsername =function (username){
		element (by.id("new-username")).clear();
		return element (by.id("new-username")).sendKeys(username);
	};
	
	//functie apasare buton Next
	that.usernameNextButton = function (){
		return element (by.xpath("//*[@class='btn btn-info btn-large ModalLoginSignup-signupUsernameInput-submitBtn']")).click();
		
	};
	
	//functie verificare mesaj la Account Type
	that.verifyAccountTypeSign =function (){
		return element (by.xpath("//*[contains(text(),'Select account type')]")).isPresent();
	};
	
	//functie apasare buton Work Type
	that.selectWorkOption =function (){
		return element (by.xpath("//*[@class='ModalLoginSignup-signupAccountType-card-content']//*[contains(text(),'I want to work')]")).click();
	};
	
	//functie verificare mesaj la Email options
	that.verifyEmailOptSign =function (){
		return element (by.xpath("//*[contains(text(),'Email Opt-In')]")).isPresent();
	};
	
	//functie apasa checkbox Personal Use
	that.checkPersonalUse =function (){
		return $('[for="business-user"]').click ();
	};
	
	//functie apasare buton Sing up
	that.signUpButtonClick =function (){
	return $('[ng-click="PrivacyConsentForm.onFormSubmit($event)"]').click();
	
	};
	
	//functie verificare text Signup Success
	that.verifySignupSuccessSign =function (){
		return element (by.xpath("//*[contains(text(),'Signup Success!')]")).isPresent();
	};
	
	/*
	
	that.SearchItCategoryClick =function (){
		return element (by.xpath("//span[@class='SkillSelectCategory-text'] [contains(text(),'Websites, IT & Software')]")).click();
		
		};
		
   that.verifyItCategorySign =function (){
			return element (by.xpath("//*[@class='SkillSelectResults Card']//*[@class='SkillSelectResults-header']//*")).isPresent();
		};	
	
 
		*/
	
	//functie verificare text Welcome Back
	
	
	
	//----------------------Login----------------------------------------------------------------------------
	
	
	that.verifyWelcomeBackSign =function (){
		return element (by.xpath("//*[contains(text(),'Welcome Back')]")).isPresent();
	};
	
	//functie introducere email la login
	that.fillInEmailLogin =function (email){
		element (by.id("username")).clear();
		return element (by.id("username")).sendKeys(email);
	};
	
	//functie verificare neaparitie mesaj de eroare
	that.emailErrorMsgLoginDisabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter your username or email address.')]")).isDisable();
	};
	
	//functie introducere parola la login
	that.fillInPasswordLogin =function (password){
		element (by.id("password")).clear();
		return element (by.id("password")).sendKeys(password);
	};
	
	//functie verificare neaparitie mesaj de eroare
	that.passErrorMsgLoginDisabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter your password.')]")).isDisable();
	
	};
	
	//functie apasare buton Remember me
	that.rememberMeCheck =function (){
	    return $('[for="loginpermanent"]').click ();
	};
	
	
	//functie apasare buton Login
	that.loginButtonClick = function (){
		return element (by.id("login_btn")).click();
		
	};
	
	//functie verificare text Login Success
	that.verifyLoginSuccessSign =function (){
		return element (by.xpath("//*[contains(text(),'Login Success!')]")).isPresent();
	};
	
	//functie verificare aparitie mesaj de eroare
	that.emailErrorMsgLoginEnabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter your username or email address.')]")).isEnable();
	};
	
	//functie verificare aparitie mesaj de eroare
	that.passErrorMsgLoginEnabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter your password.')]")).isEnable();
	
	};
	
	//functie verificare mesaj incorect username/password
	
	that.incorectUsernamePassMsg =function (){
		return element (by.xpath("//*[contains(text(),'Incorrect username or password provided.')]")).isPresent();
	};
	
	//functie verificare mesaj invalid username
	
	that.invalidUsernameMsg =function (){
		return element (by.xpath("//*[contains(text(),'Please enter a valid username or email address.')]")).isPresent();
	};
	
return that;
	
})();

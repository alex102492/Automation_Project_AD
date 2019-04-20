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
	
	that.verifyEmptyEmailError =function (){
		return element (by.xpath("//*[contains(text(),'Please enter an email address.')]")).getText();
	};
	
	//functie verificare aparitie mesaj de eroare
	that.passErrorMsgEnabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter a password.')]")).isEnable();
	};
	
	that.verifyEmptyPasswordError =function (){
		return element (by.xpath("//*[contains(text(),'Please enter a password.')]")).getText();
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
	
	//functie verificare aparitie mesaj de eroare
	that.usernameErrorMsgEnabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter a username.')]")).isEnable();
	};
	
	that.verifyEmptyUsernameError =function (){
		return element (by.xpath("//*[contains(text(),'Please enter a username.')]")).getText();
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
	that.verifyEmptyUsernameLoginError =function (){
		return element (by.xpath("//*[contains(text(),'Please enter your username or email address.')]")).getText();
	};
	
	
	//functie verificare aparitie mesaj de eroare
	that.passErrorMsgLoginEnabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter your password.')]")).isEnable();
	
	};
	
	// Luam textul de mesaj empty username
	that.verifyEmptyPasswordLoginError =function (){
		return element (by.xpath("//*[contains(text(),'Please enter your password.')]")).getText();
	
	};
	
	//functie verificare mesaj incorect username/password
	
	that.incorectUsernamePassMsg =function (){
		return element (by.xpath("//*[contains(text(),'Incorrect username or password provided.')]")).isPresent();
	};
	
	// Luam textul de mesaj incorect username
	that.verifyIncorectUsernamePassMsg =function (){
		return element (by.xpath("//*[contains(text(),'Incorrect username or password provided.')]")).getText();
	};
	
	//functie verificare mesaj invalid username
	
	that.invalidUsernameMsg =function (){
		return element (by.xpath("//*[contains(text(),'Please enter a valid username or email address.')]")).isPresent();
	};

	// Luam textul de mesaj invalid username
	that.verifyInvalidUsernameMsg =function (){
		return element (by.xpath("//*[contains(text(),'Please enter a valid username or email address.')]")).getText();
	};
	
	
	//verificam ca apare butonul de meniu
	that.verifyMenuButtonPresent = function (){
		return element (by.xpath("//fl-callout[5]//fl-callout-trigger[1]//fl-button[1]")).isPresent();
			};
	
	//luam textul de dupa SUCCESSFUL LOGIN 
	that.verifyLoginSuccessText = function () {
		return element (by.xpath("//h2[contains(text(),'Alexandra D.')]")).getText();	
	};


	//-------------------Singout Page----------------------------
	
	//dam click pe butonul de meniu
	that.menuButtonClick = function (){
		return element (by.xpath("//fl-callout[5]//fl-callout-trigger[1]//fl-button[1]")).click();
			};
   //dam click pe logout
	that.logoutButtonClick = function (){
		return element (by.xpath("//fl-link[@fltrackinglabel='Account-Logout']//button[@type='button']")).click();
			};
	//verificam mesaj logout
	that.logoutSuccessMessage = function (){
		return element (by.xpath("//*[contains(text(),'Hire expert freelancers for any job, online')]")).getText();
			};
			
     
	
	//-------------------------------------------------------------
	
	//functie alege departament skiluri
	that.selectDepartmentSkill = function(){
		return element (by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-onboarding-skill-select/div/fl-skill-select/div/div/fl-skill-select-panel[1]/div/div[1]/ng-transclude/fl-skill-select-category[1]/span[2]")).click();
	};
	
	//functie elege skiluri
	that.selectSkillCategoryHTML= function(){
		return element (by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-onboarding-skill-select/div/fl-skill-select/div/div/fl-skill-select-results/div/div[1]/ng-transclude/fl-skill-select-skill[2]/label/div")).click();
		
	};
	
	that.selectSkillCategoryJAVA= function(){
		return element (by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-onboarding-skill-select/div/fl-skill-select/div/div/fl-skill-select-results/div/div[1]/ng-transclude/fl-skill-select-skill[7]/label/div")).click();
		
	};
	
    //functie de scroll   
    that.scrollElemFinderIntoView = function (elemFinder){
    	var promise = browser.executeScript(function(elem){
    		elem.scrollIntoView(false);//false
    	},elemFinder);
    	return promise;    	
    };
	
    //butonul next step Skills
    that.nextStepSkillsButton= element (by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-onboarding-skill-select/div/fl-skill-select/div/fl-skill-select-footer/footer/button"));
    
	//functie buton next
	that.nextStepSkills= function(){
		return element (by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-onboarding-skill-select/div/fl-skill-select/div/fl-skill-select-footer/footer/button")).click();
	};
	
	//functie verificare mesaj in pagina skiluri
	
	that.verifySkillsTextPresent =function (){
		return element (by.xpath("//*[contains(text(),'Welcome to Freelancer.com - the world's largest online platform for finding jobs!')]")).isPresent();
	};
	
	//functie introducere first name

	that.fillInFirstName =function (firstname){
		element (by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-complete-profile/div/div[2]/div[1]/span[2]/input[1]")).clear();
		return element (by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-complete-profile/div/div[2]/div[1]/span[2]/input[1]")).sendKeys(firstname);
	};
	

	that.fillInLastName =function (lastname){
		element (by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-complete-profile/div/div[2]/div[1]/span[2]/input[1]")).clear();
		return element (by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-complete-profile/div/div[2]/div[1]/span[2]/input[1]")).sendKeys(lastname);
	};
	
	that.selectLanguages= function(language){
		element (by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-complete-profile/div/div[2]/div[2]/span[3]/span/span[1]/span/ul")).clear();
		return element(by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-complete-profile/div/div[2]/div[2]/span[3]/span/span[1]/span/ul")).sendKeys(language);
	};
	
	that.selectAdvancedLevel = function(){
		return element (by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-complete-profile/div/div[2]/div[3]/span[3]/fl-experience-level[3]/div/span[3]")).click();
	};
	
    //butonul next step Skills
    that.nextStepLanguagesButton= element (by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-complete-profile/div/div[2]/div[4]/button"));

	that.nextStepLanguages =function(){
		return element (by.xpath("//*[@id='main']/fl-freelancer-onboarding/div/fl-complete-profile/div/div[2]/div[4]/button")).click();
	};
	
   //functie verificare mesaj in pagina payment
	
	that.verifyPaymentTextPresent =function (){
		return element (by.xpath("//*[contains(text(),'Select a Payment Method to verify:')]")).isPresent();
	};
	
    //butonul skip for new
    that.skipForNewButtonPaymentButton= element (by.id("skip-button-pv"));

	that.skipForNewButtonPayment = function(){
		return element (by.id("skip-button-pv")).click();
	};
	
	that.verifyMembershipTextPresent =function (){
		return element (by.xpath("//*[contains(text(),'Freelancers with Plus Membership are 427% more likely to be awarded a project.')]")).isPresent();
	};
	
    //butonul skip for new
    that.skipForNewButtonMembershipButton= element (by.id("skip-button-upsell"));
    
	that.skipForNewButtonMembership = function(){
		return element (by.id("skip-button-upsell")).click();
	};
	
	that.verifyHomeScreenTextPresent =function (){
		return element (by.xpath("//*[contains(text(),'Get started on Freelancer with these tips')]")).isPresent();
	};
	
	
return that;
	
})();

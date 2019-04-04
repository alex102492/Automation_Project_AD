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
	
	that.closeCookies = function (){
		return element (by.id("close-cookie-banner")).click();
		
	};
	
	that.verifySignupSign =function (){
		return element (by.xpath("//*[contains(text(),'Sign Up')]")).isPresent();
	};
	
	that.joinFreelancerButton =function (){
		return element (by.id("signup_btn")).click();
	};
	
	that.emailErrorMsgEnabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter an email address.')]")).isEnable();
	};
	
	that.passErrorMsgEnabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter a password.')]")).isEnable();
	};
	
	that.fillInEmail =function (email){
		element (by.id("new-email")).clear();
		return element (by.id("new-email")).sendKeys(email);
	};
	
	that.fillInPassword =function (password){
		element (by.id("new-password")).clear();
		return element (by.id("new-password")).sendKeys(password);
	};
	
	that.emailErrorMsgDisabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter an email address.')]")).isDisable();
	};
	
	that.passErrorMsgDisabled =function (){
		return element (by.xpath("//*[contains(text(),'Please enter a password.')]")).isDisable();
	
	};
	
	that.verifyChooseUsernameSign =function (){
		return element (by.xpath("//*[contains(text(),'Choose a username')]")).isPresent();
	};
	
	that.fillInUsername =function (username){
		element (by.id("new-username")).clear();
		return element (by.id("new-username")).sendKeys(username);
	};
	
	that.usernameNextButton = function (){
		return element (by.xpath("//*[@class='btn btn-info btn-large ModalLoginSignup-signupUsernameInput-submitBtn']")).click();
		
	};
	
	that.verifyAccountTypeSign =function (){
		return element (by.xpath("//*[contains(text(),'Select account type')]")).isPresent();
	};
	
	that.selectWorkOption =function (){
		return element (by.xpath("//*[@class='ModalLoginSignup-signupAccountType-card-content']//*[contains(text(),'I want to work')]")).click();
	};
	
	that.verifyEmailOptSign =function (){
		return element (by.xpath("//*[contains(text(),'Email Opt-In')]")).isPresent();
	};
	
	that.checkPersonalUse =function (){
		return $('[for="business-user"]').click ();
	};
	
	that.signUpButtonClick =function (){
	return $('[ng-click="PrivacyConsentForm.onFormSubmit($event)"]').click();
	
	};
	
	that.verifySignupSuccessSign =function (){
		return element (by.xpath("//*[contains(text(),'Signup Success!')]")).isPresent();
	};
	
	
return that;
	
})();

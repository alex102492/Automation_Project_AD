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
		return element (by.xpath("//*[contains(text(),'Alexandra D.')]")).getText();	
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
			
     
	
	//----------------------Update Profile Page---------------------------------------
	
	//Verificam ca apare User settings in meniu
	that.userSettingsButtonPresent = function (){
		return element (by.xpath("/html[1]/body[1]/div[1]/fl-callout-content[1]/div[1]/div[2]/app-user-settings[1]/app-account[1]/app-account-list[1]/fl-list[1]/fl-list-item[3]/fl-bit[1]/fl-bit[1]/fl-bit[1]/fl-bit[1]/fl-link[1]/a[1]")).isPresent();
	};
	
	//Dam click pe User settings	
	that.userSettingsButtonClick = function (){
		return element (by.xpath("/html[1]/body[1]/div[1]/fl-callout-content[1]/div[1]/div[2]/app-user-settings[1]/app-account[1]/app-account-list[1]/fl-list[1]/fl-list-item[3]/fl-bit[1]/fl-bit[1]/fl-bit[1]/fl-bit[1]/fl-link[1]/a[1]")).click();
	};	
	
	//Fac clear si introduc First Name
	that.fillInFirstName =function (firstname){
		element (by.id("firstname")).clear();
		return element (by.id("firstname")).sendKeys(firstname);
	};
	
	//Fac clear si introduc Last Name
	that.fillInLastName =function (lastname){
		element (by.id("lastname")).clear();
		return element (by.id("lastname")).sendKeys(lastname);
	};
	
	//Fac clear si introduc Adresa
	that.fillInAdress =function (adress){
		element (by.id("address1")).clear();
		return element (by.id("address1")).sendKeys(adress);
	};
	
	//Fac clear si introduc City
	that.fillInCity =function (city){
		element (by.id("city")).clear();
		return element (by.id("city")).sendKeys(city);
	};
	
	//Fac clear si introduc Zip Code
	that.fillInZipCode =function (zipCode){
		element (by.id("zip")).clear();
		return element (by.id("zip")).sendKeys(zipCode);
	};
	
	//Fac clear si introduc Province
	that.fillInProvince =function (province){
		element (by.id("state_code")).clear();
		return element (by.id("state_code")).sendKeys(province);
	};
	
	
    //functie de scroll   
    that.scrollElemFinderIntoView = function (elemFinder){
    	var promise = browser.executeScript(function(elem){
    		elem.scrollIntoView(false);//false
    	},elemFinder);
    	return promise;    	
    };
	
	//ia elementul dupa XPATH --> Company Field -- folosit pentru functia de SCROLL
	that.companyFieldGet = element (by.xpath('//*[@id="changeuserinfoform"]//*[@name="company"]'));
	
	
	//Fac clear si introduc Company
	that.fillInCompany =function (company){
		element (by.xpath('//*[@id="changeuserinfoform"]//*[@name="company"]')).clear();
		return element (by.xpath('//*[@id="changeuserinfoform"]//*[@name="company"]')).sendKeys(company);
	};
		
	//ia elementul dupa XPATH --> Location Field -- folosit pentru functia de SCROLL
	that.locationFieldGet = element (by.id('location'));
	
	
	//Fac clear si introduc Location
	that.fillInLocation =function (location){
		element (by.id('location')).clear();
		return element (by.id('location')).sendKeys(location);
	};
	
	//Fac click pe Auto Location	
	that.autoLocationButtonClick =function (){
		return element (by.id('location-reset')).click();
	};
	
	//ia elementul dupa XPATH --> Time Zone Field -- folosit pentru functia de SCROLL
	that.timeZoneFieldGet = element (by.id('timezone'));
	
	
	//selectez Time zone
	that.fillInTimeZone =function (){
		return element(by.cssContainingText('option', 'Europe/Athens')).click();
	};
	
	//ia elementul dupa XPATH --> Language Field -- folosit pentru functia de SCROLL
	that.languageFieldGet = element (by.xpath('//*[@id="changeuserinfoform"]//*[@name="userLanguage"]'));
	
	
	//selectez Language
	that.fillInLanguage =function (){
		return element(by.cssContainingText('option', 'English')).click();
	};
	
	//ia elementul dupa XPATH --> Project Language Field -- folosit pentru functia de SCROLL
	that.projectLanguageFieldGet = element (by.xpath('//*[@id="changeuserinfoform"]//*[@name="input-lang"]'));
	
	
	//selectez Language
	that.fillInProjectLanguage =function (){
		return element(by.cssContainingText('option', 'English')).click();
	};
	
	//verificam ca apare project language-ul selectat
	that.addedProjectLanguagePresent = function (){
	return element (by.id('selected_lang_en')).isPresent();
			};
	
	//ia elementul dupa XPATH --> Save Settings Button -- folosit pentru functia de SCROLL
	that.saveSettingsButtonGet = element (by.xpath('//*[@id="profileSettingsSubmitBtn"]'));
    
	//dam click pe Save settings	
	that.saveSettingsButtonClick = function (){
		return element (by.id('profileSettingsSubmitBtn')).click();
				};

	//verificam ca apare textul la salvare
	that.profileSettingsSaveTextPresent= function (){
		return element (by.xpath("//aside[@id='profileSettingsSuccess']//strong[contains(text(),'Your account details have been successfully saved!')]")).getText();
		
	};
	
	//-----------------Dashboard page--------------------------------------------------------

	//verificam ca exista butonul Browse
	that.browseButtonPresent = function (){
		return element (by.xpath("//fl-bit/fl-container/fl-callout[1]/fl-callout-trigger/fl-button/button")).isPresent();
	};
	
	//dam click pe butonul Browse
	that.browseButtonClick = function (){
		return element (by.xpath("//fl-bit/fl-container/fl-callout[1]/fl-callout-trigger/fl-button/button")).click();
	};
	
	//verificam ca apare fieldul de search
	that.searchFieldPresent = function (){
		return element (by.xpath("//fl-bit/fl-bit/fl-search/fl-input/fl-bit/fl-bit/input")).isPresent();
	};
	
	//dam clik pe Projects
	that.searchProjectsButton = function (){
		return element (by.xpath("//fl-grid/fl-col[2]/app-browse-links-item/fl-link/a")).click();
	};
	
	//verificam ca apare textul Projects
	that.projectTextVerify = function (){
		return element (by.xpath('//*[@id="filterHeader"]/li[1]/header/span[2]')).getText();
	};
	
	//cautam un proiect in search
	that.projectSearchField = function(searchProject){
		element (by.xpath('//*[@id="search-results"]/fl-header-filter/div/div[1]/input')).clear();
		return element (by.xpath('//*[@id="search-results"]/fl-header-filter/div/div[1]/input')).sendKeys(searchProject);
		
	};
	
			
	
	
return that;
	
})();

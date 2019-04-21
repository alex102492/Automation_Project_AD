/**********************************************************************************
* 
*Created by: 
*
*Description: Aici descriem pasii care ii urmeaza scriptul automat pentru flow-ul de:
*			1. Login
*			2. Update Profile ( first name / last name / adress / city / zipcode/ state/ company / location and languages)
*			3. Save Settings
*			4. Logout
* 
*
*
*
**********************************************************************************/


module.exports = (function(profileUpdatePage) { 
	
	profileUpdatePage.updateUserProfilePage = function (firstname, lastname, adress, city, zipCode, province, company, location, profileSaveSuccessMessage){
		//Dam click pe butonul de meniu
		profileUpdatePage.menuButtonClick();
		
		browser.sleep(1000);
		
		//Verificam ca User settings apare in meniu
		expect (profileUpdatePage.userSettingsButtonPresent).toBeTruthy();
		console.log ("Butonul user settings este prezent in meniu.");
		
		browser.sleep(1000);
		
		//Dam click pe User setting
		profileUpdatePage.userSettingsButtonClick();
		
		//Fac clear si introduc First Name
		profileUpdatePage.fillInFirstName(firstname);
		
		//Fac clear si introduc Last Name
		profileUpdatePage.fillInLastName(lastname);
		
		//Fac clear si introduc Adresa
		profileUpdatePage.fillInAdress(adress);
		
		//Fac clear si introduc City
		profileUpdatePage.fillInCity(city);
		
		//Fac clear si introduc Zip Code
		profileUpdatePage.fillInZipCode(zipCode);
				
		//Fac clear si introduc State/Province
		profileUpdatePage.fillInProvince(province);
		
		//Fac scroll pana la campul Company
		profileUpdatePage.scrollElemFinderIntoView(profileUpdatePage.companyFieldGet);
		
		//Fac clear si introduc Company
		profileUpdatePage.fillInCompany(company);
		
		//Fac scroll pana la campul Time Zone
		profileUpdatePage.scrollElemFinderIntoView(profileUpdatePage.timeZoneFieldGet);
		
		//Selectez TIMEZONE-ul din drop-down
		profileUpdatePage.fillInTimeZone();
		
		//Fac scroll pana la campul Location
		profileUpdatePage.scrollElemFinderIntoView(profileUpdatePage.locationFieldGet);
		
		//Fac clear si introduc Location
		profileUpdatePage.fillInLocation(location);
		
		//Dam click pe Auto Location ca sa puna locatia exacta
		profileUpdatePage.autoLocationButtonClick();
		
		//Fac scroll pana la campul Language
		profileUpdatePage.scrollElemFinderIntoView(profileUpdatePage.languageFieldGet);
		
		//Selectez Language-ul din drop-down
		profileUpdatePage.fillInLanguage();
		
		//Fac scroll pana la campul Project Language
		profileUpdatePage.scrollElemFinderIntoView(profileUpdatePage.projectLanguageFieldGet);
		
		//Selectez Project Language-ul din drop-down
		profileUpdatePage.fillInProjectLanguage();
		
		//Verificam ca apare Project Language-ul selectat
		expect (profileUpdatePage.addedProjectLanguagePresent).toBeTruthy();
		console.log ("Limba selectat 'Engleza' este prezenta in pagina.");
		
		browser.sleep(1000);
		
		//Fac scroll pana la butonul Save Settings
		profileUpdatePage.scrollElemFinderIntoView(profileUpdatePage.saveSettingsButtonGet);
		
		//Dam click pe butonul Settings
		profileUpdatePage.saveSettingsButtonClick();
				
		browser.sleep(1000);
		
		//verificam ca exista mesajul de save settings success 
		expect(profileUpdatePage.profileSettingsSaveTextPresent()).toEqual(profileSaveSuccessMessage);
		console.log("When save setting is uccessfull you will see a message like -> " + profileSaveSuccessMessage);

		
		browser.sleep(2000);
		
	};
	

	
	return profileUpdatePage;
	
})(require('../02.Functions/basePageObj.js'));
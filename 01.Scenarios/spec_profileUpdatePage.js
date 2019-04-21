/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


describe('spec_profileUpdatePage', function() {
	
	var loginPage = require('../03.Pages/loginPage.js');
	var logoutPage = require('../03.Pages/logoutPage.js');
	var profileUpdatePage = require('../03.Pages/profileUpdatePage.js');

	var testdata = require('../04.InputData/InputData.json');
			testdata.forEach (function (data) {
				
		it('Profile Update page', function(){
		
			loginPage.loginSuccesfully(data.URL+data.login, data.email, data.password, data.postLoginSuccessText);
	        console.log ("Logarea s-a efectuat cu succes!");
	        
	        profileUpdatePage.updateUserProfilePage(data.firstname, data.lastname, data.adress, data.city, data.zipCode, data.province, data.company, data.location, data.profileSaveSuccessMessage);
	        console.log ("Update User Profile s-a efectuat cu succes!");
	        
	        logoutPage.logoutUserPage(data.postLogoutText);
	        console.log ("Logoutul s-a efectuat cu succes!");
	
		});
	});
	
});
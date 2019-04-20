/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


describe('spec_logoutPage', function() {
	
	var loginPage = require('../03.Pages/loginPage.js');
	var logoutPage = require('../03.Pages/logoutPage.js');

	var testdata = require('../04.InputData/InputData.json');
			testdata.forEach (function (data) {
				
		it('Logout page', function(){
		
			loginPage.loginSuccesfully(data.URL+data.login, data.email, data.password, data.postLoginSuccessText);
	        console.log ("Logarea s-a efectuat cu succes!");
	        
	        logoutPage.logoutUserPage(data.postLogoutText);
	        console.log ("Logoutul s-a efectuat cu succes!");
	
		});
	});
	
});
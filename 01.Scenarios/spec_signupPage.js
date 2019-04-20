/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


describe('spec_signupPage', function() {
	
	var signupPage = require('../03.Pages/signupPage.js');

	var testdata = require('../04.InputData/InputData.json');
			testdata.forEach (function (data) {
				
		it('Signup Page', function(){
		
			signupPage.signupUser(data.URL+data.signup, data.email, data.password, data.emailError, data.passwordError, data.usernameError, data.username);
	        console.log("Utilizatorul a fost inregistrat cu succes!")
		});
	});
	
});
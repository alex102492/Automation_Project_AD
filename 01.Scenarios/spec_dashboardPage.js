/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


describe('spec_dashboardPage', function() {
	
	var loginPage = require('../03.Pages/loginPage.js');
	var logoutPage = require('../03.Pages/logoutPage.js');
	var dashboardPage = require('../03.Pages/dashboardPage.js');
    var searchProjectJava ="Java";
    var searchProjectSQL ="SQL";
	var testdata = require('../04.InputData/InputData.json');
			testdata.forEach (function (data) {
				
	    beforeEach(function () {
	    	loginPage.loginSuccesfully(data.URL+data.login, data.email, data.password, data.postLoginSuccessText);
	        console.log ("Logarea s-a efectuat cu succes!");
		});
	    
		it('Search Java Project', function(){
		
			dashboardPage.browseButton(searchProjectJava);
	
		});
		
		it('Search SQL Project', function(){
			
			dashboardPage.browseButton(searchProjectSQL);
	
		});
		
	    afterEach(function () {
	    	 logoutPage.logoutUserPage(data.postLogoutText);
		     console.log ("Logoutul s-a efectuat cu succes!");
		});
		
	});
	
});
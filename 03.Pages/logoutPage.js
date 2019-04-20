/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


module.exports = (function(logoutPage) { 
	
	logoutPage.logoutUserPage = function (postLogoutText){
		//dam click pe butonul de meniu
		logoutPage.menuButtonClick();
		
		browser.sleep(1000);
		
		//dam click pe logout
		logoutPage.logoutButtonClick();
		
		browser.sleep(1000);
		
		//Aici verificam ca logoutul s-a efectuat cu success
		expect(logoutPage.logoutSuccessMessage()).toEqual(postLogoutText);
		console.log("When logout is successfullyou will see a message like -> " + postLogoutText);
		
		
	};
	

	
	return logoutPage;
	
})(require('../02.Functions/basePageObj.js'));
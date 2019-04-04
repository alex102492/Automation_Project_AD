/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


describe('spec_loginPage', function() {
	
	var loginPage = require('../03.Pages/loginPage.js');

	var testdata = require('../04.InputData/InputData.json');
			testdata.forEach (function (data) {
				
		it('Login blank credentials', function(){
					
					loginPage.loginUnsuccesfullyBlankCredentials(data.URL+data.login, "", "");
			        console.log ("Logarea nu s-a efectuat! Userul si Parola sunt necompletate!")
		});
		
		it('Login blank username', function(){
			
			loginPage.loginUnsuccesfullyBlankUsername(data.URL+data.login, data.email, "");
	        console.log ("Logarea nu s-a efectuat! Userul este necompletat!")
        
		});
				
		it('Login blank password', function(){
			
			loginPage.loginUnsuccesfullyBlankPassword(data.URL+data.login, "", data.password);
	        console.log ("Logarea nu s-a efectuat! Parola nu este necompletata!")
        
		});
		
		it('Incorrect username and password', function(){
			
			loginPage.loginIncorrectUsernamePass(data.URL+data.login, data.incorrectEmail, data.incorrectPassword);
	        console.log ("Logarea nu s-a efectuat! Incorrect username and password!")
        
		});
		
         it('Incorrect username', function(){
			
			loginPage.loginIncorrectUsernamePass(data.URL+data.login, data.incorrectEmail, data.password);
	        console.log ("Logarea nu s-a efectuat! Incorrect username !")
        
		});

          it('Incorrect username', function(){
	
			loginPage.loginIncorrectUsernamePass(data.URL+data.login, data.email, data.incorrectPassword);
		    console.log ("Logarea nu s-a efectuat! Incorrect password!")
		
		});
          
          it('Invalid username', function(){
        		
  			loginPage.loginInvalidUsername(data.URL+data.login, data.invalidEmail, data.password);
  		    console.log ("Logarea nu s-a efectuat! Invalid email/username!")
  		
  		});
		
		it('Login succesfully', function(){
		
			loginPage.loginSuccesfully(data.URL+data.login, data.email, data.password);
	        console.log ("Logarea s-a efectuat cu succes!")
		});
	});
	
});
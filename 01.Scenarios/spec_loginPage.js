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
				
		fit('Login blank credentials', function(){
					
					loginPage.loginUnsuccesfullyBlankCredentials(data.URL+data.login, "", "",data.loginEmptyPassword, data.loginEmptyUsername);
			        console.log ("Logarea nu s-a efectuat! Userul si Parola sunt necompletate!")
		});
		
		it('Login blank password', function(){
			
			loginPage.loginUnsuccesfullyBlankPassword(data.URL+data.login, data.email, "",data.loginEmptyPassword);
	        console.log ("Logarea nu s-a efectuat! Parola nu este necompletata!")
        
		});
				
		it('Login blank username', function(){
			
			loginPage.loginUnsuccesfullyBlankUsername(data.URL+data.login, "", data.password, data.loginEmptyUsername);
	        console.log ("Logarea nu s-a efectuat! Userul este necompletat!")
        
		});
		
		it('Incorrect username and password', function(){
			
			loginPage.loginIncorrectUsernamePass(data.URL+data.login, data.incorrectEmail, data.incorrectPassword, data.wrongCredentialsError);
	        console.log ("Logarea nu s-a efectuat! Incorrect username and password!")
        
		});
		
         it('Incorrect username', function(){
			
			loginPage.loginIncorrectUsernamePass(data.URL+data.login, data.incorrectEmail, data.password, data.wrongCredentialsError);
	        console.log ("Logarea nu s-a efectuat! Incorrect username !")
        
		});

          it('Incorrect password', function(){
	
			loginPage.loginIncorrectUsernamePass(data.URL+data.login, data.email, data.incorrectPassword, data.wrongCredentialsError);
		    console.log ("Logarea nu s-a efectuat! Incorrect password!")
		
		});
          
          it('Invalid username', function(){
        		
  			loginPage.loginInvalidUsername(data.URL+data.login, data.invalidEmail, data.password, data.loginInvalidUsername);
  		    console.log ("Logarea nu s-a efectuat! Invalid email/username!")
  		
  		});
		
		it('Login succesfully', function(){
		
			loginPage.loginSuccesfully(data.URL+data.login, data.email, data.password, data.postLoginSuccessText);
	        console.log ("Logarea s-a efectuat cu succes!")
		});
	});
	
});
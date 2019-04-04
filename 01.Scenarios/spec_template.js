/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


describe('spec_template', function() {
	
	var templatePage = require('../03.Pages/templatePage.js');

	var testdata = require('../04.InputData/InputData.json');
			testdata.forEach (function (data) {
				
		it('Template page', function(){
		
			templatePage.templatePage(data);
	
		});
	});
	
});
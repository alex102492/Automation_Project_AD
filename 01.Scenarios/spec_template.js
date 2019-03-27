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

	
			testdata.forEach (function (data) {
				
		it('Template page', function(){
		
			templatePage.templatePage(data);
	
		});
	});
	
});
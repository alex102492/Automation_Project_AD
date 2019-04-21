/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


module.exports = (function(dashboardPage) { 
	
	dashboardPage.browseButton = function (searchProject){
		
		//---verificam ca exista butonul Browse
		expect(dashboardPage.browseButtonPresent()).toBeTruthy();
		
		
		//---facem click pe butonul Browse
		dashboardPage.browseButtonClick();
		
		//verificam ca apare fieldul de search
		expect(dashboardPage.searchFieldPresent).toBeTruthy();
		
		//dam clik pe Projects
		dashboardPage.searchProjectsButton();
		
		//verificam ca apare textul Projects
		expect(dashboardPage.projectTextVerify()).toEqual("Projects");
		
		//cautam un proiect
		dashboardPage.projectSearchField(searchProject);
		
		//dam enter
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
	};
	

	
	return dashboardPage;
	
})(require('../02.Functions/basePageObj.js'));
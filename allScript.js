var projectEmployeePortal = angular.module('projectEmployeePortal', []);

projectEmployeePortal.controller('mainController', ['$scope',function($scope){

	$scope.projectList = [{name:"project1" ,description:"This is finance Domain", skillsReq:"finance"},
	{name:"project2" ,description:"This is Insurance project", skillsReq:"Insurance"},
	{name:"project3" ,description:"This is IT project", skillsReq:"IT"},
	{name:"project4" ,description:"This is telecom Project", skillsReq:"telecom"},
	{name:"project5" ,description:"This is project5", skillsReq:"project5Skills"}];

	$scope.employeeList = [{name:"Employee1" ,description:"This is Employee1", skills:"IT"},
	{name:"Employee2" ,description:"This is Employee2", skills:"telecom"},
	{name:"Employee3" ,description:"This is Employee3", skills:"Insurance"},
	{name:"Employee4" ,description:"This is Employee4", skills:"telecom"},
	{name:"Employee5" ,description:"This is Employee5", skills:"telecom"},
	{name:"Employee6" ,description:"This is Employee6", skills:"finance"},
	{name:"Employee7" ,description:"This is Employee7", skills:"Insurance"},
	{name:"Employee8" ,description:"This is Employee8", skills:"finance"},
	{name:"Employee9" ,description:"This is Employee9", skills:"Insurance"},
	{name:"Employee10" ,description:"This is Employee10",skills:"project5Skills"},
	{name:"Employee11" ,description:"This is project11 finance", skills:"IT"},
	{name:"Employee12" ,description:"This is Employee12", skills:"IT"},
	];


	$scope.selectProject =  function(event,currentProject){
		angular.element(event.currentTarget).parent().children().removeClass("selected");
		angular.element(event.target).parent().addClass("selected");
		$scope.selectedProject = currentProject;
	}
	$scope.showAllEmployee = function(){
		angular.element(document.querySelectorAll('.selected')).removeClass("selected");
	/*$scope.selectedProject.name = "";
	$scope.selectedProject.description = "";
	$scope.selectedProject.skillsReq = "";*/
	$scope.selectedProject = undefined;
}
$scope.addProject = function(){
	var newProject ={};
	newProject.name = $scope.project.name;
	newProject.description = $scope.project.description;
	newProject.skillsReq = $scope.project.skills;
	$scope.projectList.push(newProject);
	$scope.project = {};
	//$scope.addProjectFlag = false;
}

}]);
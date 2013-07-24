angular.module('meetme',['meetmeServices'])
	.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/addNew',{templateUrl: 'partials/add-appointment.html', controller:CreateController}).
	when('/edit/:id',{templateUrl: 'partials/edit-appointment.html', controller:EditController}).
	when('/listappointments',{templateUrl: 'partials/list-appointments.html', controller:AppointmentListController}).
	otherwise({redirectTo:'/listappointments'})
	
}]);
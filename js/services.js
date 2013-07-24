angular.module('meetmeServices', ['ngResource']).
    factory('Appointments', function($resource){
    var appointmentFactoryResource= $resource('data/:filename.json', {}, {query: {method:'GET',params:{filename:'appointments'},isArray:true}});
	appointmentFactoryList=appointmentFactoryResource.query();
	return appointmentFactoryList;
});
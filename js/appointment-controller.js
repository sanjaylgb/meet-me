function CreateController($scope,$location,Appointments){
	$scope.addAppointment=function(){
		$scope.appointment.id=Appointments.length+1;
		Appointments.push($scope.appointment);
		$location.path('/listappointments');
	};
	$scope.cancelCreateAppointment= function(){
		$location.path('/listappointments');
	};
}
function AppointmentListController($scope,Appointments){
	$scope.appointments=Appointments;	
	$scope.orderProperty = 'startTime';
	
	$scope.deleteAppointment=function(appointment){
		for(i=0; i<Appointments.length;i++){
			if(Appointments[i].id==appointment.id){
				var yesNo= confirm ("Are you sure you want to delete appointment for\n\t"+appointment.title );
				if(yesNo){
				Appointments.splice(i,1);
				break;
				}else{
					return;
				}
			}
		}
	}

}
function EditController($scope, $location, $routeParams, Appointments){
	for(i=0; i<Appointments.length;i++){
		if(Appointments[i].id.toString()==$routeParams.id){
			$scope.appointment=Appointments[i];
			$scope.orignal=angular.copy($scope.appointment);
			break;
		}
	}
	$scope.editAppointment=function(){
		for(i=0; i<Appointments.length;i++){
			if(Appointments[i].id.toString()==$routeParams.id){
				Appointments[i]=$scope.appointment;
				break;
			}
		}
		$location.path('/listappointments');
	};
	
	$scope.cancelEditAppointment= function(){
		$location.path('/listappointments');
	};
	$scope.isAppointmentUnchanged=function(appointment){
		return angular.equals(appointment, $scope.orignal)
	}

}
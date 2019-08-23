
var app = angular.module('loginapp', [])

app.controller('LoginController', ['$scope', '$http', function($scope, $http) {
    $scope.sendMail = function(){
        $http({
                method: "POST",
                url: "/send_email",
                data: angular.toJson({
                'username': $scope.username,
                'name':$scope.name,
                'cno':$scope.cno
                 }),
             }).success(function(data) {
                console.log(data);
                $('#modal-container-316091').modal('hide');
                window.location.reload();

            })
        }
}]);



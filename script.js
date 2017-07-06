

(function(){
  
  var app = angular.module("Test", []);
  
  var control = function($scope){
  
  $scope.check = function(var1,var2){
    if($scope.operation === "add"){
      $scope.answer = var1 + var2;
    }
    else if($scope.operation === "multiply"){
    $scope.answer = var1 * var2;
    }
  else if($scope.operation === "subtract"){
    $scope.answer = var1 - var2;
  }
  else{
    $scope.answer = var1/var2;
  }}
  
  $scope.message = "Calculator";
  $scope.operation = "add";
  }
  
  app.controller("control", control);
  
}());





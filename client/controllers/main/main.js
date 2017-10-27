
(function () {
  'use strict';

  angular.module('myApp')
  .controller('mainController', ['$scope', '$http', ctrlFunction]);

  function ctrlFunction($scope, $http) {

    function init() {
      $http.get('/cards/all').then(function(res){
        $scope.cards = res.data;
      });
      $scope.card = {};

    }
    $scope.AddCard = function(){
      console.log($scope.card)
      if($scope.card.number == undefined || $scope.card.number.length != 16 || !isNumber($scope.card.number) || checkValidCard($scope.card.number) ){
        toastr.error("Please add proper card number")
      } else if($scope.card.cvv == undefined || $scope.card.cvv.length != 3  || !isNumber($scope.card.cvv)) {
        toastr.error("Please add proper CVV number")
      }
      else{
       $http.post('/cards/save', {data: $scope.card}).then(function(res){
        console.log(res)
        toastr.success("Card Added");
        $scope.cards.push(res.data);
        $scope.card = {};
      });

     }
   };
   init();
   function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
   function checkValidCard(data) {
    var sum = 0;
    var len = data.length;
    for(var i = 0; i < len; i++) {
     var add = (data[i] - '0') * (2 - (i + len) % 2);
     add -= add > 9 ? 9 : 0;
     sum += add;
   }
   return sum % 10 == 0;
 } 

}
}());
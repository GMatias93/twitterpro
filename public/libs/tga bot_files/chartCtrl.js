angular.module('chart.ctrl', [])
  
.controller('chartCtrl', ['$scope','tweetFactory','$http', function ($scope, tweetFactory, $http) {
  console.log('chartCTRL');
  
//   $scope.tweets=[];
//   $scope.test = function(tweet){
//     console.log(tweet);
//   };
//   tweetFactory.stream.on('tweets', function(data){
//     console.log($scope.tweets);
//     $scope.tweets = data.concat($scope.tweets);
//     if($scope.tweets.length > 5){
//       $scope.tweets.length = 5;
//     }
//   });
},
]);

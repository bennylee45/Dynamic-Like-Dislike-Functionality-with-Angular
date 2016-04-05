// creating a module called myModule
var variable = angular.module("myModule",[]);



												// // creating a controller called myController
												// var myController  function($scope){
												// 	$scope.message = "Angular js tutorial";
												// }
												// //registering controller with module
												// myApp.controller("myController", myController);



//or alternatively, I can do the above two lines in one>>>
variable.controller("myController", function($scope){
	//bellow I'm adding a property of message to the scope object (in the view)
	
	var foods = [ {name: "French Fries", likes: 0, dislikes: 0},
				  {name: "McNuggets", likes: 0, dislikes: 0},
				  {name: "Hamburger", likes: 0, dislikes: 0},
				  {name: "Cheeseburger", likes: 0, dislikes: 0},
				  {name: "BigMac", likes: 0, dislikes: 0},
				  {name: "Filet-O-Fish", likes: 0, dislikes: 0},
				  {name: "Quarter Pounder", likes: 0, dislikes: 0},
				  {name: "McDouble", likes: 0, dislikes: 0},
				  {name: "McRib", likes: 0, dislikes: 0},
				  {name: "McChicken", likes: 0, dislikes: 0}


				];
	$scope.foods = foods;

	$scope.incrementLikes = function(food){
		food.likes++;
	}

	$scope.incrementDislikes = function(food){
		food.dislikes++;
	}

});

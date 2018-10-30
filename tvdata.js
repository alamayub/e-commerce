angular.module('myApp', []).controller('myCtrl', function($scope){
	$scope.data = [
		{"name":"Mi LED Smart TV 4A 108 cm (43)",                       "type":"Smart TV", "pic":"mi smart tv1.jpeg", "price":22999, "delP":25999, "brand":"Mi",     "rating":4.4, "discount"11},
		{"name":"Mi LED Smart TV 4A 80 cm (32)",                        "type":"Smart TV", "pic":"mi tv2.jpeg",       "price":13999, "delP":15999, "brand":"Mi",     "rating":4.3, "discount":15},
		{"name":"Samsung 80cm (32 inch) HD Ready LED TV 2018 Edition",  "type":"Smart TV", "pic":"sam tv1.jpeg",      "price":15999, "delP":26990, "brand":"Samsung","rating":4.5, "discount":40}
	];
});
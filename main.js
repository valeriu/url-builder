;
'use strict';
var app = angular.module('urlBuilderApp', []);

app.controller('UrlController', ['$scope', function($scope) {
	$scope.socialnetworks = [
		{
			"utm_source": "Facebook",
			"utm_medium": "Wall",
			"name" : "Facebook Personal"
		},
		{
			"utm_source": "Facebook",
			"utm_medium": "NoiIn.ca",
			"name" : "Facebook noi in .ca"
		},
		{
			"utm_source": "Facebook",
			"utm_medium": "Gospodine.ca",
			"name" : "Facebook Gospodin.ca"
		},
		{
			"utm_source": "Facebook",
			"utm_medium": "Gustosel",
			"name" : "Facebook Gustosel"
		},
		{
			"utm_source": "Facebook",
			"utm_medium": "DeliciiBucatariaMea",
			"name" : "Facebook Delicii din Bucataria Mea"
		},
		{
			"utm_source": "Twitter",
			"utm_medium": "Wall",
			"name" : "Twitter Eddera"
		},
		{
			"utm_source": "Pinterest",
			"utm_medium": "Wall",
			"name" : "Pinterest Eddera"
		},
		{
			"utm_source": "Google",
			"utm_medium": "Wall",
			"name" : "Google+ Personal"
		}
	  ];
}]);
app.filter('capitalizeFirstLetter', function () {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase().replace(/\s+/g, '');}) : '';
    }
});

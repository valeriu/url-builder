;
(function ($) {
	//"use strict";
	var urlBuilder = {
		// Start Functions
		start: function () {
			urlBuilder.GenerateUrl();
		},
		// Generate URL
		GenerateUrl: function () {
			var services = [
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

			function capitalizeFirstLetter(str,force){
				str = force ? str.toLowerCase() : str;
				return str.replace(/(\b)([a-zA-Z])/g,
				function(firstLetter){
					return firstLetter.toUpperCase();
				});
			}

			function generateUrl(arr) {
				var out = '';
				var posturl = $('#post-url').val().trim();
				var postname = capitalizeFirstLetter($('#post-name').val()).replace(/\s+/g, '');
				var i;
				for(i = 0, k = arr.length; i < k; i++) {

					out += '<div class="panel callout radius"><span class=" success radius label">' + arr[i].name + '</span><br> ' + posturl + '?utm_source=' + arr[i].utm_source + '&utm_medium=' + arr[i].utm_medium + '&utm_campaign=' + postname + '</div>';
				}
				document.getElementById("url-results").innerHTML = out;
			}
			$( "#generate-url" ).click(function() {
				generateUrl(services);
			});

		},

	};

	$(document).ready(function () {
		urlBuilder.start();
	});
})(jQuery);
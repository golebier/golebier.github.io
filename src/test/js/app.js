
var app = angular.module('sp12', ['ngRoute']);

app.controller('footerAuthor', function($scope) {
     $scope.accounts = [
                        	{ name: "Linkedin",
                        	   url: "http://pl.linkedin.com/pub/rados%C5%82aw-go%C5%82%C4%99biewski/70/832/35/",
                           iconUrl: "https://github.com/golebier/TemplateTeXCv/raw/master/Icons/linkedin.png"
                            },
                        	{ name: "Google plus",
                               url: "https://google.com/+RadoslawGolebiewski",
                           iconUrl: "https://github.com/golebier/TemplateTeXCv/raw/master/Icons/gplus.jpg"
                            },
                        	{ name: "Github",
                               url: "https://github.com/golebier",
                           iconUrl: "https://github.com/golebier/TemplateTeXCv/raw/master/Icons/github.png"
                            }
                    	];
});

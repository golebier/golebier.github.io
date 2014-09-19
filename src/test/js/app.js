
var app = angular.module('sp12', ['ngRoute']);

app.controller('footer', function($scope) {
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

app.controller('menu', function($scope) {
     $scope.main = [
                            { name: "Strona Główna",
                               url: "#/main",
                            },
                            { name: "Fotogaleria",
                               url: "#/fotogallery",
                            },
                            { name: "Cyfrowa Szkola",
                               url: "#/ishool",
                            },
                            { name: "Prawo Szkolne",
                               url: "#/schoollow",
                            },
                            { name: "O Szkole",
                               url: "#/aboutas",
                            },
                            { name: "Kontakt",
                               url: "#/contact",
                            },
                            { name: "Archiwalna",
                               url: "http://www.sp12plock.pl/",
                            }
                        ];

     $scope.parentinfo = [
                            { name: "e-dziennik",
                               url: "#/eRegister/",
                            },
                            { name: "Pierwszak w szkole",
                               url: "#/fromkinderganden/",
                            },
                            { name: "Zebrania",
                               url: "#/meetings/",
                            },
                            { name: "Kalendarz Szkolny",
                               url: "#/schoolCalendar/",
                            },
                            { name: "Konkursy Przedmiotowe",
                               url: "#/subjectCompetitions/",
                            },
                ];
 
     $scope.school = [
                            { name: "Plan zajęć",
                                url: "#/lessonsPlans/",
                            },
                            { name: "Rada Pedagogiczna",
                                url: "#/radapedadogiczna",
                            },
                            { name: "Samorząd Uczniowski",
                                url: "#/samorzaduczniowski",
                            },
                            { name: "Osiągnięcia",
                                url: "#/osiagniecia",
                            },
                            { name: "Zajęcia Pozalekcyjne",
                                url: "http://www.sp12plock.pl/zajecia_pozalekcyjne.html/",
                            },
                            { name: "Świetlica",
                                url: "#/swietlica/",
                            },
                            { name: "Podręczniki",
                                url: "#/podreczniki/",
                            },
                            { name: "Stypendia",
                                url: "#/stypendia/",
                            },
                            { name: "Stowarzyszenie",
                                url: "#/stowarzyszenie/",
                            }
                      ];
     $scope.show = false;
     $scope.prepareClassForSidebarLeft = function () {
         return $scope.show?"sidebar":"lesssidebar";
     };
});

//
//     Copyright (c) 1979, the Gra projects.
//     Please see the AUTHORS file for details.
//     All rights reserved.
//     Use of this source code is governed by a MIT-style license
//     that can be found in the LICENSE file.
//
//
//     @author Gra <Gołębiewski Radosław A.>
//             https://github.com/golebier or https://golebier.github.io
//             https://google.com/+RadoslawGolebiewski
//             http://www.linkedin.com/pub/rados%C5%82aw-go%C5%82%C4%99biewski/70/832/35
//

var app = angular.module('sp12', ['ngRoute']);


app.config(function ($routeProvider) {
       $routeProvider
          .when('/', {
              // TODO read f from file?
              controller: function($scope, $location, $route) {
                  // TODO
                },
              templateUrl: 'htmls/views/main.html'
          })
          // TODO add more, CSM via W3/Mob/...
          .otherwise({redirectTo: '/'});
});

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
                               url: "#/", // main
                            },
                            { name: "Fotogaleria",
                               url: "#/fotogallery"
                            },
                            { name: "Cyfrowa Szkola",
                               url: "#/ishool"
                            },
                            { name: "Prawo Szkolne",
                               url: "#/schoollow"
                            },
                            { name: "O Szkole",
                               url: "#/aboutas"
                            },
                            { name: "Kontakt",
                               url: "#/contact"
                            },
                            { name: "Archiwalna",
                               url: "http://www.sp12plock.pl/"
                            }
                        ];

     $scope.parentinfo = [
                            { name: "e-dziennik",
                               url: "#/eRegister/"
                            },
                            { name: "Pierwszak w szkole",
                               url: "#/fromkinderganden/"
                            },
                            { name: "Zebrania",
                               url: "#/meetings/"
                            },
                            { name: "Kalendarz Szkolny",
                               url: "#/schoolCalendar/"
                            },
                            { name: "Konkursy Przedmiotowe",
                               url: "#/subjectCompetitions/"
                            },
                ];
 
     $scope.school = [
                            { name: "Plan zajęć",
                                url: "#/lessonsPlans/"
                            },
                            { name: "Rada Pedagogiczna",
                                url: "#/radapedadogiczna"
                            },
                            { name: "Samorząd Uczniowski",
                                url: "#/samorzaduczniowski"
                            },
                            { name: "Osiągnięcia",
                                url: "#/osiagniecia"
                            },
                            { name: "Zajęcia Pozalekcyjne",
                                url: "http://www.sp12plock.pl/zajecia_pozalekcyjne.html/"
                            },
                            { name: "Świetlica",
                                url: "#/swietlica/"
                            },
                            { name: "Podręczniki",
                                url: "#/podreczniki/"
                            },
                            { name: "Stypendia",
                                url: "#/stypendia/"
                            },
                            { name: "Stowarzyszenie",
                                url: "#/stowarzyszenie/"
                            }
                      ];

     $scope.library = [
                        { name: "Stara strona",
                           url: "http://www.sp12plock.pl/biblioteka/index.html"
                        },
                        { name: "O bibliotece",
                           url: "#/aboutLibrary/"
                        },
                        { name: "Lektury",
                           url: "#/lectures/"
                        },
                        { name: "Czytelnictwo",
                           url: "#/readRates/"
                        },
                        { name: "Regulaminy",
                           url: "#/regulations/"
                        },
                        { name: "Konkursy",
                           url: "#/competitions/"
                        },
                        { name: "Imprezy",
                           url: "#/events/"
                        },
                        { name: "Złota Lista",
                            url: "#/goldenList/"
                        },
                        { name: "Fotogaleria",
                            url: "#/photoGallery/"
                        },
                        { name: "Przydatne strony",
                            url: "#/usefulWebSides/"
                        }
     ];

     $scope.archive = [
                        // months
                        { name: "Wrzesień",
                           url: "#/201409",
                           amount: "12"
                           
                        },
                        { name: "Sierpień",
                           url: "#/201408",
                        amount: "5"
                        },
                        // years, after the calendar new year, above changes to year ...
                        { name: "2013",
                           url: "#/2013",
                        amount: "144"
                        },
                        { name: "2012",
                            url: "#/2012",
                         amount: "156"
                        }
     ];

     $scope.sport = [
                        { name: "Program Otwarte Szkolne Obiekty Sportowe",
                           url: "#/posos"
                           
                        },
//                        { name: "ORLEN Szkolna Liga MDK",
//                           url: "oslmkd"
//                        },
                        { name: "ORLEN Szkolna Liga MDK",
                           url: "http://www.sp12plock.pl/liga-mdk.html"
                        }
     ];

     // TODO by urr:ID
     $scope.news = [
           { 
        	   text: "Dnia 18 września 2014 roku w sali gimnastycznej naszej szkoły odbyły się eliminacje do Zespołu Pieśni i Tańca „Wisła” Płockiego Ośrodka Kultury i Sztuki...",
        	   urlname: "czytaj więcej...",
               //url: "#/news.0"
        	   url: "http://sp12plock.pl/aktualnosci.html"
           },
           { 
        	   text: "Dnia 17 września 2014 roku, w sali gimnastycznej naszej szkoły,  odbyło się spotkanie z Panem Policjantem w ramach programu „Bezpieczna droga do szkoły”...",
        	   urlname: "czytaj więcej...",
               url: "#/news.1"
           },
           { 
        	   text: "Dnia 12 września 2014 roku, w godz. 10.00-13.00, w Ogródku Jordanowskim miał miejsce Piknik Literacki z okazji obchodów Roku Czytelnika...",
        	   urlname: "czytaj więcej...",
               url: "#/news.2"
           },
           { 
        	   text: "Dnia 6 września 2014 roku, w sobotnie popołudnie, odbyło się NARODOWE CZYTANIE „Potopu” Henryka Sienkiewiczaw ramach ogólnopolskiej akcji publicznego czytania...",
        	   urlname: "czytaj więcej...",
               url: "#/news.3"
           },
           { 
        	   text: "Dnia 1 września 2014 roku o godz. 9.00 odbyło się uroczyste rozpoczęcie roku szkolnego 2014/2015.",
        	   urlname: "czytaj więcej...",
               url: "#/news.4"
           }
     ];

     $scope.prepareClassForSidebarLeft = function () {
         return "sidebar";//$scope.show?"sidebar":"lesssidebar";
     };

     var showList = {};

     $scope.getState = function (position) {
         return showList[position];
     };

     $scope.setState = function (position, state) {
         showList[position] = state;
     };
});

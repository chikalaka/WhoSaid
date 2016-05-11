'use strict';

angular.module('confusionApp')

//usersService
    .service('usersService', function () {

    var users = [
        {
            _id: 0,
            password: '1234',
            privateName: 'edan',
            lastName: 'chetrit',
            score: 100,
            username: 'bimbam'
        },
        {
            _id: 1,
            password: '1234',
            privateName: 'masha',
            lastName: 'sudel',
            score: 130,
            username: 'banana'
        }
    ];

    this.getUsers = function(){
        return users;
    };

    this.getUser = function(i){
        return users[i];
    };

})

    .service('countriesService', function () {

    var countries = [
        {
            id: 1,
            country: 'Abkhazia',
            capital: 'Sokhumi'
        },
        {
            id: 2,
            country: 'Afghanistan',
            capital: 'Kabul'
        },
        {
            id: 3,
            country: 'Aland',
            capital: 'Mariehamn'
        },
        {
            id: 4,
            country: 'Albania',
            capital: 'Tirana'
        }
    ];

    this.getCountries = function(){
        return countries;
    };

})

    .service('groupsService', function () {

    var groups = [
        {
            _id: 0,
            groupName: 'group name wow',
            items: [
                {
                    sentence: 'sentence number 1',
                    dateTime:"2012-5-19"
                },
                {
                    sentence: 'sentence number 2',
                    dateTime:"2013-5-8"
                },
                {
                    sentence: 'sentence number 3',
                    dateTime:"2017-5-15"
                },
                {
                    sentence: 'sentence number 4',
                    dateTime:"2016-5-3"
                }
            ]
        },
        {
            _id: 1,
            groupName: 'laliboo',
            items: [
                {
                    sentence: 'a jd jdj sk fjds kjdjddj jdjdj ',
                    dateTime:"2014-5-8"
                },
                {
                    sentence: 'b  ryry ry yrry yryr ry',
                    dateTime:"2019-5-9"
                },
                {
                    sentence: 'c ncn cnc ncn cnnc n cnc ',
                    dateTime:"2015-5-10"
                },
                {
                    sentence: 'd lp pl l pl pl pl pllpl p lp',
                    dateTime:"2021-5-15"
                }
            ]
        }
    ];

    this.getGroups = function(){
        return groups;
    };

    this.getGroup = function(i){
        return groups[i];
    };

})

;






















/*
    //usersService
    .service('usersService', function () {
        var users = [
            {
                _id:0,
                privateName: 'אלון',
                lastName: 'פלום',
                appointments: [
                   {
                       businessId:0,
                       comment:"הערה על הטיפול? לא יודע אם צריך",
                       treatment:"גבות",
                       duration: 90,
                       dateTime:"2012-5-16T17:00Z"
                   },
                   {
                       businessId:0,
                       comment:"",
                       treatment:"תספורת גבר",
                       duration: 90,
                       dateTime:"2012-5-10T10:00Z"
                   },
                   {
                       businessId:1,
                       comment:"",
                       treatment:"2תספורת אישה",
                       duration: 90,
                       dateTime:"2012-5-12T11:00Z"
                   },
                   {
                       businessId:1,
                       comment:"הערה",
                       treatment:"2גבות",
                       duration: 90,
                       dateTime:"2012-5-10T14:00Z"
                   },
                   {
                       businessId:1,
                       comment:"",
                       treatment:"לק2",
                       duration: 90,
                       dateTime:"2012-5-19T19:00Z"
                   }]
            },
            {
              _id:1,
              privateName:'משה',
              lastName: 'הגדול',
               appointments: [
                   {
                       businessId:0,
                       comment:"הערה על הטיפול? לא יודע אם צריך",
                       treatment:"גבות",
                       duration: 90,
                       dateTime:"2012-5-16T17:00Z"
                   },
                   {
                       businessId:0,
                       comment:"",
                       treatment:"תספורת גבר",
                       duration: 90,
                       dateTime:"2012-5-10T10:00Z"
                   },
                   {
                       businessId:1,
                       comment:"",
                       treatment:"2תספורת אישה",
                       duration: 90,
                       dateTime:"2012-5-12T11:00Z"
                   },
                   {
                       businessId:1,
                       comment:"הערה",
                       treatment:"2גבות",
                       duration: 90,
                       dateTime:"2012-5-10T14:00Z"
                   },
                   {
                       businessId:1,
                       comment:"",
                       treatment:"לק2",
                       duration: 90,
                       dateTime:"2012-5-19T19:00Z"
                   }]
            }
        ];

        this.getUsers = function(){
            return users;
        };

        this.getUser = function(i){
            return users[i];
        };
    })

    //businessesService
    .service('businessesService', function () {

        var businesses =[
             {
              _id:0,
              name:'shani',
              image:'images/shani.jpg',
              titleHome: 'שנינוש גבות',
              thanks:'תודה שבחרתם שנינוש גבות, המשך יום טוב :)',
              aboutme:'אני בחורה מאוד חמודה',
              email:'shani@gmail.com',
                 treatments:[
                     'גבות','לק','תספורת גבר','תספורת אישה','הוצאת חצקונים','מניקור','פדיקור','איפור'
                 ]
             },
            {
              _id:1,
              name:'tomer',
              image:'images/tomer.jpg',
              titleHome: 'מספרת פלום',
              thanks:'בחרת בי, תקבל שירות נהדר! וגם אם אין ביכולתך להגיע אשמח אם תבטל את התור',
              aboutme:'שלום לכולם, מדבר אלוהים!! חוו ןדשגג יגדגו ידלי דיו',
              email: 'tomer@gmail.com',
                treatments:[
                     '2גבות2','לק2','תספורת גבר2','תספורת אישה2','הוצאת חצקונים2','מניקור2','פדיקור2','איפור'
                 ]
             }
        ];

        this.getBusinesses = function(){
            return businesses;
        }

        this.getBusiness = function (i){
            return businesses[i];
        }
    })





;


*/




/*


        .service('menuFactory', function() {

            var dishes=[
                         {
                          _id:0,
                          name:'Uthapizza',
                          image: 'images/uthapizza.png',
                          category: 'mains',
                           label:'Hot',
                          price:'4.99',
                          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comments: [
                               {
                                   rating:5,
                                   comment:"uthapizza Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"uthapizza Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"uthapizza Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"uthapizza Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"uthapizza Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"uthapizza It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }                                                          ]
                        },
                        {
                            _id:1,
                          name:'Zucchipakoda',
                           image: 'images/zucchipakoda.png',
                          category: 'appetizer',
                           label:'',
                          price:'1.99',
                          description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                          comments: [
                               {
                                   rating:5,
                                   comment:"Zucchipakoda Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Zucchipakoda Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Zucchipakoda Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Zucchipakoda Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"Zucchipakoda It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }                                                          ]
                        },
                        {
                            _id:2,
                          name:'Vadonut',
                           image: 'images/vadonut.png',
                          category: 'appetizer',
                           label:'New',
                          price:'1.99',
                          description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                           comments: [
                               {
                                   rating:5,
                                   comment:"Vadonut Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Vadonut Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Vadonut Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Vadonut Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"Vadonut It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                                                          ]
                        },
                        {
                            _id:3,
                          name:'ElaiCheese Cake',
                           image: 'images/elaicheesecake.png',
                          category: 'dessert',
                           label:'',
                          price:'2.99',
                          description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comments: [
                               {
                                   rating:5,
                                   comment:"ElaiCheese Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"ElaiCheese Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"ElaiCheese Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"ElaiCheese Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"ElaiCheese It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }]
                        }
                        ];

                var promotions = [
                {
                          _id:0,
                          name:'Weekend Grand Buffet', 
                          image: 'images/buffet.png',
                          label:'New',
                          price:'19.99',
                          description:'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person '
                }
                ];



                this.getApartments = function(){
                    return apartments;
                };

                this.getApartment = function (i) {
                    return apartments[i];
                };

                this.getApartments = function(){
                    return apartments;
                };

                this.getApartment = function (i) {
                    return apartments[i];
                };



                this.getDishes = function(){
                    return dishes;
                };

                this.getDish = function (index) {
                    return dishes[index];
                };

                this.getPromotion = function (i) {
                    return promotions[i];
                }

        })

    .factory('corporateFactory', function() {

        var corpfac = {};

        var leadership = [
            {
                name: "Peter Pan",
                image: 'images/alberto.png',
                designation: "Chief Epicurious Officer",
                abbr: "CEO",
                description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
            },
            {
                name: "Dhanasekaran Witherspoon",
                image: 'images/alberto.png',
                designation: "Chief Food Officer",
                abbr: "CFO",
                description: "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
            },
            {
                name: "Agumbe Tang",
                      image: 'images/alberto.png',
                designation: "Chief Taste Officer",
                abbr: "CTO",
                description: "Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."
            },
            {
                name: "Alberto Somayya",
                image: 'images/alberto.png',
                designation: "Executive Chef",
                abbr: "EC",
                description: "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"
            }

        ];

        // Implement two functions, one named getLeaders,
        // the other named getLeader(index)
        // Remember this is a factory not a service
        corpfac.getLeaders = function() {
            return leadership;
        }

        corpfac.getLeader = function(i) {
            return leadership[i];
        }

        return corpfac;

    })

;

*/
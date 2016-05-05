(function(){
    
    var postGeneratorApp = angular.module('PhotoPostGenerator', []);
    
    postGeneratorApp.controller('PhotoPostController', function() {
        
        this.posts = photoposts;
        this.numOfPosts = 20;
        
        
        this.setView = function(val) {
            this.view = val;
        };
        
        this.isView = function(val) {
            return this.view === val;
        };
        
        this.createAlert= function(val) {
            alert(val);
        };

    });
    
    var photoposts = 
        [
            {
                photoID: "1",
                photoCaption: "Wilderness of Oregon",
                photoSubTitle: "Mt. Reinier",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "nature",
                photoSrc: "../images/gallery/img1.jpg",
                photoThumbnailSrc: "../images/gallery/img1_th.jpg",
            },
            
            {
                photoID: "2",
                photoCaption: "Sunsets and Nature",
                photoSubTitle: "Eagle Creek Park, IN",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "nature",
                photoSrc: "../images/gallery/img2.jpg",
                photoThumbnailSrc: "../images/gallery/img2_th.jpg",
            },
            
            {
                photoID: "3",
                photoCaption: "I spy with My Little Eye",
                photoSubTitle: "House Finch",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "birds",
                photoSrc: "../images/gallery/img3.jpg",
                photoThumbnailSrc: "../images/gallery/img3_th.jpg",
            },
            
            {
                photoID: "4",
                photoCaption: "Up Abbove the World So High... ",
                photoSubTitle: "Skydeck, Chicago",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "landscape",
                photoSrc: "../images/gallery/img4.jpg",
                photoThumbnailSrc: "../images/gallery/img4_th.jpg",
            },
            
            {
                photoID: "5",
                photoCaption: "Colors of Joy ",
                photoSubTitle: "Holi 2010",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "other",
                photoSrc: "../images/gallery/img5.jpg",
                photoThumbnailSrc: "../images/gallery/img5_th.jpg",
            },

            {
                photoID: "6",
                photoCaption: "Blue Jay ",
                photoSubTitle: "Eagle Creek Park, IN",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "birds",
                photoSrc: "../images/gallery/img6.jpg",
                photoThumbnailSrc: "../images/gallery/img6_th.jpg",
            },

            {
                photoID: "7",
                photoCaption: "State Pride: Cardinal (Female) ",
                photoSubTitle: "Eagle Creek Park, IN",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "birds",
                photoSrc: "../images/gallery/img7.jpg",
                photoThumbnailSrc: "../images/gallery/img7_th.jpg",
            },

            {
                photoID: "8",
                photoCaption: "Downy Wood Pecker ",
                photoSubTitle: "Eagle Creek Park, IN",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "birds",
                photoSrc: "../images/gallery/img8.jpg",
                photoThumbnailSrc: "../images/gallery/img8_th.jpg",
            },

            {
                photoID: "9",
                photoCaption: "It's raining Birds and Birds",
                photoSubTitle: "Mississipi River, Iowa",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "birds",
                photoSrc: "../images/gallery/img9.jpg",
                photoThumbnailSrc: "../images/gallery/img9_th.jpg",
            },

            {
                photoID: "10",
                photoCaption: "Goosin' Around...",
                photoSubTitle: "Canada Geese - at Mississipi River, Iowa",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "birds",
                photoSrc: "../images/gallery/img10.jpg",
                photoThumbnailSrc: "../images/gallery/img10_th.jpg",
            },

            {
                photoID: "11",
                photoCaption: "Swan ",
                photoSubTitle: "Mississipi River, Iowa",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "birds",
                photoSrc: "../images/gallery/img11.jpg",
                photoThumbnailSrc: "../images/gallery/img11_th.jpg",
            },

            {
                photoID: "12",
                photoCaption: "1 Mississipi, 2 Mississipi, ... ",
                photoSubTitle: "Canada Geese - at Mississipi River, Iowa",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "birds",
                photoSrc: "../images/gallery/img12.jpg",
                photoThumbnailSrc: "../images/gallery/img12_th.jpg",
            },

            
//            {
//                photoCaption: '',
//                photoTimestamp: '',
//                photoKeywords: ["","",""],
//                photoSrc: "images/gallery/"
//            },
                    
        ];
    
})();

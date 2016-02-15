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
        
    });
    
    var photoposts = 
        [
            {
                photoCaption: "This is an image",
                photoSubTitle: "Mt. Reinier",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "landscape",
                photoSrc: "../images/gallery/img1.jpg",
                photoThumbnailSrc: "../images/gallery/img1_th.jpg",
            },
            
            {
                photoCaption: "This is an image",
                photoSubTitle: "Tree",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "landscape",
                photoSrc: "../images/gallery/img2.jpg",
                photoThumbnailSrc: "../images/gallery/img2_th.jpg",
            },
            
            {
                photoCaption: "This is an image",
                photoSubTitle: "Bird",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "landscape",
                photoSrc: "../images/gallery/img3.jpg",
                photoThumbnailSrc: "../images/gallery/img3_th.jpg",
            },
            
            {
                photoCaption: "This is an image",
                photoSubTitle: "Mt. Reinier",
                photoTimestamp: 'Sep 23, 2015',
                photoCategory: "landscape",
                photoSrc: "../images/gallery/img4.jpg",
                photoThumbnailSrc: "../images/gallery/img4_th.jpg",
            },
            
            
//            {
//                photoCaption: '',
//                photoTimestamp: '',
//                photoKeywords: ["","",""],
//                photoSrc: "images/gallery/"
//            },
                    
        ];
    
})();
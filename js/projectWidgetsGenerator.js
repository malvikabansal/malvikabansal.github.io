(function(){
    
    var widgetGeneratorApp = angular.module('ProjectWidgetsGenerator', []);
    
    widgetGeneratorApp.controller('ProjectWidgetsController', function() {
        
        this.posts = projectWidgets;
        this.numOfPosts = 9;
        this.view = 1;
        
        this.setView = function(val) {
            this.view = val;
        };
        
        this.isView = function(val) {
            return this.view === val;
        };
        
    });
    
    var projectWidgets = 
        [
            {
                categoryExp: "widgetCntrl.isView(2) || widgetCntrl.isView(1)",
                widgetTitle: "CulAmi",
                widgetDescription: 'A Smart Kitchen Experience',
                pageLink: "culami.html"
            },
            
            {
                categoryExp: "widgetCntrl.isView(3) || widgetCntrl.isView(1)",
                widgetTitle: "Mathspace",
                widgetDescription: 'UX Design & Evaluation',
                pageLink: "mathspace.html"
            },
            
            {
                categoryExp: "widgetCntrl.isView(4) || widgetCntrl.isView(1)",
                widgetTitle: "OLSM Universal Dice",
                widgetDescription: 'Arduino Physical Prototype',
                pageLink: "olsm.html"
            },
            
            {
                categoryExp: "widgetCntrl.isView(5) || widgetCntrl.isView(1)",
                widgetTitle: "Data-Morphed Topographies",
                widgetDescription: 'HCI Research Study',
                pageLink: "dmt.html"
            },
            
            {
                categoryExp: "widgetCntrl.isView(5) || widgetCntrl.isView(1)",
                widgetTitle: "Advocacy of Social Networks",
                widgetDescription: 'HCI Research Study',
                pageLink: "advocacy.html"
            },
            
            {
                categoryExp: "widgetCntrl.isView(4) || widgetCntrl.isView(1)",
                widgetTitle: "Wallfie",
                widgetDescription: 'Interactive Photowall Prototype',
                pageLink: "wallfie.html"
            },
            
            {
                categoryExp: "widgetCntrl.isView(3) || widgetCntrl.isView(1)",
                widgetTitle: "Flickr",
                widgetDescription: 'Usability & Evaluation Study',
                pageLink: "flickr.html"
            },
            
            {
                categoryExp: "widgetCntrl.isView(2) || widgetCntrl.isView(1)",
                widgetTitle: "HomeTurf",
                widgetDescription: 'Connecting Neighbors Better',
                pageLink: "hometurf.html"
            },
            
            {
                categoryExp: "widgetCntrl.isView(2) || widgetCntrl.isView(1)",
                widgetTitle: "DressWiser",
                widgetDescription: 'Interactive Dressing Mirror',
                pageLink: "dresswiser.html"
            },
        ];
})();
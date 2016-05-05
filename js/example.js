angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items = [
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
];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: '../modal_content.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        },
        item: function(){
          return size;
        }
      }
    });

  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, item) {

  console.log(item);
  $scope.item = item;

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

angular.module('ui.bootstrap.demo').directive("masonry", function () {
   var NGREPEAT_SOURCE_RE = '<!-- ngRepeat: ((.*) in ((.*?)( track by (.*))?)) -->';
    return {
        compile: function(element, attrs) {
            // auto add animation to brick element
            var animation = attrs.ngAnimate || "'masonry'";
            var $brick = element.children();
            $brick.attr("ng-animate", animation);

            // generate item selector (exclude leaving items)
            var type = $brick.prop('tagName');
            var itemSelector = type+":not([class$='-leave-active'])";

            return function (scope, element, attrs) {
                var options = angular.extend({
                    itemSelector: itemSelector
                }, scope.$eval(attrs.masonry));

                // try to infer model from ngRepeat
                if (!options.model) {
                    var ngRepeatMatch = element.html().match(NGREPEAT_SOURCE_RE);
                    if (ngRepeatMatch) {
                        options.model = ngRepeatMatch[4];
                    }
                }

                // initial animation
                element.addClass('masonry');

                // Wait inside directives to render
                setTimeout(function () {
                    element.masonry(options);

                    element.on("$destroy", function () {
                        element.masonry('destroy')
                    });

                    if (options.model) {
                        scope.$apply(function() {
                            scope.$watchCollection(options.model, function (_new, _old) {
                                if(_new == _old) return;

                                // Wait inside directives to render
                                setTimeout(function () {
                                    element.masonry("reload");
                                });
                            });
                        });
                    }
                });
            };
        }
    };
});

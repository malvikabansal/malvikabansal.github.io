angular.module('demo1', ['bootstrapLightbox']);

angular.module('demo1').controller('GalleryCtrl', function ($scope, Lightbox) {
  $scope.images = [
    {
      'url': 'https://farm6.staticflickr.com/5830/20552523531_e1efec8d49_k.jpg',
      'thumbUrl': '../images/gallery/img1.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    },
    {
      'url': '../images/gallery/img2.jpg',
      'thumbUrl': '../images/gallery/img1.jpg'
    },
];

$scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});

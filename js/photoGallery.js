angular.module('angular-bootstrap-lightbox', ['bootstrapLightbox']);
angular.module('photoGallery').controller('GalleryCtrl', function ($scope, Lightbox) {
    $scope.images = [
        {
            'url': '../images/gallery/img1.jpg',
            'caption': 'Optional caption',
            'thumbUrl': '../images/gallery/img1_th.jpg' // used only for this example
        },
        {
            'url': '../images/gallery/img2.jpg',
            'thumbUrl': '../images/gallery/img2_th.jpg'
        },
        {
            'url': '../images/gallery/img3.jpg',
            'thumbUrl': '../images/gallery/img3_th.jpg'
        }
    ];

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.images, index);
    };
});

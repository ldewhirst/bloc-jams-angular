(function() {
    function AlbumCtrl($scope) {
        $scope.currentAlbum = albumPicasso;
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['$scope', AlbumCtrl])
})();
(function() {
    function AlbumCtrl(Fixtures) {
        this.currentAlbum = Fixtures.getAlbum();
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl])
})();
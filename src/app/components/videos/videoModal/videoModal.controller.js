class VideoModalController {
    constructor($uibModal) {
        this.$uibModal = $uibModal;
        this.$onInit = this.$onInit.bind(this);
    }

    $onInit() {
        console.log(this.resolve);
        this.videoId = this.resolve.video.id.videoId;
        this.videoEmbedUrl = 'https://www.youtube.com/embed/' + this.videoId + '?rel=0'

        console.log(this.videoEmbedUrl);
    }

}


VideoModalController.$inject = ['$uibModal'];
export default VideoModalController;
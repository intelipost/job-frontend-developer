class VideosController {
    constructor($state) {
        this.$onInit = this.$onInit.bind(this);
    }
    
    toggleActive(cardId) {
        let card = this.videos.find(card => card.id.VideoId == cardId);
        if (!card) return;
        card.active = !card.active;
      };

    $onInit() {
        this.videos = this.searchResult.data.items; 
        console.log(this.videos);

    }

}


VideosController.$inject = ['$state'];
export default VideosController;


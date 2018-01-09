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
        this.videos = this.searchResult.items;
        
        if(this.bandInfo){
            console.log('ola');
            this.externalLinks = this.bandInfo.externalLinks; 
            this.hasBandInfo = true;
        }else{
            this.hasBandInfo = false;
        }
        
        console.log(this.hasBandInfo);
        console.log(this.videos);
        console.log(this.bandInfo);

    }

}


VideosController.$inject = ['$state'];
export default VideosController;


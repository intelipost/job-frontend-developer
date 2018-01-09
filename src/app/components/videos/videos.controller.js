class VideosController {
    constructor($state) {
        this.$onInit = this.$onInit.bind(this);
    }

    $onInit() {
        this.videos = this.searchResult.items;
        
        if(this.bandInfo){
            this.externalLinks = this.bandInfo.externalLinks; 
            this.hasBandInfo = true;
        }else{
            this.hasBandInfo = false;
        }

    }

}


VideosController.$inject = ['$state'];
export default VideosController;


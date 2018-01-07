class VideosController {
    constructor($state) {
        this.$onInit = this.$onInit.bind(this);
    }
 

    $onInit() {
        console.log(this.searchResult.data.items);

    }

}


VideosController.$inject = ['$state'];
export default VideosController;


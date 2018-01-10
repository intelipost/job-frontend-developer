class CardController {
    constructor($uibModal) {
        this.$uibModal = $uibModal;
        this.$onInit = this.$onInit.bind(this);
    }

    openVideoModal(video) {
        this.video = video;
        const modalInstance = this.$uibModal.open({
            animation: false,
            component: 'videoModal',
            resolve: {
                video: () => {
                    return this.video;
                }
            }
        })
    }

    $onInit() {

    }

}


CardController.$inject = ['$uibModal'];
export default CardController;


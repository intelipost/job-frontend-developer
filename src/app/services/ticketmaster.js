
function ticketMasterService($http) {

    const service = {
        getBandInfo: getBandInfo
    }


    return service;

    function getBandInfo(bandName) {
        return $http.get("https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG&keyword=" + bandName)
            .then(getBandInfoComplete)
            .catch(getBandInfoFailed);
    }

    function getBandInfoComplete(response) {
        return response.data._embedded.attractions[0];
    }

    function getBandInfoFailed(error) {
        console.error('Failed for getBandInfo.' + error.data);
    }

}

ticketMasterService.$inject = ['$http'];
export default ticketMasterService;
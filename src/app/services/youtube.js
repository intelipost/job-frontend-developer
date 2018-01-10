function youtubeService($http) {

    const service = {
        getSearchResults: getSearchResults
    };

    return service;

    function getSearchResults(searchTerm) {
        return $http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDd_sfvQ4NASb-k0oKYAr_g9FZcQILtyKc&type=video&part=snippet&q=" + searchTerm)
            .then(getSearchResultsComplete)
            .catch(getSearchResultsFailed);
    }

    function getSearchResultsComplete(response) {
        return response.data;
    }

    function getSearchResultsFailed(error) {
        console.error('Failed for getBandInfo' + error.data);
    }

}

youtubeService.$inject = ['$http'];
export default youtubeService;
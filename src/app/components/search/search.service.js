class SearchService{
    constructor($http){
        this.$http = $http;
    }


    getSearchResults(searchTerm){
        return this.$http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDd_sfvQ4NASb-k0oKYAr_g9FZcQILtyKc&part=snippet&q="+searchTerm);
    }
}

SearchService.$inject = ['$http'];
export default SearchService;

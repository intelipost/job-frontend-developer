class SearchController {
    constructor(SearchService) {
        this.SearchService = SearchService;
    }

   async submit(bandName){
          console.log(bandName);
        try {
            const results = await this.SearchService.getSearchResults(bandName);
            console.log(results);

        } catch (error) {
            console.error(error);
        }

    }
}


SearchController.$inject = ['search.service'];
export default SearchController;


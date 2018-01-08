function config($stateProvider, $urlServiceProvider) {
  $urlServiceProvider.rules.otherwise({ state: 'home' });

  $stateProvider.state('home', {
    url: '/',
    component: 'home'
  });

  $stateProvider.state('videos', {
    url: '/:bandName',
    component: 'videos',
    resolve: {
      searchResult: function ($transition$, youtubeService) {
        let bandName = $transition$.params().bandName;
        return youtubeService.getSearchResults(bandName);
      },
      bandInfo: function ($transition$, ticketMasterService) {
        let bandName = $transition$.params().bandName;
        return ticketMasterService.getBandInfo(bandName);
      }

    },
  });

};





config.$inject = ['$stateProvider', '$urlServiceProvider'];
export default config;
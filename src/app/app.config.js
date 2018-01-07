function config ($stateProvider, $urlServiceProvider) {
    $urlServiceProvider.rules.otherwise({ state: 'search' });
    
    $stateProvider.state('search', {
      url: '/',
      component: 'search',
      resolve: {}
    });
  };


  config.$inject = ['$stateProvider', '$urlServiceProvider'];
  export default config;
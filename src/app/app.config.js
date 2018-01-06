function config ($stateProvider, $urlServiceProvider) {
    $urlServiceProvider.rules.otherwise({ state: 'home' });
    
    $stateProvider.state('home', {
      url: '/',
      component: 'home',
      resolve: {}
    });
  };


  config.$inject = ['$stateProvider', '$urlServiceProvider'];
  export default config;
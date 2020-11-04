export default class Config {
    constructor($stateProvider:any,$urlRouterProvider:any) {
        $stateProvider.state({
            name: 'view',
            url: "/",
            templateUrl: './app/view/templates/view.html'
        }).state(
            {
                name: 'profile',
                url: "/profile",
                templateUrl: './app/profile/templates/view.html'
            }).state(
            {
                name: 'entries',
                url: '/entries',
                templateUrl: './app/entries/templates/view.html',
            }).state(
                {
                    name: 'sm',
                    url: '/sm',
                    templateUrl: './app/entries/templates/some.html',
                });

        $urlRouterProvider.otherwise('/');
        
    }
}
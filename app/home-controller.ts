export default class home_controller{

    currentMenu:string;
   constructor($scope:ng.IController,$state:any){
        this.currentMenu = 'view';
        $scope.showval = false;
        $scope.test=function(){
            $scope.showval = true;
            $state.go('view',{
                // prevent the events onStart and onSuccess from firing
                notify:false,
                // prevent reload of the current state
                reload:false,
                // replace the last record when changing the params so you don't hit the back button and get old params
                location:'replace',
                // inherit the current params on the url
                inherit:true
            });
        };
    }

}
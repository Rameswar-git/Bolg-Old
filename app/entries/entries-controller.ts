import MockdataService from '../view/MockDataService';
var angular = require('angular');
export default class entriesController{
  
    constructor($scope:ng.IController,toster:any){

        var serv=new MockdataService();

        $scope.basicInfo = serv.getBasicInfoData();
        $scope.social = serv.getsocial();
        $scope.postEdit = MockdataService.createnewPost(undefined,undefined);
      
        $scope.submitPost = function() {
            serv.createPost($scope.postEdit);
          toster["success"]("Your new post is published");

    }
}
}
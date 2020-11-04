import MockdataService from './MockDataService';

export default class blogcontroller{
    constructor($scope:ng.IController, $location:ng.ILocationService, $anchorScroll:ng.IAnchorScrollService){

        $scope.posts = [];
        $scope.postId;

        var serv=new MockdataService();
      
        $scope.posts = serv.getpostdatas();
        $scope.basicInfo = serv.getBasicInfoData();
        $scope.social = serv.getsocial();
      
        $scope.focusOnPost = function(postId:any) {
          if (!postId) return;
          $location.hash('post' + postId);
          $anchorScroll();
        };

    }
}
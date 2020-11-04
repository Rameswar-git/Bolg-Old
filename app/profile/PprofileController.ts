import MockdataService from '../view/MockDataService';

var angular = require('angular');

// import angular from 'angular';

export default class profilecontroller{
    constructor($scope:ng.IController,toster:any){

        $scope.posts = [];
        $scope.postId;

        var serv=new MockdataService();
      
        // $scope.posts = serv.getpostdatas();
        $scope.basicInfo = serv.getBasicInfoData();
        $scope.social = serv.getsocial();

        $scope.basicInfoEdit = angular.copy($scope.basicInfo);
        $scope.socialEdit = angular.copy($scope.social);


        $scope.saveBasicForm = function() {
            serv.saveBasicinfo($scope.basicInfoEdit.name,$scope.basicInfoEdit.introduction);
            $scope.basicInfo = angular.copy($scope.basicInfoEdit);
            toster["success"]("Basic info saved successfully!");
          };

          $scope.saveSocialForm = function() {
            serv.saveSocial($scope.socialEdit.works,$scope.socialEdit.lives,$scope.socialEdit.birthday,$scope.socialEdit.from);
            $scope.social = serv.getsocial();
            toster["success"]("Your social data is safe and sound now.", "It is saved successfully");
          };
      

    }
}
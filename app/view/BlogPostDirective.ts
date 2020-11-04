export default class directiv{
    static getdirevive():any{
      
       return function() {
            return {
            restrict: 'E',
            templateUrl: './app/view/templates/blog-post.html',
            scope: {
              post: '='
            },
            controller: ['$scope', function($scope:ng.IController) {
              $scope.messageContent = "";
              $scope.addMessage = function() {
                var newMessage = {author: 'Unknown', message: $scope.messageContent}
                $scope.post.messages.push(newMessage);
                $scope.messageContent = "";
              };
            }]
          }
        };
     

    }
}
var app = angular.module('myApp', ['uploader']);

app.config(function(AWSControlProvider){
  
  AWSControlProvider.setYeah('Hello') ;// no use, just demonstrating how we can add other options

  var imageSupportParams = {
    type           : 'image.*',
    host           : 's3',
    Bucket         : 'ihatehandlesfiverr',
    accessKeyId    : 'AKIAIABNWCTWZ65JJV4A',
    secretAccessKey: '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',
    region         : 'us-west-2'

  };

  AWSControlProvider.supportType(imageSupportParams);

});

app.controller('ctrler', function($scope, $rootScope, $http, AWSControl){
  $rootScope.dataImg = AWSControl.dataImg;
  $scope.msg = '';
  $scope.fromservice = AWSControl.yeah; //no use
  $scope.myfile = {};  
   
  $rootScope.$on('AWSUploadSuccess', function(AWSControl){
    $scope.msg = 'Upload successful';
    
  });

  $rootScope.$on('AWSUploadError', function(){
    $scope.msg = 'Upload failed. Please retry';
  });
  
});
angular.module('app')
.controller('mainController', function($scope,$http) {

$http.get('MarketingCloud.makeRequest($('#username').val(), $('#secret').val(), $('#method').val(), $('#params').val(), $('#endpoint').val(), function(e) {
', config).then(successCallback, errorCallback);



  // <script type="text/javascript">
  //     $(document).ready(function() {
  //         $('#api-call-form').submit(function(e) {
  //             $('#api-response').html('calling...');
  //             MarketingCloud.makeRequest($('#username').val(), $('#secret').val(), $('#method').val(), $('#params').val(), $('#endpoint').val(), function(e) {
  //                 $('#api-response').html(e.responseText)
  //             });
  //             return false;
  //         });
  //     });
  // </script>





})

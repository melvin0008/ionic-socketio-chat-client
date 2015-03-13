app.directive('setfocus', function() {
  return{
         restrict: 'A',
          link: function(scope, element, attrs){
             var focus=!!attrs.setfocus && !attrs.setfocus.replace(/true/,'');
             if (focus === true){
                 element[0].focus();
             }
         }
     };
})
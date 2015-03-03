app.controller('LoginController',function($state) {
	var self=this

	self.join=function()
	{
		var nickname=self.nickname
		//sanitize the nickname
		$state.go('chat',{nickname:nickname})
	}
	  
	
});

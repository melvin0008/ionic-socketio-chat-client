app.factory('socket',function(socketFactory){
 	var myIoSocket = io.connect('http://chat.socket.io');

  	mySocket = socketFactory({
    	ioSocket: myIoSocket
  	});
	return mySocket;
})
var controller = somePromiseReturningUtil(..);

controller.promise.then(..).then(..);

// to cancel the util before it resolves
controller.return( "..cancel message.." );
function getOrderDetails(orderID,cb) {
  db.find( "orders", orderID, function(err,order){
    if (!err) {
      db.find(
        "customers",
        order.customerID,
        function(err,customer){
          if (!err) {
            order.customer = customer;
            cb( null, order );
          }
          else cb(err);
        }
      );
    }
    else cb(err);
  });
}

getOrderDetails( 1234, function(err,order){
  if (!err) {
    displayOrder(order);
  }
  else showError(err);
});
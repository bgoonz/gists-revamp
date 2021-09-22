getOrderDetails( 1234, onOrderDetails );

// *************

function getOrderDetails(orderID,cb) {
  db.find( "orders", orderID, onOrder );
  
  // *************
  
  function onOrder(err,order) {
    if (!err) {
      db.find( "customers", order.customerID, onCustomer );
    }
    else cb(err);
    
    // *************
    
    function onCustomer(err,customer){
      if (!err) {
        order.customer = customer;
        cb( null, order );
      }
      else cb(err);
    }
  }
}

function onOrderDetails(err,order){
  if (!err) {
    displayOrder(order);
  }
  else showError(err);
}
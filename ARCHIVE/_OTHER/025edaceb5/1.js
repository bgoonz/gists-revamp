// my original:

function getOrderDetails(orderID) {
  return db.find("orders", orderID).then(function (order) {
    return db.find("customers", order.customerID).then(function (customer) {
      order.customer = customer;
      return order;
    });
  });
}

// Save all data, on some kind of event

localStorage.setItem("doesHaveData", "yeahBaby");

var data = $("#contest-vote").serializeArray();
jQuery.each(data, function (i, obj) {
  localStorage.setItem(obj.name, obj.value);
});

// Get all data back, test on page load

if (localStorage.getItem("doesHaveData")) {
  var data = $("#contest-vote").serializeArray();
  jQuery.each(data, function (i, obj) {
    $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
  });
}

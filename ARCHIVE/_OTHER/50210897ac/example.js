// if i pass in a short list, this seems to work... but on a long list, this end up out of order. wtf?

function build_list(list) {
  var $li = $("<li></li>");
  var $tmp;
  var $lis;

  for (var i = 0; i < list.length; i++) {
    $tmp = $li.clone().text(list[i]);
    if (!$lis) $lis = $($tmp);
    else $lis = $lis.add($tmp);
  }

  // they're out of order already, so it's something wrong with the add() usage

  $("#list").append($lis);
}

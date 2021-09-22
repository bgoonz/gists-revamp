$("#pro-form input").keyup(function() {
  
var numValid = 0;
$("#pro-form input[required]").each(function() {
    if (this.validity.valid) {
        numValid++;
    }
});

var progress = $("#progress"),
    progressMessage = $("#progress-message");

if (numValid == 0) {
    progress.attr("value", "0");
    progressMessage.text("The form, it wants you.");
}
if (numValid == 1) {
    progress.attr("value", "20");
    progressMessage.text("There you go, great start!");
}
if (numValid == 2) {
    progress.attr("value", "40");
    progressMessage.text("Nothing can stop you now.");
}
if (numValid == 3) {
    progress.attr("value", "60");
    progressMessage.text("You're basically a hero, right?");
}
if (numValid == 4) {
    progress.attr("value", "80");
    progressMessage.text("They are going to write songs about you.");
}
if (numValid == 5) {
    progress.attr("value", "95");
    progressMessage.text("SO CLOSE. PRESS THE THING.");
}
  
});
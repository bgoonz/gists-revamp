// if you convert to everything returning asynquence sequences

ASQ( get("/api/google/sheets/resources") )
.val( JSON.parse )
.seq( handlebar.bind(null,"#template", "#output") )
.seq( pourover )
.seq( linkify )
.or(function(err) {
    console.error(err);
});
// assume error-first callback style is needed
function result(err,data) {
    if (err) {
        console.error( err );
    }
    else {
        console.log( data );
    }
}

ajax( "some.url.1", asyncify(result) );
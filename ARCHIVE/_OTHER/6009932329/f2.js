function blah() {
    function foo() {
        var a = true;
        try { a(); }
        catch (err) {
            console.log(err); // outputs just the err object
            console.log(err+""); // forces err#toString to get nicer output
        }
    }
    foo();
}

blah();

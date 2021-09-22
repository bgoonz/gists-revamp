// hopefill to wrap the built-in Error.prototype.string() with an improved version
(function(){
    var errToString = Error.prototype.toString;

    Error.prototype.toString = function() {
        var stack;
        // some browsers track the much more useful `.stack`, so use it!
        if (this.stack) {
            // some print the name/message in .stack, some don't. normalize it.
            stack = (this.stack + "").replace(new RegExp(this.name + ": " + this.message + "\n"),"");
            return this.name + ": " + this.message + "\n" + stack;
        }
        // otherwise, just use whatever the built-in behavior is.
        else {
            return errToString.call(this);
        }
    };
})();

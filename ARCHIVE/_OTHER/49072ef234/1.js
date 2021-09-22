function gatherArgs(fn) {
    return function gatheredFn(...argsArr) {
        return fn( argsArr );
    };
}

function gatherArgProps(fn,propOrder = []) {
    return function gatheredFn(...args) {
        return fn(
            zip( propOrder, args )
            .reduce( (obj,[key,val]) => (obj[key] = val, obj), {} )
        );
    };
}
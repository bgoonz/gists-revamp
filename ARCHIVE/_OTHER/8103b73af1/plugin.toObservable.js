ASQ.extend("toObservable",function __build__(api,internals){
  return function __toObsv__() {
    return Rx.Observable.create(function(observer) {
      api.val(function(msg){
        observer.onNext(msg);
        return ASQ.messages.apply(ø,arguments);
      });
    });
  };
});
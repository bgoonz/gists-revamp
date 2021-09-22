function SomeCounter() {
    const [ counter, updateCounter ] = useState(0);
    
    useEffect(function listening(){
        const btn = document.getElementById("increment-counter-btn");
        btn.addEventListener("click",onClick);
    },[]);
    
    useEffect(function logger(){
        // this logger() is updated each time `counter` changes, so
        // the closure is never stale
        console.log(`Current counter: ${ counter }`);
    },[ counter ]);
    
    return <div>Counter Value: {counter}</div>;
    
    function onClick(evt) {
        // we're closed over `counter` here, but only the onClick()
        // from the very first rendering is bound as the event
        // handler; the closure becomes stale -- OOPS!
        console.log(`Previous Counter: ${counter}`);
        updateCounter(c => c + 1);
    }
}
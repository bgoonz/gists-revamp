function Foo() {
  var [x,setX] = useState(0);
  var [y,setY] = useState(1);
  var cb = useCallback(
    function printXYIfChanged() { console.log(x,y); },
    [x,y]
  );
  useEffect(
    function pollingXY(){
      var intv = setInterval(cb,100);
      return function clearPolling() { clearInterval(intv); };
    },
    [x,y]
  );
  
  return (
    <>
       <button onClick={()=>setX(x=>++x)}>inc x</button>
       <button onClick={()=>setY(y=>++y)}>inc y</button>
    </>
  );
}
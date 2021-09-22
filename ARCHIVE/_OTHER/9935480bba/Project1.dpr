program Project1;

{$APPTYPE CONSOLE}

{$R *.res}

uses
  System.SysUtils,
  uSingletonGeneric in 'uSingletonGeneric.pas',
  uMyClass in 'uMyClass.pas';

var
  oSingleton1  : TMyClass;
  oSingleton2  : TMyClass;
  oNoSingleton : TMyClass;
begin
  ReportMemoryLeaksOnShutdown := true;

  oNoSingleton := TMyClass.Create;
  oSingleton1  := TMyClassSingleton.GetInstance();
  oSingleton2  := TMyClassSingleton.GetInstance();
  try
    try
      oNoSingleton.Value := 1;
      oSingleton1.Value  := 2;
      oSingleton2.Value  := 3;

      Writeln(Format('NoSingleton: %d | Singleton1: %d | Singleton2: %d',[oNoSingleton.Value,
                                                                          oSingleton1.Value,
                                                                          oSingleton2.Value]));
      Readln;
    except
      on E: Exception do
        Writeln(E.ClassName, ': ', E.Message);
    end;
  finally
    oNoSingleton.free;
  end;
end.

{
###OUTPUT###

  NoSingleton: 1 | Singleton1: 3 | Singleton2: 3
  
}
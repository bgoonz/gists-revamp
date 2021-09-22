unit uMyClass;

interface

uses uSingletonGeneric;

type
  TMyClass = class
  strict private
    FValue : integer;
  public
    property Value : Integer read FValue write FValue;
  end;

  TMyClassSingleton = TSingleton<TMyClass>;

implementation

initialization
finalization
  TMyClassSingleton.ReleaseInstance();

end.
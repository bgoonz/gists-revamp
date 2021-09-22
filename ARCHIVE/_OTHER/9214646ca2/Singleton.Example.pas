unit Singleton.Example;

interface

type
  TMyClass = class
  strict private
    class var FInstance : TMyClass;
  private
    class procedure ReleaseInstance();
  public
    class function GetInstance(): TMyClass;
  end;

implementation

{ TMyClass }

class function TMyClass.GetInstance: TMyClass;
begin
  if not Assigned(Self.FInstance) then
    self.FInstance := TMyClass.Create;
  Result := Self.FInstance;
end;

class procedure TMyClass.ReleaseInstance;
begin
  if Assigned(Self.FInstance) then
    Self.FInstance.Free;
end;

initialization
finalization
  TMyClass.ReleaseInstance();

end.
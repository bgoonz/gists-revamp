unit UDP.Server;

interface
uses
  IdUDPServer,
  IdSocketHandle,
  System.SysUtils;

type
  TResponseToMessage = reference to function(const AMsg : string):string;

  TUDPServer = class
  strict private const
    DEFAULT_UDP_PORT = 49152;
  strict private
    FidUDPServer : TIdUDPServer;
    FResponseToMessage: TResponseToMessage;
    FEndOfProtocol: string;

    class var FInstance : TUDPServer;

    constructor Create();
    destructor Free();

    procedure UDPRead (AThread: TIdUDPListenerThread; AData: TArray<System.Byte>; ABinding: TIdSocketHandle);
  private
    class procedure ReleaseInstance();
  public
    procedure SetReponseToMessage(AFunction : TResponseToMessage);
    procedure SetUDPPort(const APort : word);
    procedure StartListen();

    property EndOfProtocol : string read FEndOfProtocol write FEndOfProtocol;

    class function GetInstance() : TUDPServer;
  end;

implementation

{ TUdpServer }

constructor TUDPServer.Create;
begin
  Self.FidUDPServer := TIdUDPServer.Create(nil);
  Self.FidUDPServer.OnUDPRead := Self.UDPRead;
  Self.FidUDPServer.DefaultPort := Self.DEFAULT_UDP_PORT;
end;

destructor TUDPServer.Free;
begin
  Self.FidUDPServer.Free;
end;

class function TUDPServer.GetInstance: TUDPServer;
begin
  if not Assigned(Self.FInstance) then
    Self.FInstance := TUDPServer.Create();
  Result := Self.FInstance;
end;

class procedure TUDPServer.ReleaseInstance;
begin
  if Assigned(Self.FInstance) then
    Self.FInstance.Free;
end;

procedure TUDPServer.SetReponseToMessage(AFunction: TResponseToMessage);
begin
  Self.FResponseToMessage := AFunction;
end;

procedure TUDPServer.SetUDPPort(const APort: word);
begin
  Self.FidUDPServer.Active := false;
  Self.FidUDPServer.DefaultPort := APort;
  Self.FidUDPServer.Active := true;
end;

procedure TUDPServer.StartListen;
begin
  if not Self.FidUDPServer.Active then
    Self.FidUDPServer.Active := true;
end;

procedure TUDPServer.UDPRead(AThread: TIdUDPListenerThread;
  AData: TArray<System.Byte>; ABinding: TIdSocketHandle);
var
  sResponse: string;
begin
  sResponse := EmptyStr;
  if Assigned(Self.FResponseToMessage) then
    sResponse := Self.FResponseToMessage(StringOf(AData));

  if sResponse <> EmptyStr then
    ABinding.SendTo(ABinding.PeerIP,ABinding.PeerPort,sResponse);
  ABinding.SendTo(ABinding.PeerIP,ABinding.PeerPort,Self.FEndOfProtocol);
end;

initialization

finalization
  TUDPServer.ReleaseInstance();

end.
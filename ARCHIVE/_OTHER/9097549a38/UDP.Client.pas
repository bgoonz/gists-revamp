unit UDP.Client;

interface
uses
  IdUDPClient;

type
  TUDPClient = class
  strict private const
    DEFAULT_UDP_PORT = 49152;
  strict private
    FidUDPClient : TIdUDPClient;
    FUDPPort     : word;
    FEndOfProtocol : string;
    class var FInstance : TUDPClient;

    constructor Create();
    destructor Free();

    function ReceiveMessage(out AIpReceiver : string; out APortReceiver : Word):string;
  private
    class procedure ReleaseInstance();
  public
    procedure SetUDPPort(const APort : word);
    function SendBroadcast(const AMessage : string; out AIpReceiver : string; out APortReceiver : Word):string;
    function SendMessage(const AMessage : string; const AHost : string;const APort : word):string;

    property EndOfProtocol : string read FEndOfProtocol write FEndOfProtocol;

    class function GetInstance() : TUDPClient;
  end;

implementation

uses
  System.SysUtils;

{ TUDPClient }

constructor TUDPClient.Create;
begin
  Self.FidUDPClient := TIdUDPClient.Create(nil);
  Self.FidUDPClient.ReceiveTimeout := 3000;
  Self.FUDPPort := Self.DEFAULT_UDP_PORT;
end;

destructor TUDPClient.Free;
begin
  Self.FidUDPClient.Free;
end;

class function TUDPClient.GetInstance: TUDPClient;
begin
  if not Assigned(Self.FInstance) then
    Self.FInstance := TUDPClient.create;
  Result := Self.FInstance;
end;

function TUDPClient.ReceiveMessage(out AIpReceiver: string;
  out APortReceiver: Word): string;
var
  sBuffer : string;
begin
  while true do
  begin
    sBuffer := Self.FidUDPClient.ReceiveString(AIpReceiver,APortReceiver);
    if (sBuffer = EmptyStr) or (sBuffer = Self.FEndOfProtocol) then
      break;
    Result := Concat(Result,sBuffer);
  end;
end;

class procedure TUDPClient.ReleaseInstance;
begin
  if Assigned(Self.FInstance) then
    Self.FInstance.free;
end;

function TUDPClient.SendBroadcast(const AMessage: string;
  out AIpReceiver: string; out APortReceiver: Word): string;
begin
  Self.FidUDPClient.Broadcast(AMessage,Self.FUDPPort);
  Result := Self.ReceiveMessage(AIpReceiver,APortReceiver);
end;

function TUDPClient.SendMessage(const AMessage, AHost: string;
  const APort: word): string;
var
  sHost : string;
  wPorta : word;
begin
  Self.FidUDPClient.Send(AHost,APort,AMessage);
  Result := Self.ReceiveMessage(sHost,wPorta);
end;

procedure TUDPClient.SetUDPPort(const APort: word);
begin
  Self.FUDPPort := APort;
end;

initialization
finalization
  TUDPClient.ReleaseInstance();

end.

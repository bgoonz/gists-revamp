unit Rastreio.Correios;

interface

uses
  IdHTTP,
  System.Generics.Collections;

type
  TStatus = record
  public
    Hora : TDateTime;
    Local : string;
    Status : string;
    Observacao : string;
    procedure Clear;
  end;

  TRastreioCorreios = class
  strict private const
    C_REGEX = 'rowspan=\d+>(?<hora>[\d/:\s]+)</td><td>(?<local>[\p{L}\s]+)[\w<>/"=\s:]+="[A-F\d]{6}">(?<status>[\p{L}\s]+)|colspan=\d+>(?<texto>[\p{L}\s-]+?)</';
    C_URL_TEMPLATE = 'http://websro.correios.com.br/sro_bin/txect01$.QueryList?P_ITEMCODE=&P_LINGUA=001&P_TESTE=&P_TIPO=001&P_COD_UNI={COD_RAST}&Z_ACTION=Search';
  strict private
    FIdHttp : TIdHttp;
  public
    constructor Create();
    destructor Free();

    function Rastrear(const ACod : string):TList<TStatus>;overload;
  end;

implementation

uses
  System.Classes,
  RegularExpressions,
  System.SysUtils;

{ TRastreioCorreios }

constructor TRastreioCorreios.Create;
begin
  Self.FIdHttp := TIdHTTP.Create(nil);
end;

destructor TRastreioCorreios.Free;
begin
  Self.FIdHttp.Free;
end;

function TRastreioCorreios.Rastrear(const ACod: string): TList<TStatus>;
var
  ssReponse: TStringStream;
  rMath : TMatch;
  rMaths : TMatchCollection;
  rStatus : TStatus;
  sUrl : string;
begin
  Result := TList<TStatus>.Create;
  ssReponse := TStringStream.Create(EmptyStr);
  try
    sUrl := StringReplace(Self.C_URL_TEMPLATE,'{COD_RAST}',ACod,[]);
    Self.FIdHTTP.Get(sUrl,ssReponse);
    rMaths := TRegEx.Matches(ssReponse.DataString,Self.C_REGEX,[]);
    for rMath in rMaths do
    begin
      if rMath.Groups.Item['hora'].Value <> EmptyStr then
      begin
        rStatus.Hora   := StrToDateTime(rMath.Groups.Item['hora'].Value);
        rStatus.Local  := rMath.Groups.Item['local'].Value;
        rStatus.Status := rMath.Groups.Item['status'].Value;
        Result.Add(rStatus);
      end
      else
      begin
        rStatus := result.Extract(result.Last);
        rStatus.Observacao := rMath.Groups.Item['texto'].Value;
        result.Add(rStatus);
      end;
      rStatus.Clear();
    end;
  finally
    ssReponse.Free;
  end;
end;

{ TStatus }

procedure TStatus.Clear;
begin
  Self.Hora := 0;
  Self.Local := EmptyStr;
  Self.Status := EmptyStr;
  Self.Observacao := EmptyStr;
end;

end.
unit Utils.Cotacao;

interface
uses
  IdHTTP;

type
  TCotacao = class
  strict private
    FHTTP : TIdHTTP;
    function GetCotacao(const AUrl : string; ARegEx : string = 'nacional"[ ]+value="([0-9,]+)'):Real;
  public
    constructor Create;
    destructor Free;
    function Dolar():Real;
    function Euro():Real;
    function Libra():Real;
  end;

implementation
uses
  RegularExpressions,
  Classes, System.SysUtils;

{ TCotacao }

constructor TCotacao.Create;
begin
  Self.FHTTP := TIdHTTP.Create(nil);
end;

function TCotacao.GetCotacao(const AUrl: string; ARegEx: string = 'nacional"[ ]+value="([0-9,]+)'): Real;
var
  ssResponse : TStringStream;
  rMatch : TMatch;
begin
  Result := 0;
  ssResponse := TStringStream.Create();
  try
    Self.FHTTP.Get(AUrl,ssResponse);
    rMatch := TRegEx.Match(ssResponse.DataString,ARegEx,[roMultiLine]);
    if rMatch.Success then
      Result := StrToFloat(rMatch.Groups.Item[1].Value);
  finally
    ssResponse.Free;
  end;
end;

function TCotacao.Libra: Real;
begin
  Result := Self.GetCotacao('http://librahoje.com/');
end;

function TCotacao.Dolar: Real;
begin
  Result := Self.GetCotacao('http://dolarhoje.com/');
end;

function TCotacao.Euro: Real;
begin
  Result := Self.GetCotacao('http://eurohoje.com/');
end;

destructor TCotacao.Free;
begin
  Self.FHTTP.Free;
end;

end.
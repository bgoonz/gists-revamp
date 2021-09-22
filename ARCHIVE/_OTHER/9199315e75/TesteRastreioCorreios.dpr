program TesteRastreioCorreios;

{$APPTYPE CONSOLE}

{$R *.res}

uses
  System.SysUtils,
  Rastreio.Correios in 'Rastreio.Correios.pas',
  System.Generics.Collections;

var
  rStatus : TStatus;
  lStatus : TList<TStatus>;
  oRastreio : TRastreioCorreios;
  sCod      : string;
begin
  lStatus := nil;
  oRastreio := TRastreioCorreios.Create;
  try
    try
      Write('Digite o código a ser rastreado: ');
      Readln(sCod);

      lStatus := oRastreio.Rastrear(sCod);
      for rStatus in lStatus do
        Writeln(Format('[%s] [%s] [%s (%s)]',[DateTimeToStr(rStatus.Hora),rStatus.Local,rStatus.Status,rStatus.Observacao]));

      Readln;
    except
      on E: Exception do
        Writeln(E.ClassName, ': ', E.Message);
    end;
  finally
    if Assigned(lStatus) then
      lStatus.Free;
    oRastreio.Free;
  end;
end.

program TesteCotacao;

{$APPTYPE CONSOLE}

{$R *.res}

uses
  System.SysUtils,
  Utils.Cotacao in 'Utils.Cotacao.pas';

var
  oCotacao : TCotacao;
begin
  oCotacao := TCotacao.Create;
  try
    Writeln('Hoje estamos com as seguintes contações de moedas estrangeiras');
    Writeln(Format('Dolar: R$%f',[oCotacao.Dolar()]));
    Writeln(Format('Euro: R$%f',[oCotacao.Euro()]));
    Writeln(Format('Libra: R$%f',[oCotacao.Libra()]));
  finally
    oCotacao.Free;
  end;

  write('Pressione ENTER para sair...');
  Readln;
end.

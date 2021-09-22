program WebserviceTestings;

uses
  Vcl.Forms,
  Webservice.Client.View in 'Webservice.Client.View.pas' {frmWebserviceCliente},
  CurrencyConvertor in 'CurrencyConvertor.pas';

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.CreateForm(TfrmWebserviceCliente, frmWebserviceCliente);
  Application.Run;
end.

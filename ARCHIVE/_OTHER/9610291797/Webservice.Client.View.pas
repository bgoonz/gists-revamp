unit Webservice.Client.View;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Soap.InvokeRegistry,
  Soap.Rio, Soap.SOAPHTTPClient;

type
  TfrmWebserviceCliente = class(TForm)
    btnConverter: TButton;
    lblResultado: TLabel;
    mmRequest: TMemo;
    mmResponse: TMemo;
    cmbFrom: TComboBox;
    cmbTo: TComboBox;
    Label1: TLabel;
    Label2: TLabel;
    procedure btnConverterClick(Sender: TObject);
    procedure FormCreate(Sender: TObject);
  private
    { Private declarations }
    procedure CarregarCombos();
    procedure httpRioBeforeExecute(const MethodName: string;SOAPRequest: TStream);
    procedure httpRioAfterExecute(const MethodName: string; SOAPResponse: TStream);

  public
    { Public declarations }
  end;

var
  frmWebserviceCliente: TfrmWebserviceCliente;

implementation

{$R *.dfm}

uses CurrencyConvertor, typInfo;

procedure TfrmWebserviceCliente.btnConverterClick(Sender: TObject);
var
  _ccSoap : CurrencyConvertorSoap;
  _rio    : THTTPRIO;
begin
  _rio := THTTPRIO.Create(nil);
  _rio.OnBeforeExecute := Self.httpRioBeforeExecute;
  _rio.OnAfterExecute := Self.httpRioAfterExecute;
  _ccSoap := GetCurrencyConvertorSoap(false,EmptyStr,_rio);
  try
    lblResultado.Caption := Format('$%f',[_ccSoap.ConversionRate(Currency(cmbFrom.ItemIndex), Currency(cmbTo.ItemIndex))]);
  finally
    _ccSoap := nil;
  end;
end;

procedure TfrmWebserviceCliente.CarregarCombos;
var
  moeda : Currency;
begin
  cmbFrom.Clear;
  cmbTo.Clear;

  for moeda := low(currency) to high(currency) do
  begin
    cmbFrom.Items.Add(GetEnumName(TypeInfo(Currency),ord(moeda)));
  end;
  cmbTo.Items.AddStrings(cmbFrom.Items);

  cmbFrom.ItemIndex := 0;
  cmbTo.ItemIndex := 0;
end;

procedure TfrmWebserviceCliente.FormCreate(Sender: TObject);
begin
  ReportMemoryLeaksOnShutdown := true;
  Self.CarregarCombos();
end;

procedure TfrmWebserviceCliente.httpRioAfterExecute(const MethodName: string;
  SOAPResponse: TStream);
begin
  SOAPResponse.Position := 0;
  mmResponse.Lines.LoadFromStream(SOAPResponse);
  SOAPResponse.Position := 0;
end;

procedure TfrmWebserviceCliente.httpRioBeforeExecute(const MethodName: string;
  SOAPRequest: TStream);
begin
  SOAPRequest.Position := 0;
  mmRequest.Lines.LoadFromStream(SOAPRequest);
  SOAPRequest.Position := 0;
end;

end.
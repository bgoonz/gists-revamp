procedure TForm1.Button1Click(Sender: TObject);
var
  wPort: Word;
  sIp: string;
  sMsg: string;
begin
  TUDPClient.GetInstance().EndOfProtocol := '.';
  sMsg := TUDPClient.GetInstance().SendBroadcast('UDP-MSG',sIp,wPort);

  Memo1.Lines.Add(Format('[%s] [%d] : %s',[sIp,wPort,sMsg]));
end;

procedure TForm1.Button2Click(Sender: TObject);
var
  sMsg: string;
begin
  TUDPClient.GetInstance().EndOfProtocol := '.';
  sMsg := TUDPClient.GetInstance().SendMessage('UDP-MSG','127.0.0.1',49152);

  Memo1.Lines.Add(sMsg);
end;


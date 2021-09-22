procedure TForm1.BitBtn1Click(Sender: TObject);
begin
  TUDPServer.GetInstance().SetReponseToMessage(
    function(const AMsg : string):String
    begin
      Memo1.Lines.Insert(0,AMsg);
      if AMsg = 'UDP-MSG' then
        Result := 'DONE'
      else
        Result := ReverseString(AMsg);
    end
  );
  TUDPServer.GetInstance().EndOfProtocol := '.';  
  TUDPServer.GetInstance().StartListen();
  BitBtn1.Enabled := false;
end;
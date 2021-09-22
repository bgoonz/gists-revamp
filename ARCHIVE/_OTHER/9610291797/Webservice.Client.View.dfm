object frmWebserviceCliente: TfrmWebserviceCliente
  Left = 0
  Top = 0
  BorderIcons = [biSystemMenu]
  BorderStyle = bsSingle
  Caption = 'Conversor de moeda'
  ClientHeight = 606
  ClientWidth = 670
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  OnCreate = FormCreate
  DesignSize = (
    670
    606)
  PixelsPerInch = 96
  TextHeight = 16
  object lblResultado: TLabel
    Left = 88
    Top = 44
    Width = 69
    Height = 16
    Caption = 'lblResultado'
  end
  object Label1: TLabel
    Left = 8
    Top = 11
    Width = 30
    Height = 16
    Caption = 'From'
  end
  object Label2: TLabel
    Left = 127
    Top = 11
    Width = 15
    Height = 16
    Caption = 'To'
  end
  object btnConverter: TButton
    Left = 8
    Top = 41
    Width = 75
    Height = 25
    Caption = 'Converter'
    TabOrder = 0
    OnClick = btnConverterClick
  end
  object mmRequest: TMemo
    Left = 8
    Top = 72
    Width = 654
    Height = 233
    Anchors = [akLeft, akTop, akRight]
    Lines.Strings = (
      'mmRequest')
    ScrollBars = ssBoth
    TabOrder = 1
  end
  object mmResponse: TMemo
    Left = 8
    Top = 328
    Width = 654
    Height = 270
    Anchors = [akLeft, akTop, akRight, akBottom]
    Lines.Strings = (
      'mmResponse')
    ScrollBars = ssBoth
    TabOrder = 2
  end
  object cmbFrom: TComboBox
    Left = 44
    Top = 8
    Width = 77
    Height = 24
    Style = csDropDownList
    TabOrder = 3
  end
  object cmbTo: TComboBox
    Left = 148
    Top = 8
    Width = 93
    Height = 24
    Style = csDropDownList
    TabOrder = 4
  end
end

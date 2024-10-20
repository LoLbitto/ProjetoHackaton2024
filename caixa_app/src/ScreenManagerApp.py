from kivy.app import App
from kivy.uix.screenmanager import Screen,ScreenManager
import QrCodeGUI as QrCodeGUI
import ProcessamentoGUI as ProcessamentoGUI

class ScreenManagerApp(App):

    def build(self):
        sm = ScreenManager()

        tela_qrcode = QrCodeGUI.QrCodeGUI(name = "qrcode_screen")
        tela_processamento = ProcessamentoGUI.ProcessamentoGUI(name = "exito_screen")

        sm.add_widget(tela_qrcode)
        sm.add_widget(tela_processamento)

        return sm
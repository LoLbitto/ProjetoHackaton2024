from kivy.uix.screenmanager import Screen
from kivy.uix.image import Image
from kivy.uix.floatlayout import FloatLayout
from kivy.clock import Clock
import os
import threading
import PonteStatus
import time
import logging

class QrCodeGUI(Screen):

    def __init__(self,**kwargs):
        super(QrCodeGUI, self).__init__(**kwargs)
        self.layout = None
        logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

    def build(self):
        self.layout = FloatLayout()

        img = self.get_qrcode()
        self.layout.add_widget(img)



        self.clear_widgets()
        self.add_widget(self.layout)

        threading.Thread(target=self.loop).start()

    def is_pago(self):
        return PonteStatus.PonteStatus().status == 'pago'

    def on_pre_enter(self):
        self.build()


    def get_qrcode(self):
        path = os.path.dirname(os.path.abspath(__file__))
        img_path = os.path.join(path,'assets','qrcode.png')
        return Image(source = img_path,
                     size_hint = (None,None),
                     size = (400,400),
                     pos_hint = {'center_x':0.5,'center_y':0.5}) 
    
    def loop(self):
        while not self.is_pago():
            time.sleep(2)
            
        Clock.schedule_once(lambda dt: self.chama_tela(), 0)

    def chama_tela(self):
        logging.info('Usuario confirmou')
        self.manager.current = 'exito_screen'
        
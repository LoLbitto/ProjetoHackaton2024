from kivy.uix.screenmanager import Screen
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.label import Label

class ProcessamentoGUI(Screen):

    def __init__(self,**kwargs):
        super(ProcessamentoGUI, self).__init__(**kwargs)
        self.layout = None

    def build(self):
        self.layout = FloatLayout()

        texto = Label(text="Pagamento efetuado com sucesso",
                        size_hint=(None,None),
                        size=(200,40),
                        font_size = 32,
                        pos_hint={'center_x':0.5,'center_y':0.5})

        
        self.layout.add_widget(texto)

        self.clear_widgets()
        self.add_widget(self.layout)

        

    def on_pre_enter(self):
        self.build()

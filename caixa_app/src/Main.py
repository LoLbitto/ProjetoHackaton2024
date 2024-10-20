import ScreenManagerApp as ScreenManagerApp
import QrCodeListener
import QrCodeGenerator
import time
import threading

class Main:        

    def iniciarPrograma(self):
        qrcode_generator = QrCodeGenerator.QrCodeGenerator()
        qrcode_generator.generate()

        time.sleep(1)

        t1 = threading.Thread(target=self.runKivy)
        t2 = threading.Thread(target=self.runFlask)

        t1.start()
        t2.start()

        t1.join()
        t2.join()


    def runKivy(self):
        ScreenManagerApp.ScreenManagerApp().run()

    def runFlask(self):
        listener = QrCodeListener.QrCodeListener()
        listener.iniciar()

if __name__ == '__main__':
    Main().iniciarPrograma()
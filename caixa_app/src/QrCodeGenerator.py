import segno
import os

class QrCodeGenerator:

    def generate(self):
        path_python = os.path.dirname(os.path.abspath(__file__))
        path = os.path.join(path_python,'assets')
        file = os.path.join(path,'qrcode.png')
        qrcode = segno.make_qr("http://localhost:5000/hackaton")
        qrcode.save(file, scale = 10)
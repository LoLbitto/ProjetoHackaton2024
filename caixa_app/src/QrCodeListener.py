from flask import Flask, render_template
import logging
import PonteStatus

class QrCodeListener:

    def __init__(self):
        self.app = Flask(__name__,template_folder='../templates')
        self.chamar_route()
        self.status = 'pendente'
        logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

    def chamar_route(self):

        @self.app.route('/hackaton',methods = ['GET'])
        def getConfirm():
            logging.info('Usuario na 1 pagina')
            return render_template('confirm.html')
        
        @self.app.route('/confirm', methods = ['GET'])
        def getConfirmPost():
            self.status = 'confirmado'
            PonteStatus.PonteStatus().set_status('pago') 
            logging.info('Usuario confirmou')
            return f'Status:{self.status}'
    
    def iniciar(self):
        self.app.run(host = 'localhost', port=5000)

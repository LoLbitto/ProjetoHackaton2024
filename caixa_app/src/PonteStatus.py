
class PonteStatus:
    instance = None
    status = 'pendente'

    def __new__(cls, *args, **kwargs):
        if not cls.instance:
            cls.instance = super(PonteStatus, cls).__new__(cls, *args, **kwargs)
        return cls.instance

    def get_status(self):
        return self.status

    def set_status(self, status):
        self.status = status
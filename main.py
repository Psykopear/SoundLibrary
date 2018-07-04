from PySide2.QtQml import QQmlApplicationEngine
from PySide2.QtGui import QGuiApplication

app = QGuiApplication([])
engine = QQmlApplicationEngine("qml/main.qml")
app.exec_()

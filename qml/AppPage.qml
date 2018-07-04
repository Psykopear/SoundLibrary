import QtQuick 2.9
import QtQuick.Controls 2.2
import QtQuick.Controls.Material 2.2


Pane {
    id: appPage
    Material.background: Material.Black

    Button {
        onClicked: console.log(stack.currentitem.objectName)
    }

    Column {
        Label { text: "CIAO" }
        Label { text: "CIAO" }
        Label { text: "CIAO" }
        Label { text: "CIAO" }
    }
}

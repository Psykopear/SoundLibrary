import QtQuick 2.9
import QtQuick.Controls 2.2
import QtQuick.Controls.Material 2.2

ApplicationWindow {
    id: window

    visible: true
    Material.theme: Material.Dark


    width: 800
    height: 600

    Row {
        anchors.fill: parent
        Nav {
            id: nav
        }
        StackView {
            id: stack
            height: parent.height
            width: parent.width - 48
            initialItem: _appPage
        }

        Component {
            id: _appPage
            AppPage {}
        }
        Component {
            id: _library
            Library {}
        }

    }
}

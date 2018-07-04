import QtQuick 2.9
import QtQuick.Controls 2.2
import QtQuick.Controls.Material 2.2


Page {
    id: _appPagePage
    width: 48
    height: parent.height
    Material.theme: Material.Light
    Material.background: Material.Cyan

    Column {
        spacing: 0
        Button {
            text: "S"
            width: 48
            height: 48
            flat: true
            onClicked: stack.replace(_appPage, {}, StackView.Immediate)
        }
        Button {
            text: "L"
            width: 48
            height: 48
            flat: true
            onClicked: stack.replace(_library, {}, StackView.Immediate)
        }
    }
}

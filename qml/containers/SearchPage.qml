import QtQuick 2.11
import QtQuick.Controls 2.4
import QtQuick.Layouts 1.11
import "../components"

ScrollView {
    Flow {
        id: flow
        width: parent.width
        padding: 20
        spacing: 30

        SearchCard {}
        SearchCard {}
        SearchCard {}
        SearchCard {}
        SearchCard {}

        Card {
            Text {
                text: "+"
                anchors.centerIn: parent
                font.pixelSize: 100
                color: "#20FFFFFF"
            }
        }
    }
}

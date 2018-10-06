import QtQuick 2.11
import QtQuick.Layouts 1.11
import "../components"

Item {

  ListView {
    width: 200
    height: parent.height
    Rectangle {
      height: parent.height
      width: 2
      x: 198
      color: "#40FFFFFF"
    }
  }

  Flow {
    padding: 20
    spacing: 30
    x: 200
    width: parent.width - 200

    Card {
      text: "Library page card 1"
      active: true
    }
    Card {
      text: "Library page card 2"
    }
    Card {
      text: "Library page card 3"
    }
    Card {
      text: "Library page card 4"
    }
  }

}

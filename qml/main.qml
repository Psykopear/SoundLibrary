import QtQuick 2.11
import QtQuick.Window 2.2

Window {
  x: (Screen.desktopAvailableWidth - width) / 2
  y: (Screen.desktopAvailableHeight - height) / 2
  minimumWidth: 800
  minimumHeight: 600
  color: "#262328"

  Rectangle {
    width: 100
    height: parent.height
    color: "#0CFFE1"

    Rectangle {
      width: 100
      height: 100
      color: "transparent"
      MouseArea {
        anchors.fill: parent
        hoverEnabled: true
        onEntered: {
          parent.color = "#20000000"
        }

        onExited: {
          parent.color = "#00000000"
        }
      }
    }

    Rectangle {
      y: 100
      width: 100
      height: 100
      color: "transparent"
      MouseArea {
        anchors.fill: parent
        hoverEnabled: true
        onEntered: {
          parent.color = "#20000000"
        }

        onExited: {
          parent.color = "#00000000"
        }
      }
    }

    Rectangle {
      y: 200
      width: 100
      height: 100
      color: "transparent"
      MouseArea {
        anchors.fill: parent
        hoverEnabled: true
        onEntered: {
          parent.color = "#20000000"
        }

        onExited: {
          parent.color = "#00000000"
        }
      }
    }

    Rectangle {
      y: 300
      width: 100
      height: 100
      color: "transparent"
      MouseArea {
        anchors.fill: parent
        hoverEnabled: true
        onEntered: {
          parent.color = "#20000000"
        }

        onExited: {
          parent.color = "#00000000"
        }
      }
    }
  }
}

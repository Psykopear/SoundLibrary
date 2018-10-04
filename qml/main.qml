import QtQuick 2.11
import QtQuick.Layouts 1.11
import QtQuick.Window 2.2

Window {
  x: (Screen.desktopAvailableWidth - width) / 2
  y: (Screen.desktopAvailableHeight - height) / 2
  minimumWidth: 800
  minimumHeight: 600
  color: "#262328"

  Rectangle {
    id: sideBar
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
        onClicked: {
          layout.currentIndex = 0
        }
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
        onClicked: {
          layout.currentIndex = 1
        }
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
        onClicked: {
          layout.currentIndex = 2
        }
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
        onClicked: {
          layout.currentIndex = 3
        }
        onEntered: {
          parent.color = "#20000000"
        }

        onExited: {
          parent.color = "#00000000"
        }
      }
    }
  }

  StackLayout {
    id: layout
    x: 100
    height: parent.height
    width: parent.width - 100
    currentIndex: 0

    GridLayout {
      anchors.fill: parent
      Rectangle {
        color: 'teal'
        width: 100
        height: 100
      }
      Rectangle {
        color: 'plum'
        width: 100
        height: 100
      }
    }
    GridLayout {
      anchors.fill: parent
      Rectangle {
        color: 'plum'
        width: 100
        height: 100
      }
      Rectangle {
        color: 'teal'
        width: 100
        height: 100
      }
    }
  }
}

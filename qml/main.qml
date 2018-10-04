import QtQuick 2.11
import QtQuick.Layouts 1.11
import QtQuick.Window 2.2

import "controls" as Awesome

Window {
  x: (Screen.desktopAvailableWidth - width) / 2
  y: (Screen.desktopAvailableHeight - height) / 2
  minimumWidth: 800
  minimumHeight: 600
  color: "#262328"

  FontAwesome {
    id: awesome
    resource: "http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/fonts/fontawesome-webfont.ttf"
  }

  Rectangle {
    id: sideBar
    width: 100
    height: parent.height
    color: "#0CFFE1"

    Rectangle {
      id: button0
      width: 100
      height: 100
      color: {
        if (layout.currentIndex === 0)
          "#20000000"
        else
          "transparent"
      }
      Awesome.Button {
        anchors.fill: parent
        icon: awesome.icons.fa_search
      }
      MouseArea {
        anchors.fill: parent
        hoverEnabled: true
        onClicked: {
          layout.currentIndex = 0;
          parent.color = "#20000000";
          button1.color = "#00000000";
        }

        onEntered: {
          parent.color = "#20000000"
        }

        onExited: {
          if (layout.currentIndex !== 0)
            parent.color = "#00000000"
        }
      }
    }

    Rectangle {
      id: button1
      y: 100
      width: 100
      height: 100
      color: {
        if (layout.currentIndex === 1)
          "#20000000"
        else
          "transparent"
      }
      Awesome.Button {
        anchors.fill: parent
        icon: awesome.icons.fa_archive
      }
      MouseArea {
        anchors.fill: parent
        hoverEnabled: true
        onClicked: {
          layout.currentIndex = 1;
          parent.color = "#20000000";
          button0.color = "#00000000";
        }
        onEntered: {
          parent.color = "#20000000"
        }

        onExited: {
          if (layout.currentIndex !== 1)
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

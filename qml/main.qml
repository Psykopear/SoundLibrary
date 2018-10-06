import QtQuick 2.11
import QtQuick.Controls 1.4
import QtQuick.Layouts 1.11
import QtQuick.Window 2.2

import "components"
import "containers"
import "components/controls" as Awesome

Window {
  id: root
  x: (Screen.desktopAvailableWidth - width) / 2
  y: (Screen.desktopAvailableHeight - height) / 2
  minimumWidth: 800
  minimumHeight: 600
  color: "#262328"

  FontAwesome {
    id: awesome1
    resource: "http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/fonts/fontawesome-webfont.ttf"
  }

  Sidebar {
    awesome: awesome1
    layout: layout1
    size: 80
  }

  ScrollView {
    height: root.height
    width: root.width - 100
    x: 80


    Flickable {
      contentWidth: parent.width
      contentHeight: parent.height * 5
      anchors.fill: parent
      StackLayout {
        id: layout1
        anchors.fill: parent
        currentIndex: 0


        SearchPage {}
        LibraryPage {}
        UserPage {}

      }
    }
  }
}

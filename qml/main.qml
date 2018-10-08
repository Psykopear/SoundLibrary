import QtQuick 2.11
import QtQuick.Controls 2.4
import QtQuick.Layouts 1.11
import QtQuick.Window 2.2

import "components"
import "containers"
import "components/controls" as Awesome

Window {
  id: root
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

  StackLayout {
    id: layout1
    height: parent.height
    width: parent.width - 80
    x: 80
    currentIndex: 0

    SearchPage {
      anchors.fill: parent
    }
    LibraryPage {}
    UserPage {}

  }
}

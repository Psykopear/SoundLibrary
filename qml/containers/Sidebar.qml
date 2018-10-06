import QtQuick 2.11
import QtQuick.Layouts 1.11
import QtQuick.Window 2.2

import "../components"
import "../components/controls" as Awesome

Rectangle {
  id: sideBar
  property var layout
  property var awesome
  property int size: 80

  width: size
  height: parent.height
  color: "#0CFFE1"

  property var selectButton
  property var activeButton;

  onActiveButtonChanged: {
    button0.active = activeButton === button0
    button1.active = activeButton === button1
    button2.active = activeButton === button2
  }

  Button {
    id: button0
    size: parent.size
    icon: awesome.icons.fa_search
    active: true
    onClicked: function() {
      parent.activeButton = button0;
      layout.currentIndex = 0;
    }
  }

  Button {
    id: button1
    size: parent.size
    icon: awesome.icons.fa_archive
    y: parent.size
    active: false
    onClicked: function() {
      parent.activeButton = button1;
      layout.currentIndex = 1;
    }
  }

  Button {
    id: button2
    icon: awesome.icons.fa_user
    size: parent.size
    y: parent.size * 2
    active: false
    onClicked: function() {
      parent.activeButton = button2;
      layout.currentIndex = 2;
    }
  }

  Button {
    id: quit
    y: parent.height - parent.size
    size: parent.size
    icon: awesome.icons.fa_power_off
    active: false
    onClicked: function() {
      Qt.quit();
    }
  }
}

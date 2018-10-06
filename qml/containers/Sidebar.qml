import QtQuick 2.11
import QtQuick.Layouts 1.11
import QtQuick.Window 2.2

import "components"
import "controls" as Awesome

  Rectangle {
    id: sideBar
    width: 100
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
      icon: awesome.icons.fa_search
      active: true
      onClicked: function() {
        parent.activeButton = button0;
        layout.currentIndex = 0;
      }
    }

    Button {
      id: button1
      icon: awesome.icons.fa_archive
      y: 100
      active: false
      onClicked: function() {
        parent.activeButton = button1;
        layout.currentIndex = 1;
      }
    }

    Button {
      id: button2
      icon: awesome.icons.fa_user
      y: 200
      active: false
      onClicked: function() {
        parent.activeButton = button2;
        layout.currentIndex = 2;
      }
    }

    Button {
      id: quit
      y: parent.height - 100
      icon: awesome.icons.fa_power_off
      active: false
      onClicked: function() {
        Qt.quit();
      }
    }
  }

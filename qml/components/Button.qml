import QtQuick 2.11

import "controls" as Awesome

// Button component, with internal state management
// for mouse entered/exited
Rectangle {
  property bool active: false
  property string icon

  property var onClicked: function() {}
  property var onEntered: function() {}
  property var onExited: function() {}
  property var getColor: function() {
    if (active) {
      return "#20000000";
    } else {
      return "transparent";
    }
  }


  width: 100
  height: 100

  color: getColor()

  onActiveChanged: {
    color = getColor();
  }

  Awesome.Button {
    anchors.fill: parent
    icon: parent.icon
  }

  MouseArea {
    anchors.fill: parent
    hoverEnabled: true
    onClicked: {
      parent.active = true;
      parent.onClicked();
    }

    onEntered: {
      parent.color = "#20000000";
      parent.onEntered();
    }

    onExited: {
      if (!active) {
        parent.color = "#00000000";
      }
      parent.onExited();
    }
  }
}

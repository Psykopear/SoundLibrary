import QtQuick 2.11
import QtQuick.Layouts 1.11
import QtGraphicalEffects 1.0


Item {
  property string text
  property var onActiveChanged
  property bool active: false
  id: container
  width: 300
  height: 400
  onActiveChanged: {
    if (active) {
      dropshadow.radius = 19
      rectangle.color = "#262328"
    } else {
      dropshadow.radius = 12
      rectangle.color = "#262328"
    }
  }

  Rectangle {
    id: rectangle
    color: "#262328"
    anchors.fill: parent

    Text {
      text: container.text
    }

  }

  DropShadow {
    id: dropshadow
    anchors.fill: container
    horizontalOffset: 4
    verticalOffset: 4
    radius: 12
    samples: 17
    color: "#70000000"
    source: rectangle
  }
}

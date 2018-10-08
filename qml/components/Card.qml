import QtQuick 2.11
import QtQuick.Layouts 1.11
import QtGraphicalEffects 1.0


Item {
  property string text
  property var onActiveChanged
  property bool active: false
  default property alias _contentChildren: content.data
  id: container
  width: 300
  height: 400
  onActiveChanged: {
    if (active) {
      content.color = "#221F24"
    } else {
      content.color = "#221F24"
    }
  }

  Rectangle {
    id: content
    color: "#221F24"
    border.width: 1
    border.color: "#20FFFFFF"
    anchors.fill: parent
  }

}

import { AppRegistry } from "react-native";
import React from "react";
import { View, Alert } from "react-native";
import Camera from "react-native-camera";

class QRCodeScanner extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  onBarCodeRead = qr => {
    console.log("qr code is:---", qr);
    const data = qr.data
    Alert.alert(
      "QR Code",
      `${qr.data}`,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          onBarCodeRead={this.onBarCodeRead}
          style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
          aspect={Camera.constants.Aspect.fill}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("J_BarCode", () => QRCodeScanner);

//Imp commands:
//  ./adb shell input keyevent 82 :--- to open debugger menu in android
// ./adb devices list devices
// adb reverse tcp:8081 tcp:8081 to run it on device when u connected using usb.

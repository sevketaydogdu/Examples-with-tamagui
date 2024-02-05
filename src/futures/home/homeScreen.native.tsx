import { View, Text } from "tamagui";
import React from "react";
import OtpLogin from "../../components/otpLogin";

const NativeHomeScreen = () => {
  return (
    <View f={1} p="$4">
      <OtpLogin />
    </View>
  );
};

export default NativeHomeScreen;

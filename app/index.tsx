import { View, Text, Button } from "tamagui";
import React from "react";
import { router } from "expo-router";

const index = () => {
  return (
    <View p="$4">
      <Button variant="outlined" onPress={() => router.push("/optlogin")}>
        Otp Code
      </Button>
    </View>
  );
};

export default index;

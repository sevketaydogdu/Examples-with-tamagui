import { View, Text, Input, YStack, XStack, H1, H2, H3 } from "tamagui";
import React, { useEffect, useRef, useState } from "react";
import {
  BackHandler,
  Keyboard,
  TextInput,
  TextInputKeyPressEventData,
} from "react-native";
import { SButton } from "./button";

const OtpLogin = () => {
  const [inputs, setInputs] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<TextInput[]>([]);

  /**
   * Backspace press
   */
  const handleOnKeyPress = (
    nativeEvent: TextInputKeyPressEventData,
    index: number
  ) => {
    if (nativeEvent.key !== "Backspace") {
      return;
    }
    if (nativeEvent.key === "Backspace") {
      if (inputRef.current[index - 1]) inputRef.current[index - 1].focus();
    }
  };
  /**
   * @param text input text
   * @param index input text index number
   * gets input value from map and adds with index to array
   */
  const handleCodeChange = (text: string, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = text;
    setInputs(newInputs);

    if (text !== "" && index < inputRef.current.length - 1) {
      // Clear the next input field's value
      const nextInputIndex = index + 1;
      const nextInputRef = inputRef.current[nextInputIndex];

      if (nextInputRef) {
        nextInputRef.focus();
        newInputs[nextInputIndex] = "";
        setInputs(newInputs);
      }
    } else if (index === inputRef.current.length - 1 && text !== "") {
      Keyboard.dismiss();
    }
  };

  return (
    <View ai="center" jc="space-between">
      <YStack ai="center">
        <H3>OTP Login</H3>
        <XStack mt="$4" gap="$2">
          {inputs.map((input, index) => (
            <Input
              boc="$gray9"
              focusStyle={{
                boc: "$blue10Dark",
              }}
              w={48}
              aspectRatio={1}
              ta="center"
              fos="$7"
              key={index}
              value={input}
              clearTextOnFocus
              ref={(input) => (inputRef.current[index] = input)}
              onKeyPress={({ nativeEvent }) => {
                handleOnKeyPress(nativeEvent, index);
              }}
              onChangeText={(text) => handleCodeChange(text, index)}
            />
          ))}
        </XStack>
        <SButton mt="$4" onPress={() => setInputs(["", "", "", "", "", ""])}>
          Clear Inputs
        </SButton>
        <Text mt="$6">{inputs}</Text>
      </YStack>
    </View>
  );
};

export default OtpLogin;

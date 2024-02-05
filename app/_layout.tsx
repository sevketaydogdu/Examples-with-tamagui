import "../tamagui-web.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";

import { Slot, Stack } from "expo-router";

import { Platform, useColorScheme } from "react-native";

import { TamaguiProvider, TamaguiProviderProps } from "tamagui";
import { config } from "../tamagui.config";
import { useEffect } from "react";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {Platform.OS === "web" ? (
          <>
            <Slot />
          </>
        ) : (
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                title: "Home",
              }}
            />
            <Stack.Screen
              name="optlogin"
              options={{
                title: "OTP Login",
              }}
            />
          </Stack>
        )}
      </ThemeProvider>
    </TamaguiProvider>
  );
}

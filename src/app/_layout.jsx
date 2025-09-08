import { Stack } from "expo-router";
import "../../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView className="flex-1 bg-[#F9FAFB]">
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}

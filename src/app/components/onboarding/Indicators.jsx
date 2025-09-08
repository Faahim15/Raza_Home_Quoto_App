import { View, Text } from "react-native";
import ProgressDots from "./Progress";
import { router } from "expo-router";
export default function Indicators({ activeIndex }) {
  return (
    <View className="absolute flex-row justify-between mx-[6%] mt-[3%]">
      <ProgressDots activeIndex={activeIndex} />
      <Text
        onPress={() => router.replace("/onboarding/loginChoice")}
        className="font-poppins-500medium text-sm text-center"
      >
        Skip
      </Text>
    </View>
  );
}

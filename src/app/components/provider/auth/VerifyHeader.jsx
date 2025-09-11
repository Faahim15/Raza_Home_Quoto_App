import { View, Text } from "react-native";

export default function VerifyHeader({ title, subTitle }) {
  return (
    <View className="gap-[5%]">
      <Text className="font-poppins-bold text-[#111827] text-2xl text-center">
        {title}
      </Text>
      <Text className="font-poppins text-center text-sm text-[#4B5563]">
        {subTitle}
      </Text>
    </View>
  );
}

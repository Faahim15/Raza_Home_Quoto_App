import { View, Text } from "react-native";

export default function CustomHeader({ title, subtitle }) {
  return (
    <View className="absolute top-[60%]">
      <Text className="font-poppins-bold text-2xl text-[#1F2937] text-center">
        {title}
      </Text>
      <Text className="px-[3%] font-poppins-400regular text-base text-[#1F2937] text-center mt-[2%]">
        {subtitle}
      </Text>
    </View>
  );
}

import { View, Text } from "react-native";
export default function Biography() {
  return (
    <View className="mt-[3%] mx-[6%] ">
      <Text className="font-poppins-semiBold text-base mt-[2%] text-[#565656]">
        Bio
      </Text>
      <Text className="font-poppins-500medium text-xs text-justify text-[#565656]">
        I'm Jackson, a licensed electrician with a passion for safe, efficient,
        and code-compliant electrical work. With over 30 years of hands-on
        experience, I’m committed to powering your home with precision and care.
      </Text>
    </View>
  );
}

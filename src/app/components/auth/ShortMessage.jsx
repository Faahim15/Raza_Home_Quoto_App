import { View, Text, TouchableOpacity } from "react-native";

export default function ShortMessage({ title, btnText, onPress }) {
  return (
    <View className="flex-row gap-[1%] mt-[8%] justify-center">
      <Text className="font-poppins-400regular text-sm text-black">
        {title}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text className="font-poppins-semiBold underline text-sm text-[#0054A5] ">
          {btnText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

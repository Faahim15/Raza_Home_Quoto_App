import { View, Text, TextInput } from "react-native";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";

export default function WriteBox() {
  return (
    <View className=" mx-[5%] mt-[5%]">
      <Text className="text-sm font-poppins-500medium text-[#5C5F62] mb-[2%]">
        Write in bellow box
      </Text>
      <TextInput
        multiline
        placeholder="Write here..."
        placeholderTextColor="#898989"
        className="bg-[#f9f9f9] border border-gray-300 rounded-md px-[2%]  text-black text-sm"
        textAlignVertical="top"
        style={{ minHeight: verticalScale(100) }}
      />
    </View>
  );
}

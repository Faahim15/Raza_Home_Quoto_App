import { View, Text, TextInput } from "react-native";

export default function MapTextField() {
  return (
    <View className="bg-[#fff] mt-[2%]">
      <TextInput
        className="text-black font-poppins-400regular bg-[#fff] border  rounded-md border-[#dcdcdc] py-[14%] px-[2%] mt-[2%] "
        placeholder="Write here.."
        placeholderTextColor="#898989"
        multiline
        textAlignVertical="top"
      />
    </View>
  );
}

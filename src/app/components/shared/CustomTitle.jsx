import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
export default function CustomTitle({ title }) {
  return (
    <View className="flex-row border-b border-[#f9f9f9]  items-center  py-[3%] bg-[#F9F9F9] w-full  gap-[3%]">
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text className="font-poppins-semiBold text-xl">{title}</Text>
    </View>
  );
}

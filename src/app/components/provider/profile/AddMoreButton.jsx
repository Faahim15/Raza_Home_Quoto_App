import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddMoreButton({ onPress, title }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="mt-[8%] mb-[6%] border border-[#319FCA] bg-[#319FCA] py-[4%] rounded-full items-center justify-center mx-[4%]"
    >
      <View className="flex-row items-center">
        <Ionicons name="add" size={20} color="white" />
        <Text className="text-white font-poppins-bold text-base ml-[1%]">
          {title || "Add more project"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function TimePicker() {
  return (
    <View className="flex-row justify-between mt-[6%]">
      <Text className="font-poppins-400regular text-base text-[#0F161C] mb-2">
        Time
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/services/calenderBooking")}
        className="flex-row items-center gap-[3%] "
      >
        <Ionicons name="time-outline" color="#319FCA" size={20} />
        <Text className="font-poppins-bold text-base text-[#319FCA] underline">
          Pick a time
        </Text>
      </TouchableOpacity>
    </View>
  );
}

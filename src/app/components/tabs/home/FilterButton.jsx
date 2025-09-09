import { View, Text, TouchableOpacity } from "react-native";
export default function ApplyFilterButton({ onClose }) {
  return (
    <View className=" mt-[3%] bg-[#175994] border rounded-md border-[#0054A5] px-[3%] py-[3%] ">
      <TouchableOpacity onPress={onClose}>
        <Text className="text-white font-poppins-bold text-center">
          {" "}
          Apply Filter
        </Text>
      </TouchableOpacity>
    </View>
  );
}

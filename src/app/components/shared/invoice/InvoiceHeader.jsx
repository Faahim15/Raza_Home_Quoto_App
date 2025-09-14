import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const InvoiceHeader = () => {
  return (
    <View className="bg-[#1A73E8]  pb-[8%] px-[6%]">
      {/* Header with back button and title */}
      <View className="flex-row  items-center  py-[3%]  w-full  gap-[3%]">
        {/* <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text className="font-poppins-semiBold text-[#F9FAFB] text-xl">
          Review
        </Text> */}
      </View>

      {/* Invoice content */}
      <View className="items-center">
        <Text className="text-white text-2xl font-poppins-bold mb-[2%]">
          INVOICE
        </Text>
        <Text className="text-white font-poppins text-sm mb-[1%] opacity-90">
          #INV-123456
        </Text>
        <Text className="text-white font-poppins text-xs opacity-80">
          Issued: March 15, 2024
        </Text>
      </View>
    </View>
  );
};

export default InvoiceHeader;

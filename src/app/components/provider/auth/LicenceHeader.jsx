import { View, Text } from "react-native";
import React from "react";

export default function LicenceHeader({ title, subtitle }) {
  return (
    <View className="gap-[2%]">
      <Text className="font-poppins-semiBold text-[#111827] text-lg ">
        {title}
      </Text>
      <Text className="font-poppins   text-xs text-[#4B5563]">{subtitle}</Text>
    </View>
  );
}

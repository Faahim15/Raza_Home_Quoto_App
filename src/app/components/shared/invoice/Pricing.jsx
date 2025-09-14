import { View, Text } from "react-native";
import React from "react";
import { priceIcon } from "../../../../../assets/svg/icons";
import { SvgXml } from "react-native-svg";
import BreakDown from "./BreakDown";
export default function Pricing() {
  return (
    <View className="border-b border-[#E5E7EB] pb-[0%] px-[6%] mt-[3%]">
      <View className="border-b border-[#E5E7EB] ">
        {/* header */}
        <View className="flex-row  gap-[2%]">
          <SvgXml xml={priceIcon} height={24} width={14} />
          <Text className="font-poppins-semiBold text-base text-[#1F2937] ">
            Pricing Breakdown
          </Text>
        </View>

        {/* pricing Breakdown */}
        <View className="gap-[1.5%] pt-[1%] ">
          <BreakDown title="Plumbing Service" price="$150.00" />
          <BreakDown title="Pipe Replacement" price="$50.00" />
          <BreakDown title="HST (13%)" price="$26.00" />
        </View>
      </View>
      {/* subtotal */}
      <View className="flex-row pt-[1.5%] justify-between">
        <Text className="font-poppins-500medium text-sm text-[#374151]">
          Subtotal
        </Text>
        <Text className="font-poppins-500medium  text-sm text-[#111827]">
          $200.00
        </Text>
      </View>

      {/* total amount */}
      <View className="flex-row mt-[1%] px-[1%] py-[1%] border border-[#E5E7EB] rounded justify-between bg-[#EFF6FF]">
        <Text className="font-poppins-bold text-xl text-[#1E3A8A] ">
          Total Amount
        </Text>
        <Text className="font-poppins-bold text-xl text-[#1E3A8A] ">
          $226.00
        </Text>
      </View>
    </View>
  );
}

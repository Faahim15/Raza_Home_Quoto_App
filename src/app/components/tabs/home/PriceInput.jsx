import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import OfferPrice from "./OfferPrice";

const PriceSlider = () => {
  return (
    <View className=" mb-[2%] ">
      <View className="justify-center">
        {/* Header */}
        <Text className="font-poppins-semiBold text-[#6B7280] text-base mb-[3%]">
          Price Range
        </Text>
        <View className="flex-row justify-between">
          <View className="flex-1 mr-[3%]">
            <Text className="font-poppins-500medium text-xs text-[#6B7280] mb-[2%]">
              From
            </Text>
            <OfferPrice verticalPadding={11} />
          </View>

          {/* <View className="flex-row items-center justify-center">
            <Text className="font-poppins-500medium text-[#6B7280]">to</Text>
          </View> */}

          <View className="flex-1 ml-[3%]">
            <Text className="font-poppins-500medium text-xs text-[#6B7280] mb-[2%]">
              To
            </Text>
            <OfferPrice verticalPadding={11} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PriceSlider;

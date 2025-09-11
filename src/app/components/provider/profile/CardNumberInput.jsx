import React from "react";
import { View, Text, TextInput } from "react-native";

const CardNumberInput = ({ cardNumber, onCardNumberChange }) => {
  const formatCardNumber = (text) => {
    // Remove all non-digit characters
    const cleaned = text.replace(/\D/g, "");
    // Add spaces every 4 digits
    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formatted;
  };

  return (
    <View className="mb-[6%]">
      <Text className="text-[#1F2937] text-base font-poppins-400regular mb-[3%]">
        Card number
      </Text>
      <TextInput
        className="border border-[#DCDCDC] text-black rounded-lg px-[4%] py-[5%] text-base bg-white"
        placeholder="Enter 16 digit number"
        placeholderTextColor="#898989"
        value={cardNumber}
        onChangeText={(text) => onCardNumberChange(formatCardNumber(text))}
        keyboardType="numeric"
        maxLength={19} // 16 digits + 3 spaces
      />
    </View>
  );
};

export default CardNumberInput;

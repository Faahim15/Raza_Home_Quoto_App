import React from "react";
import { View, Text, TextInput } from "react-native";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";

const CardExpiryAndCVV = ({
  expiryDate,
  onExpiryDateChange,
  cvv,
  onCvvChange,
}) => {
  const formatExpiryDate = (text) => {
    // Remove all non-digit characters
    const cleaned = text.replace(/\D/g, "");
    // Add slashes after 2 and 4 digits for DD/MM/YYYY format
    if (cleaned.length >= 4) {
      return (
        cleaned.substring(0, 2) +
        "/" +
        cleaned.substring(2, 4) +
        "/" +
        cleaned.substring(4, 8)
      );
    } else if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + "/" + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  return (
    <View className="flex-row gap-[2%]">
      {/* Card Expiry Date */}
      <View className="flex-1">
        <Text className="text-[#1F2937] text-base font-poppins-400regular mb-[3%]">
          Card expiry date
        </Text>
        <TextInput
          style={{
            paddingHorizontal: scale(16),
            paddingVertical: verticalScale(12),
          }}
          className="border border-[#dcdcdc] text-black rounded-lg text-base bg-white"
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#898989"
          value={expiryDate}
          onChangeText={(text) => onExpiryDateChange(formatExpiryDate(text))}
          keyboardType="numeric"
          maxLength={10} // DD/MM/YYYY
        />
      </View>

      {/* CVV */}
      <View className="flex-1">
        <Text className="text-[#1F2937] text-base font-poppins-400regular mb-[3%]">
          CVV
        </Text>
        <TextInput
          style={{
            paddingHorizontal: scale(16),
            paddingVertical: verticalScale(12),
          }}
          className="border border-[#dcdcdc] text-black rounded-lg text-base bg-white"
          placeholder="000"
          placeholderTextColor="#898989"
          value={cvv}
          onChangeText={onCvvChange}
          keyboardType="numeric"
          maxLength={4}
          secureTextEntry
        />
      </View>
    </View>
  );
};

export default CardExpiryAndCVV;

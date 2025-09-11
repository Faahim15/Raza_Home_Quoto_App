import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { verticalScale } from "../../components/adaptive/Adaptiveness";
import FormButton from "../../components/auth/FormButton";
import CustomTitle from "../../components/shared/services/CustomTitle";
import CardExpiryAndCVV from "../../components/provider/profile/CardInputs";
import CardNumberInput from "../../components/provider/profile/CardNumberInput";
import { router } from "expo-router";
export default function AddNewCardScreen() {
  const [cardType, setCardType] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <View className="flex-1 bg-[#F9F9F9]">
      {/* Header */}
      <View className="px-[6%]">
        <CustomTitle title="Add new card" />
      </View>
      <View className="bg-[#F9F9F9] mt-[8%] rounded-lg px-[6%] shadow-sm">
        {/* Card Type Section */}
        <View className="mb-[6%]">
          <Text className="text-[#1F2937] text-base font-poppins-400regular mb-[3%]">
            Card
          </Text>
          <View className="border border-[#DCDCDC] rounded-lg bg-[#fff]">
            <Picker
              selectedValue={cardType}
              onValueChange={(itemValue) => setCardType(itemValue)}
              style={{ height: verticalScale(50), color: "#898989" }}
            >
              <Picker.Item label="Credit card" value="credit-card" />
              <Picker.Item label="Debit card" value="debit-card" />
              <Picker.Item label="Prepaid card" value="prepaid-card" />
            </Picker>
          </View>
        </View>

        {/* Card Number */}
        <CardNumberInput
          cardNumber={cardNumber}
          onCardNumberChange={setCardNumber}
        />

        {/* Card Holder Name */}
        <View className="mb-[6%]">
          <Text className="text-[#1F2937] text-base font-poppins-400regular mb-[3%]">
            Card holder name
          </Text>
          <TextInput
            className="border border-[#dcdcdc] rounded-lg px-[4%] py-[5%] text-base bg-white"
            placeholder="Enter name"
            placeholderTextColor="#898989"
            value={cardHolder}
            onChangeText={setCardHolder}
            autoCapitalize="words"
          />
        </View>

        {/* Expiry Date and CVV */}
        <CardExpiryAndCVV
          expiryDate={expiryDate}
          onExpiryDateChange={setExpiryDate}
          cvv={cvv}
          onCvvChange={setCvv}
        />
      </View>
      {/* Submit Button */}
      <View className="flex-1 pb-[1%]">
        <FormButton
          onPress={() => router.push("/provider/profile")}
          title="Save card"
        />
      </View>
    </View>
  );
}

import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../home/services/provider/details/CustomButton";
import { router } from "expo-router";

export default function PaymentChecklist() {
  const [cashReceived, setCashReceived] = useState(false);
  const [feedbackAsked, setFeedbackAsked] = useState(false);

  return (
    <View className="w-[90%] mt-[2%] mx-auto">
      {/* Confirm Cash */}
      <Pressable
        onPress={() => setCashReceived(!cashReceived)}
        className="flex-row items-center mb-[3%]"
      >
        <Ionicons
          name={cashReceived ? "checkbox" : "square-outline"}
          size={16}
          color="#6F6F6F"
          className=" mr-[2%] rounded"
        />
        <Ionicons
          name="cash-outline"
          size={16}
          color="#10B981"
          className="mr-[2%]"
        />
        <Text className="text-sm font-poppins-400regular text-[#1E1E1E">
          Confirm you’ve received Cash
        </Text>
      </Pressable>

      {/* Ask for Feedback */}
      {/* <Pressable
        onPress={() => setFeedbackAsked(!feedbackAsked)}
        className="flex-row items-center"
      >
        <Ionicons
          name={feedbackAsked ? "checkbox" : "square-outline"}
          size={16}
          color="#6F6F6F"
          className="mr-[2%]"
        />
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={16}
          color="#16A34A"
          className="mr-[2%]"
        />
        <Text className="text-sm font-poppins-400regular text-[#1E1E1E">
          Ask for feedback
        </Text>
      </Pressable> */}
      <View className=" ">
        <CustomButton
          onPress={() => router.replace("/provider/reviewForm")}
          agreeToTerms={cashReceived}
          title="Give Feedback"
          route="Home"
        />
      </View>
    </View>
  );
}

import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../components/adaptive/Adaptiveness";
import CustomButton from "../components/tabs/home/services/provider/details/CustomButton";
import { router } from "expo-router";

const WaitConfirmationScreen = () => {
  // Auto redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/myJobs");
    }, 3000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView className="flex-1 bg-[#f9f9f9]">
      <View className="flex-1 justify-center items-center px-[6%]">
        {/* Icon Container */}
        <View
          style={{ width: scale(72), height: verticalScale(72) }}
          className=" bg-[#319FCA] rounded-full justify-center items-center mb-[8%]"
        >
          <Ionicons name="warning" size={32} color="white" />
        </View>

        {/* Title */}
        <Text className="text-xl font-poppins-semiBold text-black text-center mb-[6%]">
          Wait for confirmation!
        </Text>

        {/* Description */}
        <Text className="text-sm font-poppins-400regular text-[#333333] text-center leading-6 mb-[15%] px-[5%]">
          Payment will be updated once service provider receive the hand cash.
        </Text>
        <View className="w-full ">
          <CustomButton
            title="Done"
            onPress={() => router.replace("/myJobs")}
          />
        </View>
      </View>
      {/* Spacer to push button to bottom */}
    </SafeAreaView>
  );
};

export default WaitConfirmationScreen;

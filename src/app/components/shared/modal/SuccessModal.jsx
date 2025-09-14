import React from "react";
import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import LottieView from "lottie-react-native";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";
import { router } from "expo-router";

const SuccessModal = ({ visible, onClose, modalHeader }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 justify-center items-center px-[8%]">
        <View className="bg-white  rounded-2xl w-[90%] max-w-sm items-center py-[8%] px-[6%]">
          {/* Success Icon Container */}

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            className="mb-[15%] mt-[10%] "
          >
            <LottieView
              source={require("../../../../../assets/animations/refundSuccess.json")}
              autoPlay
              loop={false}
              style={{
                width: scale(200),
                height: verticalScale(200),
              }}
            />
          </View>

          {/* Title */}
          <Text className="text-2xl font-poppins-bold  text-black mb-[3%] text-center">
            {modalHeader?.title || "Password Updated Successfully"}
          </Text>

          {/* Subtitle */}
          <Text className="text-xs font-poppins text-[#50555C] text-center mb-[8%] leading-5 px-[4%]">
            {modalHeader?.subtitle ||
              "Your new password is now active. You can sign in securely and continue exploring."}
          </Text>

          {/* Thank You Button */}
          <Pressable
            onPress={onClose}
            className="w-[85%] bg-black rounded-lg py-[4%] items-center"
          >
            <Text className="text-white font-poppinsBold text-base">
              Thank You
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
export default SuccessModal;

// ConfirmationModal.js
import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

export default function ConfirmationModal({
  visible,
  onClose,
  title,
  yesText = "Yes",
  noText = "No",
  onYes,
  onNo,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white rounded-2xl w-[85%] mx-[7.5%]">
          <View className="px-[6%] py-[8%]">
            <Text className="text-lg font-poppins-500medium text-gray-800 text-center mb-[8%]">
              {title}
            </Text>

            <View className="flex-row justify-between">
              <TouchableOpacity
                onPress={onYes}
                className="flex-1 mr-[3%] py-[4%] border border-red-500 rounded-lg"
              >
                <Text className="text-red-500 font-poppins-500medium text-center">
                  {yesText}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onNo}
                className="flex-1 ml-[3%] py-[4%] bg-blue-500 rounded-lg"
              >
                <Text className="text-white font-poppins-500medium text-center">
                  {noText}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const PaymentMethodModal = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-black/50">
        <View className="bg-white rounded-t-[6%] px-[6%] py-[8%] min-h-[45%]">
          {/* Header */}
          <Text className="text-xl font-poppins-bold text-[#111827] text-center mb-[8%]">
            Select Payment Method
          </Text>

          {/* Pay via App Option */}
          <TouchableOpacity className="bg-white border border-[#E5E7EB] rounded-2xl p-[5%] mb-[4%] flex-row items-center">
            <View className="bg-blue-500 rounded-xl p-[3%] mr-[4%]">
              <Ionicons name="card" size={24} color="white" />
            </View>
            <View className="flex-1">
              <Text className="font-poppins-semiBold text-base text-[#111827] mb-1">
                Pay via App
              </Text>
              <Text className=" font-poppins-400regular text-sm text-[#4B5563] ">
                Pay with your linked credit{"\n"}card or app wallet
              </Text>
            </View>
          </TouchableOpacity>

          {/* Pay Cash Option */}
          <TouchableOpacity
            onPress={() => router.replace("/shared/wait")}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-[5%] flex-row items-center"
          >
            <View className="bg-green-100 rounded-xl p-[3%] mr-[4%]">
              <Ionicons name="cash" size={24} color="#10B981" />
            </View>
            <View className="flex-1">
              <Text className="font-poppins-semiBold text-base text-[#111827] mb-1">
                Pay Cash
              </Text>
              <Text className="font-poppins-400regular text-sm text-[#4B5563]">
                Pay directly to the service{"\n"}provider at the time of service
              </Text>
            </View>
          </TouchableOpacity>

          {/* Bottom spacing */}
          <TouchableOpacity onPress={onClose}>
            <View className="border bg-white rounded-md mt-[3%] border-[#E5E7EB] py-[3%]  ">
              <Text className="text-[#111827] text-center font-poppins-500medium text-base ">
                {" "}
                Cancel
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentMethodModal;

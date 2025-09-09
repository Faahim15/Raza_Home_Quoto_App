import { View, Text, Modal, ScrollView, TouchableOpacity } from "react-native";
import ServiceTypes from "../ServiceTypes";
import { scale, verticalScale } from "../../../adaptive/Adaptiveness";
import Ratings from "../Ratings";
import ExperienceLevel from "../ExperienceLevel";
import Specializations from "../Specializations";
import ApplyFilterButton from "../FilterButton";
import PriceSlider from "../PriceInput";
import Availability from "../Availability";
import { Ionicons } from "@expo/vector-icons";

export default function UserFilterModal({ visible, onClose }) {
  return (
    <View className="flex-1 bg-[#fff]">
      <ScrollView contentContainerStyle={{ paddingBottom: verticalScale(40) }}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={onClose}
        >
          <View className="bg-[#fff] border border-[#dcdcdc] rounded-lg ml-[5%] mt-[1%] w-[90%]">
            {/* Close Icon */}
            <TouchableOpacity
              onPress={onClose}
              className="absolute top-3 right-3 z-10"
            >
              <Ionicons name="close" size={24} color="#6B7280" />
            </TouchableOpacity>

            <View className="px-[6%] mt-[3%]">
              <ServiceTypes />
            </View>
            <View className="px-[6%] mt-[3%]">
              <Text className="font-poppins-semiBold text-base text-[#6B7280]">
                Availability
              </Text>
              <Availability />
            </View>
            <View className="px-[6%] mt-[3%]">
              <Text className="font-poppins-semiBold text-base text-[#6B7280]">
                Rating
              </Text>
              <Ratings defaultValue={2} />
            </View>
            <View className="px-[6%] mt-[3%]">
              {/* <Text className="font-poppins-semiBold text-base text-[#6B7280]">
                Price
              </Text> */}
              <PriceSlider />
              <View className="mt-[12%]">
                <ExperienceLevel />
              </View>
              <Specializations />
              <ApplyFilterButton onClose={onClose} />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

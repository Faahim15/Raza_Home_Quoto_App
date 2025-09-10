import { View, Text } from "react-native";
import CustomTitle from "../components/shared/CustomTitle";
import Summary from "../components/tabs/home/services/provider/details/Summary";
import CustomButton from "../components/tabs/home/services/provider/details/CustomButton";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import SuccessModal from "../components/shared/modal/SuccessModal";
export default function BookingDetailsScreen() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
        router.push("/home");
      }, 3000); // 3 seconds

      return () => clearTimeout(timer); // cleanup
    }
  }, [showModal]);

  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="px-[5%]">
        <CustomTitle title="Book Jackson" />
      </View>

      <View className="px-[6%]">
        <View className="mt-[3%] mb-[2%]">
          <Text className="font-poppins-500medium  text-base  text-[#5C5F62]">
            Review Summary
          </Text>
        </View>
        <Summary />
      </View>
      <View className="px-[6%]">
        <CustomButton onPress={() => setShowModal(true)} title="Book" />
      </View>
      <SuccessModal
        modalHeader={{
          title: "Booking Confirmed 🎉",
          subtitle: "You’ve successfully booked this provider.",
        }}
        visible={showModal}
      />
    </View>
  );
}

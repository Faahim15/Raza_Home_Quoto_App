import { View, Image } from "react-native";
import CustomHeader from "../components/onboarding/CustomHeader";
import CustomButton from "../components/onboarding/CustomButton";
import Indicators from "../components/onboarding/Indicators";
import { router } from "expo-router";

export default function QuoteCompareScreen() {
  return (
    <View className="flex-1 bg-[#F9FAFB]">
      <Indicators activeIndex={1} />
      <View className=" relative justify-center items-center ">
        {/* Background Image */}
        <Image
          source={require("../../../assets/images/onboarding/bgImage.png")}
          className="w-[79%] h-[66%] rounded-3xl "
          resizeMode="cover"
        />

        {/* Onboarding Image on top */}
        <Image
          source={require("../../../assets/images/onboarding/onboarding2.png")}
          className="absolute w-[70%] h-[93%] top-[-4%] " // Adjust positioning as needed
          resizeMode="contain"
        />
      </View>

      <CustomHeader
        title="Compare Quotes"
        subtitle="Receive multiple quotes, check provider profiles, and choose based on reviews, pricing, and availability."
      />
      <CustomButton
        onPress={() => router.push("/onboarding/services")}
        title="Next"
      />
      <CustomButton
        title="Skip to home"
        backgroundColor="#fff"
        color="#175994"
        marginTop={16}
        onPress={() => router.push("/onboarding/home")}
      />
    </View>
  );
}

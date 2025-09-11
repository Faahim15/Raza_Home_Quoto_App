import { View, Text } from "react-native";
import { useEffect } from "react";
import CustomTitle from "../components/shared/services/CustomTitle";
import LottieView from "lottie-react-native";
import { scale, verticalScale } from "../components/adaptive/Adaptiveness";
import { router } from "expo-router";
export default function VerifyScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.back();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 px-[6%] bg-[#F9F9F9]">
      <CustomTitle title="Verfication" />
      <View className="flex-1 justify-center items-center">
        <View className=" items-center  ">
          <LottieView
            source={require("../../../assets/animations/success.json")}
            autoPlay
            loop={true}
            style={{ width: scale(200), height: verticalScale(157) }}
          />
        </View>
        <Text className="font-poppins-400regular mt-[5%] text-center text-base  text-[#171717] ">
          You're a verified provider in the QUOTO Community!
        </Text>
      </View>
    </View>
  );
}

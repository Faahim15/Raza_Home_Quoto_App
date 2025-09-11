import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";

import { scale, verticalScale } from "../components/adaptive/Adaptiveness";
import UserSelectionButtons from "../components/onboarding/ChoiceButton";
import XStyle from "../util/styles";
import ServiceCards from "../components/shared/services/ServiceCards";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
export default function OnboardingHomeScreen() {
  return (
    <View className="flex-1 bg-[#F9FAFB] ">
      <ScrollView>
        {/* Header section */}

        <View className="justify-center mx-[6%] mt-[1%] ">
          <View className="flex-row justify-between ">
            <Text className="font-poppins-bold text-base">
              Welcome to Quoto!
            </Text>

            <View
              style={{ width: scale(30), height: verticalScale(30) }}
              className="rounded-full items-center justify-center border border-[#175994] "
            >
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#175994"
              />
            </View>
          </View>
          <Text className="text-[#4D4D4D] font-poppins-400regular text-justify w-[80%] text-xs ">
            Connecting homeowners with trusted local pros - fast, simple, and
            reliable
          </Text>
        </View>

        {/* Header section ends here  */}

        {/* Today's Jobs section starts here */}
        <Text className="font-poppins-semiBold text-base text-[#6B7280] mt-[6%] mx-[6%] ">
          Today's Jobs
        </Text>

        <ServiceCards />

        {/* Today's Jobs ends here */}

        {/* Active Jobs section */}
        <Text className=" mt-[3%] font-poppins-semiBold text-base text-[#6B7280] mx-[6%] ">
          Active Jobs
        </Text>

        <ServiceCards />

        {/* Active Jobs section ends here */}

        {/* User Selection section ends here */}
      </ScrollView>
      {/* User Selection section starts here */}
      <View
        style={[XStyle.lightShadow, XStyle.borderStyle]}
        className=" mt-[2%] justify-center items-center border border-[#D4E0EB] px-[6.4%] py-[9%]"
      >
        <View className="flex-row gap-[4%]">
          <UserSelectionButtons
            onPress={() => {
              router.push("/signIn");
            }}
            title="Join as Client"
          />
          <UserSelectionButtons
            title="Join as Provider"
            onPress={() => router.push("/provider/auth/signUp")}
            backgroundColor="#fff"
            textColor="#175994"
          />
        </View>

        {/* back to onboardingButton */}

        <View className="">
          <Pressable
            onPress={() => {
              router.replace("/onboarding/welcome");
            }}
            style={{
              width: scale(280),
              height: scale(42),
            }}
            className="mt-[4%] justify-center items-center border border-[#EF4444] rounded-md "
          >
            <Text className="font-poppins-500medium text-[#EF4444] text-base text-center">
              Back to onboarding
            </Text>
          </Pressable>
        </View>
        {/* User Selection section starts here */}
      </View>
    </View>
  );
}

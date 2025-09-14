// import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import CustomTitle from "../components/shared/CustomTitle";
import RatingDropdown from "../components/shared/review/RatingDropdown";
import WriteBox from "../components/shared/review/WriteBox";
import CustomButton from "../components/tabs/home/services/provider/details/CustomButton";
import { router } from "expo-router";
export default function ReviewFormScreen() {
  return (
    <View className="flex-1 bg-[#f9f9f9]">
      <View className="px-[5%]">
        <CustomTitle title="Review" />
      </View>
      <View className="mt-[3%] px-[5%]">
        <Text className="font-poppins-500medium text-base text-[#5C5F62]">
          How was your experience with Jackson?
        </Text>
      </View>

      <RatingDropdown />

      <WriteBox />

      <View className="flex-1 justify-end pb-[25%] px-[5%]">
        <CustomButton title="Done" onPress={() => router.replace("/myJobs")} />
      </View>
    </View>
  );
}

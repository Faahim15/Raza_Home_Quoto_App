import { Text, View } from "react-native";
import Notification from "../components/tabs/profile/Notification";
import CustomTitle from "../components/shared/services/CustomTitle";
import CustomButton from "../components/tabs/home/services/provider/details/CustomButton";
import { router } from "expo-router";
export default function NotificationScreen() {
  return (
    <View className="flex-1 px-[6%] bg-[#f9f9f9] ">
      <View>
        <CustomTitle title="Notification" />
      </View>
      <View className="mt-[5%]">
        <Notification title="General notification" />
        <Notification title="Sound" />
        <Notification title="Vibrate" />
        <Notification title="New Service" />
        <Notification title="Payment" />
      </View>
      <View className="flex-1 px-[1%] mb-[20%] justify-end">
        <CustomButton onPress={() => router.back()} title="Save" />
      </View>
    </View>
  );
}

import { View } from "react-native";
import CustomHeader from "../../components/auth/CustomHeader";
import TimeRangePicker from "../../components/provider/auth/TimeRangePicker";
import FormButton from "../../components/auth/FormButton";
import { router } from "expo-router";

export default function WorkingHoursScreen() {
  return (
    <View className="flex-1 bg-white">
      <CustomHeader title="Your" nestedTitle="working hours" />
      <TimeRangePicker />
      <View className=" flex-1 px-[2%]">
        <FormButton
          onPress={() => router.replace("/provider/auth/signIn")}
          title="Next"
        />
      </View>
    </View>
  );
}

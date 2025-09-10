import { Text, View } from "react-native";
import CustomTitle from "../components/shared/CustomTitle";
import JobSummary from "../components/tabs/jobs/JobSummary";
import CustomButton from "../components/tabs/home/services/provider/details/CustomButton";
import { router } from "expo-router";
export default function JobSummaryScreen() {
  return (
    <View className="flex-1 px-[6%] bg-[#F9F9F9]">
      <View>
        <CustomTitle title="Post a Job" />
      </View>
      <View>
        <Text className="font-poppins-500medium text-base ">
          Review Summary
        </Text>
        <JobSummary />
      </View>
      <View>
        <CustomButton
          title="Post your job"
          onPress={() => router.replace("/home")}
        />
      </View>
    </View>
  );
}

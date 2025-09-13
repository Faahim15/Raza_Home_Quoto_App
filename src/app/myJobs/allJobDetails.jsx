import { ScrollView, Text, View } from "react-native";
import CustomTitle from "../components/shared/services/CustomTitle";

import XStyle from "../util/styles";
import { scale, verticalScale } from "../components/adaptive/Adaptiveness";
import BotttomButtons from "../components/shared/services/buttons/BottomButtons";
import CustomButton from "../components/shared/services/buttons/ServiceButton";
import { router, useLocalSearchParams } from "expo-router";
import servicesData from "../components/data/shared/ServicesData";
import JobInfo from "../components/tabs/myJobs/JobInfo";
export default function ServiceDetails() {
  const { serviceId } = useLocalSearchParams();
  const service = servicesData.find((s) => s.id.toString() === serviceId);

  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="flex-1 mb-[2%]  px-[6%] bg-[#F9F9F9]">
        <CustomTitle title={service.serviceType} />
        <ScrollView
          contentContainerStyle={{ paddingBottom: verticalScale(40) }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <JobInfo serviceData={service} />
          </View>
          {/* {showCompleteJob && (
            <View className="mt-[8%] ">
              <ActionButton route="ReviewFormScreen" title="Complete Job" />
            </View>
          )} */}
        </ScrollView>
      </View>

      <View className="px-[6%] pb-[18%]">
        <CustomButton
          onPress={() => router.push("/jobs/jobForm")}
          title="Edit Job"
        />
      </View>
    </View>
  );
}

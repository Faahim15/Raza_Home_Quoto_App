import { View, ScrollView } from "react-native";
import CustomTitle from "../../components/shared/CustomTitle";
import JobSummary from "../../components/tabs/jobs/JobSummary";
import XStyle from "../../util/styles";
import BotttomButtons from "../../components/shared/services/buttons/BottomButtons";
import { scale, verticalScale } from "../../components/adaptive/Adaptiveness";
import { useLocalSearchParams } from "expo-router";
import serviceData from "../../components/data/provider/MyJobsData";
import { router } from "expo-router";
export default function QuotesRequestDetailScreen() {
  const { serviceId } = useLocalSearchParams();
  const item = serviceData.find((s) => s.id.toString() === serviceId);

  return (
    <View className="flex-1  bg-[#f9f9f9]">
      <View className="px-[6%]">
        <CustomTitle title={item.service} />
      </View>
      <ScrollView className="px-[6%]">
        <JobSummary />
      </ScrollView>
      <View
        className="flex-row gap-[6%] h-[14%]  border border-[#D8DCE0] justify-center items-center "
        style={[
          XStyle.shadowBox,
          { borderTopRightRadius: scale(20), borderTopLeftRadius: scale(20) },
        ]}
      >
        <BotttomButtons
          onPress={() => router.replace("/provider/myJobs")}
          backgroundColor="#fff"
          color="#18649F"
          borderColor="#18649F"
          title="Accept Offer"
        />
        <BotttomButtons
          onPress={() => router.replace("/provider/myJobs")}
          backgroundColor="#18649F"
          color="#fff"
          borderColor="#18649F"
          title="Updated Quote"
          path="UpdateQuoteScreen"
        />
      </View>
    </View>
  );
}

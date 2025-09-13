import { ScrollView, Text, View } from "react-native";
import CustomTitle from "../components/shared/services/CustomTitle";
import ProviderInfo from "../components/shared/services/JobDetails";
import XStyle from "../util/styles";
import { scale, verticalScale } from "../components/adaptive/Adaptiveness";
import BotttomButtons from "../components/shared/services/buttons/BottomButtons";
import { router, useLocalSearchParams } from "expo-router";
import QuoteReqData from "../components/data/jobs/QuotesData";
export default function JobDetails() {
  const { serviceId, showButtons } = useLocalSearchParams();
  const service = QuoteReqData.find((s) => s.id.toString() === serviceId);

  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="flex-1 mb-[2%]  px-[6%] bg-[#F9F9F9]">
        <CustomTitle title={service.serviceType} />
        <ScrollView
          contentContainerStyle={{ paddingBottom: verticalScale(40) }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <ProviderInfo showPrice={showButtons} serviceData={service} />
          </View>
        </ScrollView>
      </View>
      <View
        className="flex-row gap-[6%] h-[14%]  border border-[#D8DCE0] justify-center items-center "
        style={[
          XStyle.shadowBox,
          { borderTopRightRadius: scale(20), borderTopLeftRadius: scale(20) },
        ]}
      >
        <BotttomButtons
          onPress={() => router.replace("/myJobs")}
          backgroundColor="#fff"
          color="#EF4444"
          borderColor="#EF4444"
          title="Decline"
        />
        <BotttomButtons
          onPress={() => router.replace("/myJobs")}
          backgroundColor="#18649F"
          color="#fff"
          borderColor="#18649F"
          title="Accept"
        />
      </View>
    </View>
  );
}

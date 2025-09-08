import { ScrollView, Text, View } from "react-native";
import CustomTitle from "../components/shared/services/CustomTitle";
import ProviderInfo from "../components/shared/services/JobDetails";
import ActionButton from "../components/shared/services/buttons/ActionButton";
import XStyle from "../util/styles";
import { scale, verticalScale } from "../components/adaptive/Adaptiveness";
import BotttomButtons from "../components/shared/services/buttons/BottomButtons";
import CustomButton from "../components/shared/services/buttons/ServiceButton";
import { useLocalSearchParams } from "expo-router";
import servicesData from "../components/data/shared/ServicesData";
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
            <ProviderInfo serviceData={service} />
          </View>
          {/* {showCompleteJob && (
            <View className="mt-[8%] ">
              <ActionButton route="ReviewFormScreen" title="Complete Job" />
            </View>
          )} */}
        </ScrollView>
      </View>
      {/* {showButtons && (
        <View
          className="flex-col gap-[6%]   border border-[#D8DCE0]  "
          style={[
            XStyle.shadowBox,
            {
              borderTopRightRadius: scale(20),
              borderTopLeftRadius: scale(20),
              height: verticalScale(verticalHeight),
            },
          ]}
        >
          <View className="flex-row gap-[6%]  justify-center overflow-hidden items-center ">
            <BotttomButtons
              path="ContractorBottomTabs"
              backgroundColor="#fff"
              color="#EF4444"
              borderColor="#EF4444"
              title="Cancel"
              width={width}
            />
            <BotttomButtons
              path={path}
              backgroundColor="#fff"
              color="#175994"
              borderColor="#175994"
              title={titleText}
              width={width}
            />
          </View>
          {titleText === "Accept" && (
            <View className="px-[3%]">
              <CustomButton route="UpdateQuoteScreen" title="Update Quote" />
            </View>
          )}
        </View>
      )} */}
      {/* {AllReq && (
        <View className="px-[6%] pb-[8%]">
          <CustomButton route="JobFormScreen" title="Edit Job" />
        </View>
      )} */}
    </View>
  );
}

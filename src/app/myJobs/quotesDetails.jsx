import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { scale } from "../components/adaptive/Adaptiveness";
import QuoteReqData from "../components/data/jobs/QuotesData";
import XStyle from "../util/styles";
import BotttomButtons from "../components/shared/services/buttons/BottomButtons";
import { router, useLocalSearchParams } from "expo-router";
import CustomTitle from "../components/shared/services/CustomTitle";
import QuoteReqDetails from "../components/tabs/myJobs/QuoteReqDetails";
export default function QuoteDetails() {
  const { serviceId } = useLocalSearchParams();

  const item = QuoteReqData.find((s) => s.id.toString() === serviceId);

  return (
    <View className="flex-1 bg-[#f9f9f9]">
      <View className="px-[4%]">
        <CustomTitle title="Quote Details" />
      </View>
      <ScrollView>
        <QuoteReqDetails item={item} />
      </ScrollView>
      <View
        className="flex-row gap-[6%] h-[14%]  border border-[#D8DCE0] justify-center items-center "
        style={[
          XStyle.shadowBox,
          { borderTopRightRadius: scale(20), borderTopLeftRadius: scale(20) },
        ]}
      >
        <BotttomButtons
          onPress={() => router.back()}
          backgroundColor="#fff"
          color="#EF4444"
          borderColor="#EF4444"
          title="Decline"
        />
        <BotttomButtons
          onPress={() => router.back()}
          backgroundColor="#18649F"
          color="#fff"
          borderColor="#18649F"
          title="Accept"
        />
      </View>
    </View>
  );
}

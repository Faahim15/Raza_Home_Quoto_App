import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { scale } from "../components/adaptive/Adaptiveness";
import QuoteReqData from "../components/data/jobs/QuotesData";
import XStyle from "../util/styles";
import { router, useLocalSearchParams } from "expo-router";
import CustomTitle from "../components/shared/services/CustomTitle";
import QuoteProgressDetails from "../components/tabs/myJobs/QuoteProgressDetails";
import PaymentMethodModal from "../components/shared/modal/PaymentMethodModal";
import { verticalScale } from "../components/adaptive/Adaptiveness";
import { useState } from "react";
import PayButton from "../components/tabs/myJobs/PayButton";
import Feedback from "../components/tabs/myJobs/Feedback";
export default function ProgressQuote() {
  const { serviceId } = useLocalSearchParams();
  const [showPayment, setShowPayment] = useState(false);
  const item = QuoteReqData.find((s) => s.id.toString() === serviceId);

  const renderButton =
    item.status === "Completed" ? (
      <Feedback onPress={() => router.push("/shared/reviewForm")} item={item} />
    ) : (
      <PayButton item={item} onPress={() => setShowPayment(true)} />
    );

  return (
    <View className="flex-1 bg-[#f9f9f9]">
      <View className="px-[4%]">
        <CustomTitle title="Quote Details" />
      </View>
      <ScrollView>
        <QuoteProgressDetails showStatus={true} item={item} />
      </ScrollView>
      <View
        className="flex-row w-full gap-[6%] h-[10%]  border border-[#D8DCE0] justify-center items-center "
        style={[
          XStyle.shadowBox,
          {
            borderTopRightRadius: scale(20),
            width: "100%",
            borderTopLeftRadius: scale(20),
          },
        ]}
      >
        {renderButton}
      </View>
      <PaymentMethodModal
        visible={showPayment}
        onClose={() => setShowPayment(false)}
      />
    </View>
  );
}

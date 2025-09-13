import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { scale } from "../components/adaptive/Adaptiveness";
import QuoteReqData from "../components/data/jobs/QuotesData";
import XStyle from "../util/styles";
import { router, useLocalSearchParams } from "expo-router";
import CustomTitle from "../components/shared/services/CustomTitle";
import QuoteReqDetails from "../components/tabs/myJobs/QuoteReqDetails";
import PaymentMethodModal from "../components/shared/modal/PaymentMethodModal";
import { verticalScale } from "../components/adaptive/Adaptiveness";
import { useState } from "react";
export default function ProgressQuote() {
  const { serviceId } = useLocalSearchParams();
  const [showPayment, setShowPayment] = useState(false);
  const item = QuoteReqData.find((s) => s.id.toString() === serviceId);
  const serviceColors = {
    "TV repair and Installation": "bg-[#319FCA]",
    "AC Repair and Maintenance": "bg-[#FF6B6B]",
    "Plumbing Services": "bg-[#10B981]",
    "Electrical Repair": "bg-[#8B5CF6]",
  };
  return (
    <View className="flex-1 bg-[#f9f9f9]">
      <View className="px-[4%]">
        <CustomTitle title="Quote Details" />
      </View>
      <ScrollView>
        <QuoteReqDetails showStatus={true} item={item} />
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
        <TouchableOpacity
          onPress={() => setShowPayment(true)} //navigation.navigate("WaitConfirmationScreen")
          style={{ width: "100%", height: verticalScale(40) }}
          className={` justify-center items-center  mt-[3%] rounded-md py-[2%] px-[2%] ${serviceColors[item?.serviceType] || "bg-[#0054A5]"} `}
        >
          <Text className=" font-poppins-bold   text-white text-base ">
            Pay Now
          </Text>
        </TouchableOpacity>
      </View>
      <PaymentMethodModal
        visible={showPayment}
        onClose={() => setShowPayment(false)}
      />
    </View>
  );
}

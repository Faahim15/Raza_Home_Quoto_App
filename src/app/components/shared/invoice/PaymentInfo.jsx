import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { paymentIcon } from "../../../../../assets/svg/icons";
import BreakDown from "./BreakDown";

export default function PaymentInfo() {
  return (
    <View className="px-[6%]">
      <View className="flex-row pt-[2%]  justify-between">
        <SvgXml xml={paymentIcon} height={24} width={18} />
        <Text className="font-poppins-semiBold text-base text-[#1F2937] ">
          Payment Information
        </Text>
      </View>
      <View className="gap-[2%] pt-[1%]">
        <BreakDown color="#16A34A" title="Amount Paid" price="$226.00" />
        <BreakDown title="Payment Method" price="Paid through app" />
        <BreakDown
          color="#16A34A"
          bgColor="#DCFCE7"
          title="Status"
          price="Paid in Full"
        />
      </View>
    </View>
  );
}

import { View, Image, Text } from "react-native";
import XStyle from "../../../../../../util/styles";
import { scale, verticalScale } from "../../../../../adaptive/Adaptiveness";
import { Ionicons } from "@expo/vector-icons";
export default function Summary() {
  return (
    <View className="justify-end " style={XStyle.shadowBox}>
      <View
        style={{ borderBottomColor: "#CACACA" }}
        className="flex-row border-b pb-[4%] items-center justify-between"
      >
        <Text className="font-poppins-semiBold  text-base text-[#565656]">
          Jackson
        </Text>
        <Image
          style={{ width: scale(62), height: verticalScale(70) }}
          source={require("../../../../../../../../assets/images/home/electrician/electrician3.png")}
        />
      </View>
      {/* Service Type */}
      <View
        style={{ borderBottomColor: "#CACACA" }}
        className="flex-row border-b pb-[2%] justify-between mt-[3%] "
      >
        <View className="flex-col pt-[5%] gap-[12%]">
          <Text className="font-poppins-500medium text-xs text-[#919191] ">
            Service Type
          </Text>
          <Text className="font-poppins-semiBold text-xs text-[#565656] ">
            Price
          </Text>
        </View>
        <View className="flex-col gap-[8%] ">
          <View className="flex-row">
            <Ionicons name="star" size={12} color="#F59E0B" />
            <Text className="font-poppins-500medium text-xs text-[#F59E0B]">
              {" "}
              4.8
            </Text>
            <Text className="font-poppins-400regular text-xs text-[#18649F]">
              {" "}
              (8 Review)
            </Text>
          </View>
          <Text className="font-poppins-semiBold text-xs text-[#565656]">
            Electrician
          </Text>
          <Text className="font-poppins-500medium text-xs text-[#919191]">
            $20/hr
          </Text>
        </View>
      </View>

      <View className="flex-col w-full overflow-hidden">
        <View className="flex-col gap-[6%] mt-[3%]">
          <Text className="font-poppins-500medium text-xs text-[#5C5F62]">
            Job Details
          </Text>
          <Text className="font-poppins-400regular text-justify text-xs text-[#5C5F62] ">
            Need TV repair and wall-mount installation. TV and bracket already
            available.
          </Text>
        </View>
        <View className="flex-row mt-[3%] w-[70%] gap-[25%] ">
          <Text className="font-poppins-semiBold text-xs text-[#6B7280]">
            Address
          </Text>
          <Text className="font-poppins-400regular text-justify overflow-hidden text-xs text-[#565656]">
            Street no. 23 Ouch west road Alibagh, Alibagh, Ouch, 18750, Pakistan
          </Text>
        </View>
        {/* Booking Date */}
        <View className="flex-row mt-[3%] justify-between ">
          <Text className="font-poppins-semiBold text-xs text-[#6B7280]">
            Booking date
          </Text>
          <Text className="font-poppins-400regular text-justify overflow-hidden text-xs text-[#565656]">
            December 23, 2023
          </Text>
        </View>
        {/* Booking hours */}
        <View className="flex-row mt-[3%] justify-between ">
          <Text className="font-poppins-semiBold text-xs text-[#6B7280]">
            Booking Hours
          </Text>
          <Text className="font-poppins-400regular text-justify overflow-hidden text-xs text-[#565656]">
            10:00 AM
          </Text>
        </View>
      </View>
    </View>
  );
}

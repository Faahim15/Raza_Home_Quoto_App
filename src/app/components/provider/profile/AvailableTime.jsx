import { View, Text } from "react-native";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";

export default function AvailableTime({ label, time }) {
  return (
    <View>
      <Text className="font-poppins-500medium text-sm text-[#6B7280]">
        {label}
      </Text>
      <View
        style={{ width: scale(154), height: verticalScale(50) }}
        className=" justify-center items-center rounded-md mt-[1%] border  border-[#DCDCDC] bg-white "
      >
        <Text className="font-poppins-400regular text-sm text-[#6B7280] ">
          {time}
        </Text>
      </View>
    </View>
  );
}

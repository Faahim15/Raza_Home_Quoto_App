import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import XStyle from "../../../util/styles";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";
const ProfileMenuItem = ({ iconName, label, onPress, color = "#565656" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="border mb-[3%] flex-row justify-between rounded-md border-[#D4E0EB]"
      style={[
        XStyle.shadowBox,
        {
          flexDirection: "row",
          alignItems: "center",
          //   paddingVertical: scale(16),
          height: verticalScale(56),
        },
      ]}
    >
      <View className="flex-row items-center justify-center ">
        <Ionicons
          name={iconName}
          size={24}
          color="#333"
          style={{ marginRight: scale(16), width: scale(24) }}
        />
        <Text
          style={{ color: color }}
          className="font-poppins-500medium text-sm  "
        >
          {label}
        </Text>
      </View>
      <View
        style={{ width: scale(44), height: verticalScale(44) }}
        className=" bg-[#175994] rounded-md  items-center justify-center"
      >
        <Ionicons name="chevron-forward" size={24} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;

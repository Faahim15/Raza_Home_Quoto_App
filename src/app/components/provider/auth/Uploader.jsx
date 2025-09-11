import { View, Text } from "react-native";
import ServiceDocumentUpload from "../home/DoucumentUpload";

export default function Uploader({ title, subtitle }) {
  return (
    <View className="mt-[8%]">
      <View className="gap-[5%]">
        <Text className="font-poppins-semiBold text-[#111827] text-lg text-center">
          {title}
        </Text>
        <Text className="font-poppins text-center text-xs text-[#4B5563]">
          {subtitle}
        </Text>
      </View>
      <View className="mx-[6%]">
        <ServiceDocumentUpload content="Click to upload " />
      </View>
    </View>
  );
}

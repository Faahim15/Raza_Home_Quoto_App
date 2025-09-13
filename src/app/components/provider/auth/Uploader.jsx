import { View, Text } from "react-native";
import ServiceDocumentUpload from "../home/DoucumentUpload";
import LicenceHeader from "./LicenceHeader";

export default function Uploader({ title, subtitle }) {
  return (
    <View className=" mt-[8%]">
      <LicenceHeader title={title} subtitle={subtitle} />

      <ServiceDocumentUpload content="Click to upload " />
    </View>
  );
}

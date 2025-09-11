import { View, Text } from "react-native";
import CustomTitle from "../../components/shared/CustomTitle";
import VerifyHeader from "../../components/provider/auth/VerifyHeader";
import Uploader from "../../components/provider/auth/Uploader";

export default function licenceUpload() {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="mx-[6%]">
        <CustomTitle />
        <View className="mt-[21%]">
          <VerifyHeader
            title="Upload Your License and ID"
            subTitle="Please upload your valid business license and a clear photo of your government-issued ID."
          />
        </View>
        <View>
          <Uploader
            title="Upload Your Business License"
            subtitle="Supported File Types: PDF, JPG, PNG"
          />
          <Uploader
            title="Upload a clear photoe"
            subtitle="Supported File Types: PDF, JPG, PNG"
          />
        </View>
      </View>
    </View>
  );
}

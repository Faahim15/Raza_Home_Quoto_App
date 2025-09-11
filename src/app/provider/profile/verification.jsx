import { Text, View } from "react-native";
import CustomTitle from "../../components/shared/services/CustomTitle";
import ServiceDocumentUpload from "../../components/provider/profile/DocumentUpload";
import { Ionicons } from "@expo/vector-icons";
import FormButton from "../../components/auth/FormButton";
import { router } from "expo-router";
export default function ServiceVerificationScreen() {
  return (
    <View className="flex-1 bg-[#F9F9F9] ">
      <View className="px-[6%]  ">
        <CustomTitle title="Verification" />
        <View className="mt-[4%] gap-[5%]">
          <ServiceDocumentUpload
            title="Upload your services license"
            content="License.pdf"
          />
          <ServiceDocumentUpload
            title="Upload your Certification"
            content="Certificate.pdf"
          />
        </View>
      </View>
      <View className="flex-1 justify-end pb-[10%] ">
        {/* Info Text */}
        <View className="flex-row px-[6%] items-center mb-[8%]">
          <Ionicons
            name="information-circle-outline"
            size={16}
            color="#6B7280"
          />
          <Text className="font-poppins-400regular text-sm text-[#6B7280] ml-[2%]">
            We will be notify you once you reach the requirements
          </Text>
        </View>
        <FormButton
          onPress={() => router.replace("/shared/success")}
          title="Apply for Verification"
        />
      </View>
    </View>
  );
}

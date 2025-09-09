import { View } from "react-native";
import EmailField from "../components/auth/EmailField";
import CustomHeader from "../components/auth/CustomHeader";
import FormButton from "../components/auth/FormButton";
import { router } from "expo-router";
export default function ForgetPasswordScreen() {
  return (
    <View className="flex-1  bg-[#F9FAFB]  ">
      <CustomHeader
        title="Forget your"
        nestedTitle="Password?"
        subtitle="Enter your email address to reset your password."
      />
      <View className="mx-[6%] mt-[10%]">
        <EmailField label="Email" />
      </View>
      <FormButton
        title="Get Verification Code"
        onPress={() => router.push("/verfication")}
      />
    </View>
  );
}

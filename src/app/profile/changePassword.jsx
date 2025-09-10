import {
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import PasswordField from "../components/auth/PasswordField";
import CustomTitle from "../components/shared/services/CustomTitle";
import CustomButton from "../components/tabs/home/services/provider/details/CustomButton";
import { router } from "expo-router";

export default function ChangePasswordScreen() {
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <ScrollView
        className="flex-1 px-[6%] bg-[#F9F9f9]"
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <CustomTitle title="Change Password" />
        </View>

        <View className="flex-1 mt-[6%]">
          <PasswordField
            placeholder="Enter current Password"
            label="Current Password"
          />
          <PasswordField
            placeholder="Enter New Password"
            label="New Password"
          />
          <PasswordField
            placeholder="Enter Confirm new Password"
            label="Confirm new Password"
          />
        </View>
      </ScrollView>
      <View className="px-[6%] pb-[15%] bg-[#F9F9f9]">
        <CustomButton onPress={() => router.back()} title="Update Password" />
      </View>
    </KeyboardAvoidingView>
  );
}

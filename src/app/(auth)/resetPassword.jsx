import { View } from "react-native";
import CustomHeader from "../components/auth/CustomHeader";
import PasswordField from "../components/auth/PasswordField";
import FormButton from "../components/auth/FormButton";
import SuccessModal from "../components/shared/modal/SuccessModal";
import { useEffect, useState } from "react";
import { router } from "expo-router";

export default function ResetPasswordScreen() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
        router.push("/signIn");
      }, 3000); // 3 seconds

      return () => clearTimeout(timer); // cleanup
    }
  }, [showModal]);

  const handleSavePassword = () => {
    setShowModal(true);
  };

  return (
    <View className="flex-1 bg-[#F9FAFB]">
      <CustomHeader
        title="Now reset Your"
        nestedTitle="Password"
        subtitle="Enter the code that was sent to your email."
      />
      <View className="mx-[6.4%] mt-[8%]">
        <PasswordField label="New Password" />
        <PasswordField label="Confirm New Password" />
      </View>
      <FormButton title="Save Password" onPress={handleSavePassword} />
      <SuccessModal visible={showModal} />
    </View>
  );
}

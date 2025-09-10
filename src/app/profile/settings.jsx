import { Text, View, TouchableOpacity } from "react-native";
import CustomTitle from "../components/shared/services/CustomTitle";
import AccountOptionItem from "../components/tabs/profile/AccountOptions";
import { useState } from "react";
import ConfirmationModal from "../components/tabs/profile/ConfirmationModal";
import XStyle from "../util/styles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
export default function AccountSettingScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  function deleteAccountHandler() {
    setModalVisible(true);
  }

  const handleYes = () => {
    setModalVisible(false);
    router.replace("/signUp");
  };

  const handleNo = () => {
    setModalVisible(false);
  };
  return (
    <View className="flex-1 px-[6%] bg-[#F9F9F9]">
      <View>
        <CustomTitle title="Account Settings" />
      </View>
      <View className="mt-[6%]">
        <AccountOptionItem
          onPress={() => router.push("/profile/changePassword")}
          title="Change Password"
        />
        <AccountOptionItem
          onPress={() => router.push("/profile/terms")}
          title="Terms of Services"
        />
        <AccountOptionItem
          onPress={() => router.push("/profile/privacy")}
          title="Privacy Policy"
        />
        <AccountOptionItem
          onPress={() => router.push("/profile/about")}
          title="About us"
        />
        {/* <AccountOptionItem
          route="ChangePasswordScreen"
          color="#D7263D"
          title="Delete Account"
        /> */}
        <TouchableOpacity
          onPress={deleteAccountHandler}
          style={XStyle.shadowBox}
          className="flex-row mt-[3%] rounded-2xl border border-[#fff] justify-between"
        >
          <Text
            style={{ color: "#D7263D" }}
            className="font-poppins-400regular text-sm  "
          >
            Delete Account
          </Text>
          <Ionicons name="chevron-forward" size={18} color="#333333" />
        </TouchableOpacity>
        <ConfirmationModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          title="Do you want to delete your account?"
          yesText="Yes"
          noText="No"
          onYes={handleYes}
          onNo={handleNo}
        />
      </View>
    </View>
  );
}

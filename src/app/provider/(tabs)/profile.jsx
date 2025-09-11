import { Text, View, ScrollView } from "react-native";
import ContractorDetails from "../../components/provider/profile/ProviderDetails";
import ProfileMenuItem from "../../components/tabs/profile/ProfileMenuItem";
import LogoutItem from "../../components/tabs/profile/LogoutItem";
import { useState } from "react";
import ConfirmationModal from "../../components/tabs/profile/ConfirmationModal";
import { router } from "expo-router";
export default function ContractorProfileScreen() {
  function logoutHanlder() {
    setModalVisible(true);
    router.replace("/onboarding/loginChoice");
  }
  const [modalVisible, setModalVisible] = useState(false);

  const handleYes = () => {
    setModalVisible(false);
    // navigation.navigate("SignInScreen", { clientScreen: false });
  };

  const handleNo = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1 px-[6%] bg-[#F9F9F9]">
        {/* Contractor Details */}
        <ContractorDetails />
        {/* Profile information */}
        <View className="mt-[3%]">
          <View>
            <Text className="font-poppins-500medium text-lg text-[#565656] ">
              Profile information
            </Text>
            <View className="mt-[3%]">
              <ProfileMenuItem
                iconName="person-outline"
                label="Edit Profile"
                onPress={() => router.push("/profile/editProfile")}
              />
              <ProfileMenuItem
                iconName="briefcase-outline"
                label="Services"
                onPress={() => router.push("provider/profile/services")}
              />
              <ProfileMenuItem
                iconName="images-outline"
                onPress={() => router.push("provider/profile/projectGallery")}
                label="Project Gallery"
              />
              <ProfileMenuItem
                iconName="shield-checkmark-outline"
                onPress={() => router.push("provider/profile/verification")}
                label="Verification"
              />
            </View>
          </View>

          <View>
            <Text className="font-poppins-500medium text-lg text-[#565656] ">
              Subscription & payments
            </Text>
            <View className="mt-[3%]">
              <ProfileMenuItem
                iconName="card-outline"
                label="Payment method"
                onPress={() => router.push("provider/profile/payment")}
              />
              <ProfileMenuItem
                iconName="sync-circle-outline"
                label="Subscription"
                onPress={() => router.push("provider/profile/subscription")}
              />
              <ProfileMenuItem
                iconName="wallet-outline"
                label="Buy Credits"
                onPress={() => router.push("provider/profile/credits")}
              />
            </View>
          </View>

          <View>
            <Text className="font-poppins-500medium text-lg text-[#565656] ">
              General Preferences
            </Text>
            <View className="mt-[3%]">
              <ProfileMenuItem
                iconName="notifications-outline"
                label="Notification"
                onPress={() => router.push("/profile/notification")}
              />
              <ProfileMenuItem
                iconName="settings-outline"
                onPress={() => router.push("/profile/settings")}
                label="Account Settings"
              />
              <ProfileMenuItem
                iconName="help-circle-outline"
                onPress={() => router.push("/profile/support")}
                label="Help & support "
              />
              <LogoutItem onPress={logoutHanlder} />
              <ConfirmationModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                title="Do you want to log out?"
                yesText="Yes"
                noText="No"
                onYes={handleYes}
                onNo={handleNo}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

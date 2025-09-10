import { View, Text } from "react-native";
import CustomTitle from "../components/shared/services/CustomTitle";
import AvatarImagePicker from "../components/tabs/profile/AvatarImagePicker";
import InputField from "../components/tabs/profile/InputField";
import ProfileFormInputs from "../components/tabs/profile/FormInputs";
import CustomButton from "../components/tabs/home/services/provider/details/CustomButton";
import CountryPickerField from "../components/tabs/profile/CountryPicker";
import { router } from "expo-router";
export default function EditProfileScreen() {
  return (
    <View className=" px-[6%] flex-1 bg-[#F9F9F9]">
      <View>
        <CustomTitle title="Edit Profile" />
      </View>
      <View>
        <AvatarImagePicker />
      </View>
      <View className="mt-[5%]">
        <InputField
          placeholder="Enter your name.."
          label="Name"
          keyboardType="default"
        />
        <InputField
          placeholder="Enter your email.."
          label="Email"
          keyboardType="email-address"
        />
        <ProfileFormInputs />
        <CountryPickerField color="#5C5F62" />
      </View>
      <View className="flex-1 px-[0.5%] mb-[20%] justify-end">
        <CustomButton onPress={() => router.back()} title="Save" />
      </View>
    </View>
  );
}

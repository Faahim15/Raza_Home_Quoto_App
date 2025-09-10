import {
  Text,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import CustomTitle from "../components/shared/services/CustomTitle";
import LottieView from "lottie-react-native";
import { scale, verticalScale } from "../components/adaptive/Adaptiveness";
import InputField from "../components/tabs/profile/InputField";
import ActionButton from "../components/tabs/profile/ActionButton";
export default function SupportScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <View className="px-[6%] bg-[#f9f9f9]">
        <CustomTitle title="Help & support" />
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: "6%",
          backgroundColor: "#F9F9F9",
          paddingBottom: verticalScale(10),
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 items-center mt-[3%] justify-center">
          <LottieView
            source={require("../../../assets/animations/support.json")}
            autoPlay
            loop={false}
            style={{ width: scale(300), height: verticalScale(200) }}
          />
        </View>

        <View>
          <Text className="font-poppins-500medium text-base text-[#5C5F62] text-center">
            Hello, how can we assist you?
          </Text>

          <InputField
            placeholder="Enter the title of your issue"
            label="Title"
            keyboardType="default"
          />

          <View style={{ marginTop: verticalScale(12) }}>
            <Text className="font-poppins-400regular text-base text-[#5C5F62]">
              Write your issue here
            </Text>

            <TextInput
              className="text-black font-poppins-400regular bg-[#fff] border rounded-md border-[#CACACA] py-[14%] px-[2%] mt-[2%]"
              placeholder="Write here.."
              placeholderTextColor="#898989"
              multiline
              textAlignVertical="top"
            />
          </View>
        </View>

        <View className="mt-[3%] pb-[5%]">
          <ActionButton title="Send" />
          <ActionButton
            backgroundColor="#F9F9F9"
            borderColor="#0054A5"
            title="Live Chat"
            color="#0054A5"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

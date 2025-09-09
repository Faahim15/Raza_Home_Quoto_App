import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import ArrowBack from "../components/auth/ArrowBack";
import EmailField from "../components/auth/EmailField";
import PasswordField from "../components/auth/PasswordField";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import ShortMessage from "../components/auth/ShortMessage";
import { router } from "expo-router";
export default function SignInScreen() {
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  function clientProviderHandler() {
    router.replace("/home");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 bg-[#F9FAFB]">
          <ArrowBack />

          <View className="mt-[1.5%] justify-center items-center">
            <Text className="font-poppins-500medium text-2xl text-[#292929]">
              Welcome Back!
            </Text>
            <Text className="font-poppins-500medium text-2xl text-[#319FCA]">
              Let's Sign in
            </Text>
          </View>

          <View className="mx-[6%] mt-[10%]">
            <EmailField label="Email" />
            <PasswordField />
          </View>

          <View className="flex-row pl-[5.5%] pb-[6%] items-center">
            <TouchableOpacity
              onPress={() => setAgreeToTerms(!agreeToTerms)}
              className="mr-[3%]"
            >
              <Ionicons
                name={agreeToTerms ? "checkbox" : "square-outline"}
                size={16}
                color={agreeToTerms ? "#909090" : "#9CA3AF"}
              />
            </TouchableOpacity>
            <View className="w-[85%] flex-row justify-between">
              <Text className="text-sm pt-[1%] font-poppins-400regular text-[#000000]">
                Remember me
              </Text>
              <TouchableOpacity onPress={() => router.push("/forgetPassword")}>
                <Text className="text-base font-poppins-bold text-[#175994] underline">
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            className="bg-[#0054A5] mx-[6%] rounded-lg py-[4%]"
            onPress={clientProviderHandler}
          >
            <Text className="text-white text-center text-base font-poppins-semiBold">
              Sign In
            </Text>
          </TouchableOpacity>

          <ShortMessage
            title="Don't you have an account?"
            btnText="Sign Up"
            onPress={() => router.push("/signUp")}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { verticalScale } from "../../components/adaptive/Adaptiveness";
import TextField from "../../components/auth/TextField";
import EmailField from "../../components/auth/EmailField";
import PasswordField from "../../components/auth/PasswordField";
import ArrowBack from "../../components/auth/ArrowBack";
import LocationPicker from "../../components/auth/LocationPicker";
import { router } from "expo-router";
export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
  });

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <View className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : verticalScale(20)}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="h-auto"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: verticalScale(20) }}
        >
          <ArrowBack />

          {/* Welcome Section */}
          <View className="mt-[1.5%] justify-center items-center">
            <Text className="font-poppins-500medium text-2xl text-[#292929]">
              Welcome Here!
            </Text>
            <Text className="font-poppins-500medium text-2xl text-[#319FCA]">
              Create An Account.
            </Text>
            <Text className="font-poppins-500medium text-sm text-[#292929]">
              Fill In your Information.
            </Text>
          </View>

          {/* Form Section */}
          <View className="h-[55%] px-[6%] justify-between">
            <TextField
              color="#f9f9f9"
              label="Full Name"
              placeholder="Full name"
              IconName="person-outline"
            />
            <EmailField label="Email" />

            <LocationPicker />

            <PasswordField />

            {/* Confirm Password */}
            <View>
              <Text className="font-poppins-400regular text-base text-[#000] mb-[2%]">
                Confirm Password
              </Text>
              <View className="flex-row  bg-[#F9F9F9] border border-[#DCDCDC] rounded-md px-[4%] py-[3%]">
                <Ionicons
                  style={{ marginTop: verticalScale(10) }}
                  name="lock-closed-outline"
                  size={20}
                  color="#9CA3AF"
                />
                <TextInput
                  className="flex-1 font-poppins-400regular ml-[3%] text-sm bg-[#f9f9f9] text-black"
                  placeholder="Confirm password"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showConfirmPassword}
                  value={formData.confirmPassword}
                  onChangeText={(text) =>
                    handleInputChange("confirmPassword", text)
                  }
                  style={{ paddingTop: verticalScale(15) }}
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="ml-[2%]"
                >
                  <Ionicons
                    name={
                      showConfirmPassword ? "eye-outline" : "eye-off-outline"
                    }
                    size={20}
                    color="#9CA3AF"
                    style={{ paddingTop: verticalScale(12) }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View className="border-t border-[#dcdcdc]">
          {/* Terms and Conditions */}
          <View className="flex-row pl-[5.5%] mt-[1%]  items-center">
            <TouchableOpacity
              onPress={() => setAgreeToTerms(!agreeToTerms)}
              className="mr-[3%]"
            >
              <Ionicons
                name={agreeToTerms ? "checkbox" : "square-outline"}
                size={20}
                color={agreeToTerms ? "#909090" : "#9CA3AF"}
              />
            </TouchableOpacity>
            <Text className="text-sm font-poppins-400regular text-black">
              Agree with
              <Text className="text-[#909090]"> Terms and Conditions</Text>
            </Text>
          </View>
          {/* Bottom Section */}
          <View className="mb-[4%] px-[6%] mt-[2%]  justify-center">
            <TouchableOpacity
              className="bg-[#0054A5]  rounded-lg justify-center items-center py-[4%]"
              disabled={!agreeToTerms}
              style={{ opacity: agreeToTerms ? 1 : 0.6 }}
              onPress={() => router.push("provider/auth/signIn")}
            >
              <Text className="text-white text-center text-base font-poppins-semiBold">
                Sign up
              </Text>
            </TouchableOpacity>

            <View className="mt-[3%] flex-row gap-[0.5%] justify-center">
              <Text className="font-poppins-400regular text-sm text-black">
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("provider/auth/signIn");
                }}
              >
                <Text className="font-poppins-semiBold underline text-sm text-[#0054A5]">
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

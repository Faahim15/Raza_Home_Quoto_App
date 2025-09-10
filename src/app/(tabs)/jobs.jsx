import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "../components/tabs/home/services/provider/details/CustomButton";
import CustomTitle from "../components/shared/CustomTitle";
import { router } from "expo-router";

export default function PostJobScreen() {
  const [photos, setPhotos] = useState([]);

  const showImageOptions = () => {
    Alert.alert("Select Photo", "Choose how you want to add a photo", [
      {
        text: "Camera",
        onPress: () => takePhoto(),
      },
      {
        text: "Gallery",
        onPress: () => pickFromGallery(),
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission needed",
        "Camera permission is required to take photos"
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const newPhoto = {
        id: Date.now().toString(),
        uri: result.assets[0].uri,
      };

      setPhotos([...photos, newPhoto]);
    }
  };

  const pickFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: false,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const newPhoto = {
        id: Date.now().toString(),
        uri: result.assets[0].uri,
      };

      setPhotos([...photos, newPhoto]);
    }
  };

  const removePhoto = (photoId) => {
    setPhotos(photos.filter((photo) => photo.id !== photoId));
  };

  const handleContinue = () => {
    if (photos.length === 0) {
      Alert.alert("Please add at least one photo to continue");
      return;
    }
    Alert.alert("Continue", "Proceeding to next step...");
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]">
      {/* Header */}
      <View className="px-[6%]">
        <CustomTitle title="Post a job" />
      </View>

      <ScrollView className="flex-1 px-[5%] py-[5%]">
        {/* Title */}
        <Text className="text-base font-poppins-semiBold text-[#6B7280] mb-[5%]">
          Add Some Photos of the Job
        </Text>

        {/* Main Photo Upload Area */}
        <TouchableOpacity
          onPress={showImageOptions}
          className="w-full h-[40%] bg-gray-100 rounded-lg flex items-center justify-center mb-[5%] border-2 border-dashed border-gray-300"
        >
          <View className="bg-blue-500 rounded-full p-3 mb-[2%]">
            <Ionicons name="camera" size={24} color="white" />
          </View>
          <Text className="text-gray-600 text-center">Tap to add photos</Text>
        </TouchableOpacity>

        {/* Additional Photos Grid */}
        <View className="flex-row flex-wrap justify-between mb-[5%]">
          {photos.map((photo) => (
            <View key={photo.id} className="relative w-[30%] mb-[3%]">
              <Image
                source={{ uri: photo.uri }}
                className="w-full bg-gray-100 rounded-lg"
                style={{ aspectRatio: 1 }}
              />
              <TouchableOpacity
                onPress={() => removePhoto(photo.id)}
                className="absolute top-[5%] right-[5%] bg-white rounded-full p-1 shadow-md"
              >
                <Ionicons name="close" size={16} color="#666" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Info Text */}
        <View className="flex-row items-center mb-[8%]">
          <Ionicons name="bulb-outline" size={16} color="#f59e0b" />
          <Text className="font-poppins-400regular text-sm text-[#1F2937] ml-[2%]">
            Add photos of the job so workers get more quotes!
          </Text>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <View className="px-[5%] pb-[5%] pt-[3%] ">
        <CustomButton
          onPress={() => router.push("/jobs/jobForm")}
          title="Continue"
        />
      </View>
    </SafeAreaView>
  );
}

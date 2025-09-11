import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  Pressable,
  Dimensions,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";
import MapButton from "./MapButton";
import { router } from "expo-router";

const ServiceQuoteModal = ({ visible, selectedUser, onClose }) => {
  if (!selectedUser) return null;

  const item = selectedUser.service;

  const handleContact = () => {
    onClose();
    Alert.alert("Contact", `Contacting ${item.author}...`);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        onPress={onClose}
        style={{ width: scale(320) }}
        className="bg-white mr-[0.5%] justify-center mx-[10%] my-[50%] items-start  border border-[#D4E0EB]   px-[4.5%] pt-[2%]  rounded-xl shadow-sm overflow-hidden"
      >
        {/* Card Image */}
        <View className="w-full">
          <Image
            source={{ uri: item.image }}
            className="rounded-lg "
            style={{ height: verticalScale(160) }}
            resizeMode="cover"
          />
        </View>

        {/* Card Content */}
        <View className=" pt-[4%]">
          {/* Title */}
          <Text
            className="text-gray-900 font-poppins-500medium text-base mb-[2%]"
            numberOfLines={2}
          >
            {item.title}
          </Text>

          {/* Author */}
          <View className="flex-row items-center mb-[2%]">
            <Image
              source={{ uri: item.authorImage }}
              style={{ width: scale(16), height: verticalScale(16) }}
              className=" bg-gray-300 rounded-full mr-[2%]"
            />
            <Text className="font-poppins-400regular text-sm">
              by{" "}
              <Text className="font-poppins-400regular text-[#319FCA] text-sm ">
                {item.author}
              </Text>
            </Text>
          </View>

          {/* Service Type */}
          <View className="flex-row gap-[2%] items-center mb-[2%]">
            <Ionicons name="construct-outline" size={16} color="#6B7280" />
            <Text className="font-poppins-400regular text-sm text-[#6B7280] ">
              {item.service}
            </Text>
          </View>

          {/* Location and Time */}
          <View className="flex-row items-center">
            <Ionicons name="location-outline" size={16} color="#319FCA" />
            <Text className="text-gray-500 text-sm ml-[1%]"></Text>

            <Text className="font-poppins-400regular text-sm text-[#319FCA] ">
              {item.location}{" "}
              <Text className="text-[#6B7280]">| {item.time}</Text>
            </Text>
          </View>
        </View>
        <View className="flex-row gap-[4%] mt-[4%] mb-[4%]">
          <MapButton
            onPress={() => router.push("/provider/quote/updateQuote")}
            title="Update Quote"
          />
          <MapButton
            onPress={() => router.replace("/provider/myJobs")}
            borderColor="#175994"
            backgroundColor="#fff"
            title="Accept Offer"
            color="#175994"
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ServiceQuoteModal;

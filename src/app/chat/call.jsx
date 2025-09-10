import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const CallScreen = ({ navigation }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [callDuration, setCallDuration] = useState(148); // 02:28 in seconds

  // Format time to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Timer effect for call duration
  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSpeaker = () => {
    setIsSpeakerOn(!isSpeakerOn);
  };

  const handleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  const handleEndCall = () => {
    router.back();
    // Handle end call logic
  };

  return (
    <View className="flex-1 bg-[#F9F9F9]">
      {/* <StatusBar barStyle="dark-content" backgroundColor="#f3f4f6" /> */}

      {/* Main Content Area */}
      <View className="flex-1 bg-[#F9F9F9] justify-center items-center px-[5%]">
        {/* Logo Section */}
        <View className="items-center mb-[8%]">
          {/* Logo Circle */}
          <View className="w-[20%] aspect-square bg-white rounded-full justify-center items-center mb-[4%] shadow-lg">
            <View className="w-[70%] aspect-square bg-blue-500 rounded-full justify-center items-center">
              <Text className="text-white text-2xl font-bold">Q</Text>
            </View>
          </View>

          {/* App Name */}
          <Text className="text-gray-800 text-lg font-semibold tracking-wide">
            QUOTO
          </Text>

          {/* Call Duration */}
          <Text className="text-gray-500 text-base mt-[2%]">
            {formatTime(callDuration)}
          </Text>
        </View>
      </View>

      {/* Bottom Controls */}
      <View className="pb-[12%] px-[8%]">
        {/* Control Buttons Row */}
        <View className="flex-row justify-center items-center mb-[5%] gap-x-[7%]">
          {/* Mute Button */}
          <TouchableOpacity
            onPress={handleMute}
            className={`w-[15%] aspect-square rounded-full justify-center items-center ${
              isMuted ? "bg-red-500" : "bg-gray-300"
            }`}
          >
            <Ionicons
              name={isMuted ? "mic-off" : "mic"}
              size={24}
              color={isMuted ? "white" : "#6B7280"}
            />
          </TouchableOpacity>

          {/* Speaker Button */}
          <TouchableOpacity
            onPress={handleSpeaker}
            className={`w-[15%] aspect-square rounded-full justify-center items-center ${
              isSpeakerOn ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <Ionicons
              name={isSpeakerOn ? "volume-high" : "volume-medium"}
              size={24}
              color={isSpeakerOn ? "white" : "#6B7280"}
            />
          </TouchableOpacity>

          {/* Video Button */}
          <TouchableOpacity
            onPress={handleVideo}
            className={`w-[15%] aspect-square rounded-full justify-center items-center ${
              !isVideoOn ? "bg-red-500" : "bg-gray-300"
            }`}
          >
            <Ionicons
              name={isVideoOn ? "videocam" : "videocam-off"}
              size={24}
              color={!isVideoOn ? "white" : "#6B7280"}
            />
          </TouchableOpacity>
        </View>

        {/* Control Labels */}
        <View className="flex-row justify-center items-center mb-[5%] gap-x-[7%]">
          <View className="w-[15%] items-center">
            <Text className="text-gray-600 text-xs font-medium">Mute</Text>
          </View>
          <View className="w-[15%] items-center">
            <Text className="text-gray-600 text-xs font-medium">Speaker</Text>
          </View>
          <View className="w-[15%] items-center">
            <Text className="text-gray-600 text-xs font-medium">Video</Text>
          </View>
        </View>

        {/* End Call Button */}
        <View className="items-center">
          <TouchableOpacity
            onPress={handleEndCall}
            className="w-[18%] aspect-square bg-red-500 rounded-full justify-center items-center shadow-lg"
          >
            <Ionicons name="call" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CallScreen;

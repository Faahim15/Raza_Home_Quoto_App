import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { verticalScale } from "../components/adaptive/Adaptiveness";
import sampleMessages from "../components/data/chat/Messages";
import { router } from "expo-router";
const MessagesScreen = () => {
  const [messages, setMessages] = useState([]);

  // Mark message as read
  const markMessageAsRead = (messageId) => {
    // navigation.navigate("ChatScreen");
    router.push("/chat/displayChat");
  };

  const displayMessages = messages.length > 0 ? messages : sampleMessages;

  const renderMessageItem = ({ item }) => (
    <TouchableOpacity
      className="w-full mb-[4%] px-[4%]"
      onPress={() => markMessageAsRead(item.id)}
      activeOpacity={0.7}
    >
      <View
        className={` border  py-[3%] rounded-lg px-[3%] flex-row items-center ${item.isRead ? "bg-[#D1E8F1] border-[#D1E8F1] " : "bg-white"} border-[#d5d5d5] `}
      >
        {/* Avatar */}
        <View className="mr-3">
          <Image
            source={{ uri: item.avatar }}
            className="w-10 h-10 rounded-full"
            defaultSource={{ uri: "https://via.placeholder.com/40" }}
          />
        </View>

        {/* Message Content */}
        <View className="flex-1">
          <View className="flex-row justify-between items-start mb-[1%]">
            <Text className="text-[#333333] font-poppins-500medium text-base">
              {item.sender}
            </Text>
            <Text className="text-black font-poppins-400regular text-xs">
              {item.timestamp}
            </Text>
          </View>
          <Text className="text-[#767676] font-poppins-400regular text-xs">
            {item.message}
          </Text>
        </View>

        {/* Read Status */}
        <View className="ml-[2%]">
          {item.isRead ? (
            <View className="w-4 h-4 bg-blue-500 rounded-full items-center justify-center">
              <Text className="text-white text-xs">✓</Text>
            </View>
          ) : (
            <View className="w-4 h-4 bg-gray-300 rounded-full" />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-[#F9FAFB]">
      {/* <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" /> */}

      {/* Header */}
      <View className="bg-[#f9fafb] justify-center items-center py-[3%] ">
        <View className="flex-row justify-between items-center">
          <Text className="text-[#333333] text-center text-xl font-poppins-500medium ">
            Messages
          </Text>
        </View>
      </View>

      {/* Messages List */}
      <FlatList
        data={displayMessages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingVertical: verticalScale(16),
        }}
        showsVerticalScrollIndicator={false}
        refreshing={false}
        onRefresh={() => {
          // Implement refresh logic here
        }}
      />
    </View>
  );
};

export default MessagesScreen;

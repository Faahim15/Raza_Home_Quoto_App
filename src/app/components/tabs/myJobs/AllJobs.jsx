import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";
import servicesData from "../../data/shared/ServicesData";
import { router } from "expo-router";
const ServiceCard = ({ item, showAddress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: "/myJobs/allJobDetails",
          params: { serviceId: item.id },
        });
      }}
      style={{ width: scale(330), height: verticalScale(288) }}
      className="bg-white mr-[0.5%]  border border-[#D4E0EB] justify-center items-start px-[3%]  rounded-xl shadow-sm overflow-hidden"
    >
      {/* Card Image */}
      <View className="w-full">
        <Image
          source={{
            uri: item.image || "https://via.placeholder.com/300",
          }}
          className="rounded-xl"
          style={{ height: verticalScale(170) }}
          resizeMode="cover"
        />
      </View>

      {/* Card Content */}
      <View className="pt-[4%]">
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
            source={{
              uri: item.profileImage || "https://via.placeholder.com/300",
            }}
            style={{ width: scale(16), height: verticalScale(16) }}
            className=" bg-gray-300 rounded-full mr-[2%]"
          />
          <Text className="font-poppins-400regular text-sm">
            by{" "}
            <Text className="font-poppins-400regular text-[#319FCA] text-sm ">
              {item.providerName}
            </Text>
          </Text>
        </View>

        {/* Service Type and Price */}
        <View className="flex-row w-full justify-between items-center mb-[2%]">
          <View className="flex-row gap-[2%] items-center">
            <Ionicons name="construct-outline" size={16} color="#6B7280" />
            <Text className="font-poppins-400regular text-sm text-[#6B7280] ">
              {item.serviceType}
            </Text>
          </View>

          <Text
            className="font-poppins-400regular text-sm text-[#319FCA]"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.quoteOption === "Accept"
              ? item.price
              : "Requested a personalized..."}
          </Text>
        </View>

        {/* Location and Time */}

        <View className="flex-row items-center mb-[0%]">
          <Ionicons name="location-outline" size={16} color="#319FCA" />

          <Text className="font-poppins-400regular text-sm text-[#319FCA]">
            {item.address}
            <Text className="text-[#6B7280]"> | {item.timeAgo}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function AllJobs({ showAddress }) {
  return (
    <View className="mt-[2%] justify-center px-[2%]  items-start   ">
      <FlatList
        data={servicesData}
        renderItem={({ item }) => (
          <ServiceCard showAddress={showAddress} item={item} />
        )}
        keyExtractor={(item) => item.id}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: verticalScale(100),
          rowGap: verticalScale(12),
        }}
      />
    </View>
  );
}

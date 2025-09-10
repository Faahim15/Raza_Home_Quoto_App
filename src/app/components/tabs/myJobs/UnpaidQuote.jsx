import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";
import { Ionicons } from "@expo/vector-icons";
import servicesData from "../../data/shared/ServicesData";
// Updated ServiceItem component with navigation
const ServiceItem = ({ item }) => {
  const serviceColors = {
    "TV repair and Installation": "bg-[#319FCA]",
    "AC Repair and Maintenance": "bg-[#FF6B6B]",
    "Plumbing Services": "bg-[#10B981]",
    "Electrical Repair": "bg-[#8B5CF6]",
  };

  const handleServicePress = () => {
    // Navigate to details screen with service data
    // navigation.navigate("JobProviderInfoScreen", {
    //   serviceData: item,
    //   completeJob: false,
    // });
  };

  return (
    <View className="mx-[4%] mb-[4%]">
      {/* Service Type Banner - Made clickable */}
      <TouchableOpacity
        onPress={handleServicePress}
        style={{
          borderTopLeftRadius: scale(8),
          borderTopRightRadius: scale(8),
        }}
        className={`px-[3.5%] py-[3%] flex-row items-center justify-between ${
          serviceColors[item?.serviceType] || "bg-gray-500"
        }`}
      >
        <Text className="text-white font-poppins-400regular text-base">
          {item.serviceType}
        </Text>
        <TouchableOpacity onPress={handleServicePress}>
          <Ionicons name="arrow-forward" size={16} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>

      <View
        style={{
          borderBottomRightRadius: scale(8),
          borderBottomLeftRadius: scale(8),
        }}
        className="px-[4%] py-[4%] border border-[#DCDCDC] rounded-sm bg-white"
      >
        <View className="flex-row items-center gap-[4%]">
          {/* Profile Image */}
          <TouchableOpacity
            onPress={
              () => {}
              //   navigation.navigate("SelectedProviderDetailsScreen", {
              //     provider: item,
              //     showButtons: false,
              //   })
            }
            className="w-16 h-16 mb-[4%] rounded-full bg-blue-500 items-center justify-center"
          >
            <Image
              source={{
                uri: item.profileImage,
              }}
              className="w-full h-full rounded-full"
              resizeMode="cover"
            />
          </TouchableOpacity>

          {/* Provider Details */}
          <View className="flex-1">
            <Text className="font-poppins-500medium text-xl text-gray-800 mb-1">
              {item.providerName}
            </Text>

            {/* Rating */}
            <View className="flex-row items-center mb-[2%]">
              <Text className="text-[#F59E0B] font-poppins-400regular text-xs mr-1">
                ★ {item.rating}
              </Text>
              <Text className="font-poppins-400regular text-[#18649F] text-xs">
                ({item.reviews} Reviews)
              </Text>
            </View>

            {/* Price and Time */}
            <View className="flex-row justify-between">
              <Text className="font-poppins-400regular text-base text-[#1F2937]">
                Price
              </Text>
              <Text className="text-[#F59E0B] text-base font-poppins-semiBold">
                {item.price}
              </Text>
            </View>

            <View className=" ">
              <TouchableOpacity
                onPress={() => {}} //navigation.navigate("WaitConfirmationScreen")
                style={{ width: "full", height: verticalScale(40) }}
                className={` justify-center items-center  mt-[3%] rounded-md py-[2%] px-[2%] ${serviceColors[item?.serviceType] || "bg-[#0054A5]"} `}
              >
                <Text className=" font-poppins-bold   text-white text-base font-semibold">
                  Pay Hand Cash
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// Updated Services component with navigation prop
export default function UnpaidQuote() {
  const renderServiceItem = ({ item }) => {
    return <ServiceItem item={item} />;
  };

  return (
    <View className="mb-[18%]">
      <FlatList
        data={servicesData}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: scale(16),
          paddingBottom: scale(20),
        }}
      />
    </View>
  );
}

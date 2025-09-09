import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../../../adaptive/Adaptiveness";
const { width } = Dimensions.get("window");
import servicesData from "../../../data/shared/ServicesData";
const cardWidth = width * 0.45;

export default function ServiceProvider() {
  const renderItem = ({ item }) => (
    <View
      className="bg-white border border-[#D4E0EB] flex-1 justify-center items-center rounded-lg mr-3"
      style={{ width: scale(149), height: verticalScale(210) }}
    >
      <Image
        source={{ uri: item.profileImage }}
        resizeMode="contain"
        style={{
          width: scale(72),
          height: verticalScale(110),
        }}
      />
      <View className="flex-1 pb-[10%] justify-end ">
        <Text className="font-poppins-semiBold text-base text-[#565656]">
          {item.providerName}
        </Text>
        <Text className="font-poppins-500medium text-xs text-[#565656] mb-[1%]">
          {item.designation}
        </Text>

        <View className="flex-row items-center">
          <Ionicons name="star" size={14} color="#F59E0B" />
          <Text className="ml-1 font-poppins-500medium text-xs text-[#F59E0B]">
            {item.rating}
          </Text>
          <Text className="ml-auto font-poppins-400regular text-base text-[#18649F]">
            {/* {item.price} */}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProviderDetailsScreen", {
              showBook: true,
              provider: item,
            })
          }
          style={{ width: scale(124), height: verticalScale(25) }}
          className="bg-[#0054A5] border border-[#0054A5] mt-[3%] rounded-md py-[3%] px-[3%]"
        >
          <Text className="text-white text-center text-[10px] font-poppins-500medium">
            Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 mb-[2%] mt-[3%] mx-[6%]">
      <View className="flex-row justify-between">
        <Text className="font-poppins-semiBold text-base text-[#6B7280]">
          Popular Service Providers
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text className="font-poppins-semiBold text-base text-[#18649F]">
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 mt-[1.5%]">
        <FlatList
          horizontal
          data={servicesData}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

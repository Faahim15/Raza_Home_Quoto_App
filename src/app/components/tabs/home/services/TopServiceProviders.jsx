import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
import { scale, verticalScale } from "../../../adaptive/Adaptiveness";
import { ProvidersCategories } from "../../../data/shared/Categories";
const cardWidth = width * 0.45;
import { router } from "expo-router";
const ServiceCard = ({ item }) => {
  return (
    <View
      className="bg-white border border-[#D4E0EB] flex-1 justify-center items-center rounded-lg  mr-3"
      style={{ width: scale(149), height: verticalScale(210) }}
    >
      <Image
        source={{ uri: item.image }}
        resizeMode="contain"
        className=""
        style={{
          width: scale(72),
          height: verticalScale(110),
          paddingBottom: verticalScale(0),
        }}
      />
      <View className="flex-1 pb-[10%] justify-end ">
        <Text className=" font-poppins-semiBold text-base text-[#565656]">
          {item.name}
        </Text>
        <Text className="font-poppins-500medium text-xs text-[#565656] mb-[1%]">
          {item.occupation}
        </Text>

        <View className="flex-row items-center">
          <Ionicons name="star" size={14} color="#F59E0B" />
          <Text className="ml-1 font-poppins-500medium text-xs text-[#F59E0B]">
            {item.rating}
          </Text>
          {/* <Text className="ml-auto font-poppins-400regular text-base text-[#18649F]">
            {item.price}
          </Text> */}
        </View>

        <TouchableOpacity
          onPress={
            () => {}
            // navigation.navigate("ProviderDetailsScreen", {
            //   showBook: true,
            //   provider: item,
            // })
          }
          style={{ width: scale(124), height: verticalScale(25) }}
          className="bg-[#0054A5] border border-[#0054A5] mt-[3%] rounded-md py-[3%] px-[3%]"
        >
          <Text className=" font-poppins-500medium text-[10px] text-center text-white text-sm font-semibold">
            Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function TopServiceProvider() {
  return (
    <View className="flex-1 mb-[2%] mt-[3%]  mx-[6%] ">
      {ProvidersCategories.map((section, index) => (
        <View key={index} className="flex-1 mt-[2%] ">
          <View className="flex-row justify-between">
            <Text className="font-poppins-semiBold text-base text-[#6B7280] ">
              {section.title}
            </Text>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/services/showAllProvider",
                  params: { header: section.title },
                })
              }
            >
              <Text className="font-poppins-semiBold text-base text-[#18649F] ">
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 mt-[1.5%]">
            <FlatList
              data={section.data}
              renderItem={({ item }) => <ServiceCard item={item} />}
              keyExtractor={(item, idx) => idx.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              // contentContainerStyle={{ paddingHorizontal: 16 }}
            />
          </View>
        </View>
      ))}
    </View>
  );
}

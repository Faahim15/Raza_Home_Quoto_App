import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../../../../../adaptive/Adaptiveness";
import Reviews from "./Reviews";
import reviewData from "../../../../../data/shared/ReviewData";
export default function Testimonials() {
  const ratings = [3.5, 5, 2];
  const averageRating =
    reviewData.reduce((sum, review) => sum + review.rating, 0) /
    reviewData.length;
  return (
    <View className="mx-[6%] mt-[3%] ">
      <View className="flex-row justify-between ">
        <View className="flex-row">
          <Ionicons name="star" size={18} color="#F59E0B" />
          <Text className="font-poppins-semiBold text-base text-[#565656]">
            {" "}
            {averageRating.toFixed(2)}
          </Text>
        </View>
        <Text className="font-poppins-semiBold text-base text-[#565656]">
          {reviewData.length} Reviews
        </Text>
      </View>
      <View className="mt-[2%] ">
        <FlatList
          data={reviewData}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <Reviews data={item} />;
          }}
          contentContainerStyle={{ paddingRight: scale(16) }} // gap between items
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

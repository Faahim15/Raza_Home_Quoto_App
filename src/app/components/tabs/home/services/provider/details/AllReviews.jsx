import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../../../../../adaptive/Adaptiveness";
import Reviews from "./Reviews";
import reviewData from "../../../../../data/shared/ReviewData";

export default function AllReviews() {
  const averageRating =
    reviewData.reduce((sum, review) => sum + review.rating, 0) /
    reviewData.length;
  return (
    <View className=" mt-[3%] ">
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
      <View className="mt-[4%] justify-center items-center ">
        <FlatList
          data={reviewData}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
          renderItem={({ item }) => {
            return <Reviews width={320} data={item} />;
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: verticalScale(40) }}
        />
      </View>
    </View>
  );
}

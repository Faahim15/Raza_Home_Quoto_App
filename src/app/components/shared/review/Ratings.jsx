import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Ratings({ rating }) {
  const maxStars = 5;
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= Math.floor(rating)) {
      // Full star
      stars.push(
        <Ionicons
          key={i}
          name="star"
          size={48}
          color="#F59E0B"
          className="mr-1"
        />
      );
    } else if (i - rating < 1) {
      // Half star
      stars.push(
        <Ionicons
          key={i}
          name="star-half"
          size={48}
          color="#F59E0B"
          className="mr-1"
        />
      );
    } else {
      // Empty star
      stars.push(
        <Ionicons
          key={i}
          name="star-outline"
          size={48}
          color="#F59E0B"
          className="mr-1"
        />
      );
    }
  }

  return (
    <View className="bg-[#f9f9f9] flex-row justify-center items-center mt-[3%] ">
      {stars}
    </View>
  );
}

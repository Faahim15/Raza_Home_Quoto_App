import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function StarRating({ rating, size = 16, marginRight = 4 }) {
  const maxStars = 5;
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= Math.floor(rating)) {
      // Full star
      stars.push(
        <Ionicons
          key={i}
          name="star"
          size={size}
          color="#F59E0B"
          style={{ marginRight: marginRight }}
        />
      );
    } else if (i - rating < 1) {
      // Half star
      stars.push(
        <Ionicons
          key={i}
          name="star-half"
          size={size}
          color="#F59E0B"
          style={{ marginRight: marginRight }}
        />
      );
    } else {
      // Empty star
      stars.push(
        <Ionicons
          key={i}
          name="star-outline"
          size={size}
          color="#F59E0B"
          style={{ marginRight: marginRight }}
        />
      );
    }
  }

  return <View className="flex-row">{stars}</View>;
}

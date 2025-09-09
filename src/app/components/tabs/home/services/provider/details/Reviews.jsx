import { View, Image, Text } from "react-native";
import { scale, verticalScale } from "../../../../../adaptive/Adaptiveness";
import StarRating from "./StarRating";
import ReviewText from "./ReviewText";

export default function Reviews({ data, width = 250 }) {
  const { date, description, image, rating, reviewerName } = data;
  return (
    <View
      style={{ width: scale(width) }}
      className="border items-center justify-center border-[#D8DCE0] mr-[0.5%] rounded-lg bg-white px-[4%] py-[4%] "
    >
      <ReviewText text={description} />

      <View className="flex-row mt-[3%] justify-between  ">
        <View className="flex-row gap-[8%] ">
          <View className="mt-[5%]">
            <Image
              style={{
                height: verticalScale(24),
                width: scale(24),
                borderRadius: scale(12),
              }}
              source={
                image
                  ? { uri: image }
                  : require("../../../../../../../../assets/images/home/Avatar.png")
              }
            />
          </View>
          <View className="gap-[4%] ">
            <Text className="font-poppins-semiBold pt-[1%] text-sm text-[#565656]">
              {reviewerName}{" "}
            </Text>

            <Text className="font-poppins-500medium text-xs text-[#565656] ">
              {date}
            </Text>
          </View>
        </View>
        <View className="mt-[3%]">
          <StarRating size={14} marginRight={1} rating={rating} />
        </View>
      </View>
    </View>
  );
}

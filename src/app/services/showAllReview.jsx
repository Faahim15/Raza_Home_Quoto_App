import { View } from "react-native";
import CustomTitle from "../components/shared/services/CustomTitle";
import AllReviews from "../components/tabs/home/services/provider/details/AllReviews";

export default function AllReviewScreen() {
  return (
    <View className="flex-1 bg-[#f9f9f9] px-[6%] ">
      <View>
        <CustomTitle title="Review" />
      </View>
      <View>
        <AllReviews />
      </View>
    </View>
  );
}

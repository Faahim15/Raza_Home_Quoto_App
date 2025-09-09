import CustomTitle from "../components/shared/CustomTitle";
import ViewAllGallery from "../components/tabs/home/services/provider/details/ViewAllGallery";
import { View } from "react-native";
export default function ViewAllGalleryScreen() {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="flex-1 mx-[6%]">
        <CustomTitle title="Gallery" />
        <View className="mt-[3%]">
          <ViewAllGallery />
        </View>
      </View>
    </View>
  );
}

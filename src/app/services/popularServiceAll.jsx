import { View, ScrollView } from "react-native";
import CustomHeader from "../components/tabs/home/services/CustomHeader";
import TopServices from "../components/tabs/home/services/TopService";

export default function PopularServiceScreen() {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <CustomHeader />
      <ScrollView className="flex-1 ">
        <TopServices />
      </ScrollView>
    </View>
  );
}

import { View, Text } from "react-native";
import CustomTitle from "../components/shared/CustomTitle";
import ViewAllServiceCards from "../components/tabs/home/services/ViewAllServices";
import { useLocalSearchParams } from "expo-router";

export default function HomeServiceScreen() {
  const { title } = useLocalSearchParams();
  return (
    <View className="flex-1 bg-[#f9f9f9] ">
      <View className="px-[6%]">
        <CustomTitle title={title} />
      </View>
      <ViewAllServiceCards />
    </View>
  );
}

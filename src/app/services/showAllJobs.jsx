import { View, Text } from "react-native";
import CustomTitle from "../components/shared/CustomTitle";
import ViewAllServiceCards from "../components/tabs/home/services/ViewAllServices";

export default function HomeServiceScreen() {
  return (
    <View className="flex-1 bg-[#f9f9f9] ">
      <View className="px-[6%]">
        <CustomTitle title="All Jobs" />
      </View>
      <ViewAllServiceCards />
    </View>
  );
}

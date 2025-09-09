import { View, ScrollView } from "react-native";
import CustomHeader from "../components/tabs/home/services/CustomHeader";
import TopServiceProvider from "../components/tabs/home/services/TopServiceProviders";

export default function ServiceProviderScreen() {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <CustomHeader title="Service Providers" />
      <ScrollView className="flex-1 ">
        <TopServiceProvider />
      </ScrollView>
    </View>
  );
}

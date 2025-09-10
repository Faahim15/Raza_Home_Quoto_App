import { View, FlatList } from "react-native";
import CustomTitle from "../components/shared/CustomTitle";
import TextField from "../components/tabs/jobs/TextField";
import ServiceSearch from "../components/tabs/jobs/ServiceSearch";
import TimePicker from "../components/tabs/home/services/provider/TimePicker";
import ButtonGroup from "../components/tabs/home/services/provider/ButtonGroup";
import PriceSlider from "../components/tabs/home/PriceInput";
import RequestButton from "../components/tabs/home/services/provider/RequestButton";
import InstructionField from "../components/tabs/home/services/provider/InstructionField";
import Specializations from "../components/tabs/home/Specializations";
import { verticalScale } from "../components/adaptive/Adaptiveness";
import CustomButton from "../components/tabs/home/services/provider/details/CustomButton";
import LocationPicker from "../components/auth/LocationPicker";
import { router } from "expo-router";
export default function JobFormScreen() {
  return (
    <View className=" bg-[#f9f9f9]">
      <View className="px-[6%]">
        <CustomTitle title="Post a Job" />
      </View>
      <FlatList
        data={[]} // dummy data, just to use FlatList as scroll container
        keyExtractor={(item, index) => index.toString()}
        renderItem={null}
        contentContainerStyle={{ paddingBottom: verticalScale(70) }}
        ListHeaderComponent={
          <View className="pb-[10%]">
            <View className="px-[6%] mt-[3%]">
              <TextField />
            </View>
            <ServiceSearch />
            <View className="px-[6%]">
              <LocationPicker />
            </View>
            <View className="px-[6%]">
              <TimePicker />
            </View>
            <View className="px-[6%]">
              <ButtonGroup />
            </View>
            <View className="px-[6%] mt-[3%]">
              <PriceSlider />
              <RequestButton />
            </View>
            <View className="mt-[3%]  px-[6%] ">
              <InstructionField />
            </View>
            <View className="px-[6%]  ">
              <Specializations />
            </View>
            <View className="px-[6%]">
              <CustomButton
                title="Continue"
                onPress={() => router.push("jobs/jobLocation")}
              />
            </View>
          </View>
        }
      />
    </View>
  );
}

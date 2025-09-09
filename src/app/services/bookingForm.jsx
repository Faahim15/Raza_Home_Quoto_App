import { View, Text, TextInput } from "react-native";
import CustomTitle from "../components/shared/CustomTitle";
import LocationPicker from "../components/auth/LocationPicker";
import CustomButton from "../components/tabs/home/services/provider/details/CustomButton";
import TimePicker from "../components/tabs/home/services/provider/TimePicker";
import ButtonGroup from "../components/tabs/home/services/provider/ButtonGroup";
import InstructionField from "../components/tabs/home/services/provider/InstructionField";
import PriceSlider from "../components/tabs/home/PriceInput";
import RequestButton from "../components/tabs/home/services/provider/RequestButton";
export default function BookProviderScreen() {
  return (
    <View className="flex-1  bg-[#F9F9F9]">
      <View className="flex-1 px-[6%] bg-[#F9F9F9] ">
        <CustomTitle title="Book Jackson" />
        <View className="mt-[4%]">
          <LocationPicker />
        </View>

        {/* Time Picker Section */}
        <TimePicker />
        {/* Button Selection */}
        <ButtonGroup />
        <View className="mt-[3%]">
          <PriceSlider />
          <RequestButton />
        </View>
        <InstructionField />

        {/* continue button */}
        <View className="mt-[3%]">
          <CustomButton route="BookingDetailsScreen" title="Continue" />
        </View>
      </View>
    </View>
  );
}

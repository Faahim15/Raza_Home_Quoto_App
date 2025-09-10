import { View, Text } from "react-native";
import LocationField from "./LocationField";

export default function LocationDetails() {
  return (
    <View className="mt-[3%]">
      <Text className="font-poppins-500medium text-base text-[#1F2937] ">
        Enter your location address
      </Text>
      <View>
        <LocationField
          placeholder="Enter house number"
          keyboardType="numeric"
          label="House number"
        />
        <LocationField
          placeholder="Enter street number"
          keyboardType="numeric"
          label="Street number"
        />
        <LocationField
          placeholder="House no, street name, city, postal code"
          keyboardType="default"
          label="Complete Address"
        />
      </View>
    </View>
  );
}

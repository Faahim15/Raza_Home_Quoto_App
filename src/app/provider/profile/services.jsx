import { Text, View } from "react-native";
import CustomTitle from "../../components/shared/CustomTitle";
import DropdownMenu from "../../components/provider/profile/DropdownMenu";
import { useState } from "react";
import Specializations from "../../components/tabs/home/Specializations";
import AvailableTime from "../../components/provider/profile/AvailableTime";
import FormButton from "../../components/auth/FormButton";
import { router } from "expo-router";

export default function ServiceScreen() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedServiceArea, setSelectedServiceArea] = useState("");
  const serviceOptions = [
    "Cleaner",
    "Plumber",
    "Air conditional repair",
    "Home installtions",
    "HVAC",
    "Residential",
  ];

  const experienceOptions = [
    "Beginner (0-1 years)",
    "Intermediate (2-3 years)",
    "Advanced (4-5 years)",
    "Expert (6+ years)",
  ];

  const serviceAreaOptions = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="flex-1 px-[6%] ">
        <View>
          <CustomTitle title="Service" />
        </View>
        <View className="mt-[3%]">
          <Text className="font-poppins-400regular  text-base text-[#1F2937] ">
            Service name
          </Text>
          <View className="mt-[1%]">
            <DropdownMenu
              placeholder="Cleaner"
              options={serviceOptions}
              selectedValue={selectedService}
              onSelect={setSelectedService}
            />
          </View>
        </View>
        {/* Specializations */}

        <View className="">
          <Specializations />
        </View>

        {/* Available */}
        <View>
          <Text className="font-poppins-400regular text-base text-[#1F2937]">
            Service Timing
          </Text>
        </View>
        <View className="flex-row mt-[3%] w-full justify-between">
          <AvailableTime label="From" time="9:00 AM" />
          <AvailableTime label="To" time="10:00 PM" />
        </View>

        {/* Experience in years */}
        <View className="mt-[3%]">
          <Text className="font-poppins-400regular  text-base text-[#1F2937]">
            Experience in years
          </Text>
          <View className="mt-[1%]">
            <DropdownMenu
              placeholder="4 years"
              options={experienceOptions}
              selectedValue={selectedExperience}
              onSelect={setSelectedExperience}
            />
          </View>
        </View>
        {/* Experience in years */}
        <View className="mt-[3%]">
          <Text className="font-poppins-400regular  text-base text-[#1F2937]">
            Service Area
          </Text>
          <View className="mt-[1%]">
            <DropdownMenu
              placeholder="San Diego, Califonia"
              options={serviceAreaOptions}
              selectedValue={selectedServiceArea}
              onSelect={setSelectedServiceArea}
            />
          </View>
        </View>
      </View>
      <View className="flex-1">
        <FormButton onPress={() => router.back()} title="Save" />
      </View>
    </View>
  );
}

import { useState } from "react";
import { View } from "react-native";
import CustomHeader from "../../components/auth/CustomHeader";
import DropdownMenu from "../../components/provider/profile/DropdownMenu";
import Specializations from "../../components/tabs/home/Specializations";
import FormButton from "../../components/auth/FormButton";
import { router } from "expo-router";

const ServicesOfferScreen = () => {
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
    <View className="flex-1 bg-white">
      <CustomHeader title="Services you" nestedTitle="Offer" />
      <View className="flex-1 px-[4%] mx-[3%] pt-[8%]">
        <View className="w-full">
          <DropdownMenu
            placeholder="Select Your service"
            options={serviceOptions}
            selectedValue={selectedService}
            onSelect={setSelectedService}
          />

          <DropdownMenu
            placeholder="Select Your Experience"
            options={experienceOptions}
            selectedValue={selectedExperience}
            onSelect={setSelectedExperience}
          />

          <DropdownMenu
            placeholder="Select Service Area"
            options={serviceAreaOptions}
            selectedValue={selectedServiceArea}
            onSelect={setSelectedServiceArea}
          />
        </View>

        <View className="px-[1%]">
          <Specializations />
        </View>
      </View>
      <View className="flex-1 px-[2%]">
        <FormButton
          onPress={() => router.replace("/provider/auth/timePicker")}
          title="Next"
        />
      </View>
    </View>
  );
};

export default ServicesOfferScreen;

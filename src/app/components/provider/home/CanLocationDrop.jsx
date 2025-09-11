import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Country, State, City } from "country-state-city";

const CanadianLocationDropdown = ({ onLocationSelect }) => {
  const [selectedCountry, setSelectedCountry] = useState("CA"); // Canada
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Get Canadian provinces/territories on component mount
  useEffect(() => {
    const canadianStates = State.getStatesOfCountry("CA");
    const formattedStates = canadianStates.map((state) => ({
      label: state.name,
      value: state.isoCode,
    }));
    setStates(formattedStates);
  }, []);

  // Get cities when province/state is selected
  useEffect(() => {
    if (selectedState) {
      const stateCities = City.getCitiesOfState("CA", selectedState);
      const formattedCities = stateCities.map((city) => ({
        label: city.name,
        value: city.name,
      }));
      setCities(formattedCities);
      setSelectedCity(""); // Reset city when state changes
    }
  }, [selectedState]);

  const handleStateChange = (item) => {
    setSelectedState(item.value);
    if (onLocationSelect) {
      onLocationSelect({
        province: item.label,
        provinceCode: item.value,
        city: null,
      });
    }
  };

  const handleCityChange = (item) => {
    setSelectedCity(item.value);
    const selectedProvince = states.find(
      (state) => state.value === selectedState
    );
    if (onLocationSelect) {
      onLocationSelect({
        province: selectedProvince?.label,
        provinceCode: selectedState,
        city: item.label,
      });
    }
  };

  return (
    <View className="w-full space-y-4">
      {/* Province/Territory Dropdown */}
      <View>
        <Text className="text-base font-poppins-bold text-[#6B7280] mb-2">
          Province/Territory
        </Text>
        <Dropdown
          className="border border-gray-300 rounded-lg px-3 py-2 bg-white"
          placeholderStyle={{ color: "#9CA3AF", fontSize: 16 }}
          selectedTextStyle={{ color: "#1F2937", fontSize: 16 }}
          inputSearchStyle={{ height: 40, fontSize: 16 }}
          iconStyle={{ width: 20, height: 20 }}
          data={states}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select Province/Territory"
          searchPlaceholder="Search provinces..."
          value={selectedState}
          onChange={handleStateChange}
          renderRightIcon={() => (
            <Text className="text-gray-400 text-lg">▼</Text>
          )}
        />
      </View>

      {/* City Dropdown - Only show if province is selected */}
      {selectedState && (
        <View>
          <Text className="text-base font-poppins-bold text-[#6B7280] mb-2">
            City
          </Text>
          <Dropdown
            className="border border-gray-300 rounded-lg px-3 py-2 bg-white"
            placeholderStyle={{ color: "#9CA3AF", fontSize: 16 }}
            selectedTextStyle={{ color: "#1F2937", fontSize: 16 }}
            inputSearchStyle={{ height: 40, fontSize: 16 }}
            iconStyle={{ width: 20, height: 20 }}
            data={cities}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select City"
            searchPlaceholder="Search cities..."
            value={selectedCity}
            onChange={handleCityChange}
            renderRightIcon={() => (
              <Text className="text-gray-400 text-lg">▼</Text>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default CanadianLocationDropdown;

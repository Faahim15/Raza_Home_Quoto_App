import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  Text,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const { width, height } = Dimensions.get("window");

const LocationPicker = () => {
  const [locationText, setLocationText] = useState("");
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 23.8103, // Default to Dhaka
    longitude: 90.4125,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const mapRef = useRef(null);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Required",
          "Please grant location permission to use this feature.",
          [{ text: "OK" }]
        );
        return false;
      }
      return true;
    } catch (error) {
      Alert.alert("Error", "Failed to request location permission");
      return false;
    }
  };

  const getCurrentLocation = async () => {
    try {
      setIsLoading(true);
      const hasPermission = await requestLocationPermission();

      if (!hasPermission) {
        setIsLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const { latitude, longitude } = location.coords;

      const newRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };

      setMapRegion(newRegion);
      setSelectedCoordinate({ latitude, longitude });

      // Get address for current location
      await reverseGeocode(latitude, longitude);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Error", "Failed to get current location");
    }
  };

  const reverseGeocode = async (latitude, longitude) => {
    try {
      const addressResponse = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (addressResponse.length > 0) {
        const address = addressResponse[0];
        const formattedAddress = [
          address.name,
          address.street,
          address.district,
          address.city,
          address.region,
          address.country,
        ]
          .filter(Boolean)
          .join(", ");

        setLocationText(formattedAddress);
      }
    } catch (error) {
      console.error("Reverse geocoding error:", error);
    }
  };

  const handleMapPress = async (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedCoordinate({ latitude, longitude });
    await reverseGeocode(latitude, longitude);
  };

  const openMapModal = async () => {
    setIsMapVisible(true);

    // Get current location when opening map
    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      try {
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });

        const { latitude, longitude } = location.coords;
        const newRegion = {
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };

        setMapRegion(newRegion);
        if (!selectedCoordinate) {
          setSelectedCoordinate({ latitude, longitude });
        }
      } catch (error) {
        console.log("Could not get current location");
      }
    }
  };

  const confirmLocation = () => {
    if (selectedCoordinate) {
      setIsMapVisible(false);
    } else {
      Alert.alert(
        "No Location Selected",
        "Please select a location on the map"
      );
    }
  };

  const cancelSelection = () => {
    setIsMapVisible(false);
    setSelectedCoordinate(null);
  };

  return (
    <View className="w-full my-[3%]">
      {/* Location Input Field */}
      <Text className="font-poppins-400regular text-base text-[#000] mb-[2%]">
        Location
      </Text>
      <View className="flex-row items-center bg-[#F9F9F9] border border-[#DCDCDC] rounded-md px-[1%] py-[4%]">
        <TouchableOpacity
          onPress={openMapModal}
          disabled={isLoading}
          className="p-[3%] rounded-full  "
          activeOpacity={0.7}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Ionicons name="location-outline" size={20} color="#9E9E9E" />
          )}
        </TouchableOpacity>
        <View className="flex-1 mr-[0%]">
          <TextInput
            className="flex-1 font-poppins-400regular  text-sm  bg-[#f9f9f9] text-black"
            placeholder="Tap the location icon to select"
            value={locationText}
            onChangeText={setLocationText}
            multiline={true}
            textAlignVertical="top"
            placeholderTextColor="#898989"
          />
        </View>
      </View>

      {/* Map Modal */}
      <Modal
        visible={isMapVisible}
        animationType="slide"
        statusBarTranslucent={true}
      >
        <View className="flex-1 bg-white">
          {/* Header */}
          <View className="bg-white px-[5%] pt-[12%] pb-[3%] border-b border-gray-200 shadow-sm">
            <View className="flex-row items-center justify-between">
              <TouchableOpacity
                onPress={cancelSelection}
                className="p-[2%]"
                activeOpacity={0.7}
              >
                <Ionicons name="close" size={28} color="#374151" />
              </TouchableOpacity>

              <Text className="text-lg font-semibold text-gray-800">
                Select Location
              </Text>

              <TouchableOpacity
                onPress={confirmLocation}
                className="bg-blue-500 px-[4%] py-[2%] rounded-lg"
                activeOpacity={0.8}
              >
                <Text className="text-white font-medium">Done</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Map Container */}
          <View className="flex-1">
            <MapView
              ref={mapRef}
              style={{ width: width, height: height * 0.7 }}
              region={mapRegion}
              onPress={handleMapPress}
              showsUserLocation={true}
              showsMyLocationButton={false}
              toolbarEnabled={false}
              loadingEnabled={true}
              mapType="standard"
            >
              {selectedCoordinate && (
                <Marker
                  coordinate={selectedCoordinate}
                  draggable={true}
                  onDragEnd={async (event) => {
                    const { latitude, longitude } =
                      event.nativeEvent.coordinate;
                    setSelectedCoordinate({ latitude, longitude });
                    await reverseGeocode(latitude, longitude);
                  }}
                >
                  <View className="bg-red-500 w-8 h-8 rounded-full items-center justify-center border-2 border-white shadow-lg">
                    <Ionicons name="location" size={16} color="white" />
                  </View>
                </Marker>
              )}
            </MapView>

            {/* Current Location Button */}
            <TouchableOpacity
              onPress={getCurrentLocation}
              className="absolute bottom-[5%] right-[5%] bg-white p-[3%] rounded-full shadow-lg border border-gray-200"
              activeOpacity={0.8}
            >
              <Ionicons name="locate" size={24} color="#2563eb" />
            </TouchableOpacity>

            {/* Selected Address Display */}
            {locationText && (
              <View className="absolute bottom-[5%] left-[5%] right-[15%] bg-white p-[4%] rounded-xl shadow-lg border border-gray-200">
                <Text className="text-xs text-gray-500 mb-[1%]">
                  Selected Location:
                </Text>
                <Text
                  className="text-sm text-gray-800 font-medium"
                  numberOfLines={2}
                >
                  {locationText}
                </Text>
              </View>
            )}
          </View>

          {/* Instructions */}
          <View className="bg-gray-50 px-[5%] py-[3%] border-t border-gray-200">
            <Text className="text-center text-sm text-gray-600">
              Tap on the map to select a location, or drag the marker to adjust
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LocationPicker;

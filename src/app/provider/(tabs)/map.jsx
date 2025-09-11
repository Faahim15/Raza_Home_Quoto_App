import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Alert,
  Platform,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import ServiceQuoteModal from "../../components/provider/map/QuoteModal";
import nearbyUsers from "../../components/data/provider/MapData";
import { scale, verticalScale } from "../../components/adaptive/Adaptiveness";
import { router } from "expo-router";
const MapScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [mapRef, setMapRef] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Initial region for San Diego
  const initialRegion = {
    latitude: 32.7157,
    longitude: -117.1611,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission denied",
          "Location permission is required to show your position on the map."
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      // Animate to user location if map is ready
      if (mapRef) {
        mapRef.animateToRegion(
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
          1000
        );
      }
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  const handleGoOnline = () => {
    setIsOnline(true);
    // Here you would typically update your backend about the user's online status
    Alert.alert("Status Updated", "You are now online and visible to others!");
  };

  const handleMarkerPress = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const handleGoOffline = () => {
    setIsOnline(false);
    // Here you would typically update your backend about the user's offline status
  };

  const handleBackPress = () => {
    router.back();
  };
  const closeModal = () => {
    setModalVisible(false);
    setSelectedUser(null);
  };
  const CustomMarker = ({ user }) => (
    <Marker
      coordinate={user.coordinate}
      key={user.id}
      onPress={() => handleMarkerPress(user)}
    >
      <View className="w-12 h-12 rounded-full bg-blue-500 border-3 border-white shadow-lg items-center justify-center">
        <Text className="text-lg">{user.avatar}</Text>
      </View>
    </Marker>
  );

  const UserLocationMarker = () =>
    userLocation && (
      <Marker coordinate={userLocation}>
        <View className="w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-lg" />
      </Marker>
    );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View className="w-full h-[8%] flex-row items-center justify-between px-[3%] bg-white border-b border-gray-100">
        <TouchableOpacity
          onPress={handleBackPress}
          style={{ height: verticalScale(40), width: scale(40) }}
          className=" items-center justify-center"
        >
          <Ionicons name="chevron-back" size={24} color="#C8C7CC" />
        </TouchableOpacity>

        <View className="flex-1 items-center">
          <Text className="text-lg font-poppins-500medium text-[#242E42]">
            San Diego, California, US
          </Text>
        </View>

        <TouchableOpacity className="w-10 h-10 items-center justify-center">
          <Ionicons name="close" size={24} color="#C8C7CC" />
        </TouchableOpacity>
      </View>

      {/* Map Container */}
      <View className="flex-1 relative">
        <MapView
          ref={(ref) => setMapRef(ref)}
          style={{ width: "100%", height: "100%" }}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
          showsUserLocation={false}
          showsMyLocationButton={false}
          zoomEnabled={true}
          scrollEnabled={true}
          pitchEnabled={false}
          rotateEnabled={false}
          mapType="standard"
          customMapStyle={[
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "transit",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ]}
        >
          {/* Render nearby users */}
          {nearbyUsers.map((user) => (
            <CustomMarker key={user.id} user={user} />
          ))}

          {/* User's current location */}
          <UserLocationMarker />
        </MapView>

        {/* Location button */}
        <TouchableOpacity
          onPress={getCurrentLocation}
          className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center"
        >
          <Ionicons name="locate" size={20} color="#0066CC" />
        </TouchableOpacity>
      </View>

      {/* Bottom Status Panel */}
      <View className="w-full bg-white border-t border-gray-100">
        {/* Status Text */}
        <View className="items-center py-4">
          <Text className="text-base font-poppins-500medium text-gray-900">
            {isOnline ? "You're online" : "You're offline"}
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row items-center justify-between px-[3%] pb-[3%]">
          {/* Calendar/Schedule Button
          <TouchableOpacity className="w-12 h-12 items-center justify-center">
            <Ionicons name="calendar-outline" size={24} color="#666" />
          </TouchableOpacity> */}
          <View className="w-[10%]"></View>
          {/* Main Action Button */}
          <TouchableOpacity
            style={{ height: verticalScale(44) }}
            onPress={isOnline ? handleGoOffline : handleGoOnline}
            className={`flex-1 mx-[3%]  rounded-full items-center justify-center ${
              isOnline ? "bg-red-500" : "bg-cyan-500"
            }`}
            activeOpacity={0.8}
          >
            <Text className="text-white font-poppins-500medium text-base">
              {isOnline ? "Go Offline" : "Go Online"}
            </Text>
          </TouchableOpacity>

          {/* Settings/Options Button */}
          <TouchableOpacity
            style={{ width: scale(40), height: verticalScale(40) }}
            className="rounded-full border border-[#666] items-center justify-center"
          >
            <Ionicons name="options-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Service Quote Modal */}
      <ServiceQuoteModal
        visible={modalVisible}
        selectedUser={selectedUser}
        onClose={closeModal}
      />
    </SafeAreaView>
  );
};

export default MapScreen;

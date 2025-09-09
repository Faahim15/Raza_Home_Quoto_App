import "dotenv/config";
export default {
  expo: {
    scheme: "razahomequoto",
    name: "raza-home-quoto-v2",
    slug: "raza-home-quoto-v2",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
      infoPlist: {
        NSCameraUsageDescription: "This app uses the camera for video calls.",
        NSMicrophoneUsageDescription:
          "This app uses the microphone for audio calls.",
      },
    },
    android: {
      permissions: ["CAMERA", "RECORD_AUDIO"],
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      favicon: "./assets/favicon.png",
      bundler: "metro",
    },
    plugins: ["expo-router", "expo-font"],
    extra: {
      router: {},
      eas: {
        projectId: "aa1e8043-916e-4acb-bf69-6b1053905d95",
      },
    },
    owner: "fahim15",
  },
};

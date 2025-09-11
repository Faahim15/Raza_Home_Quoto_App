import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import CustomTitle from "../../components/shared/CustomTitle";
import { scale, verticalScale } from "../../components/adaptive/Adaptiveness";
import AddMoreButton from "../../components/provider/profile/AddMoreButton";

const ProjectGalleryScreen = ({ navigation }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      images: [
        {
          id: 1,
          uri: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
          type: "after",
        },
        {
          id: 2,
          uri: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
          type: "before",
        },
        {
          id: 3,
          uri: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
          type: "before",
        },
        {
          id: 4,
          uri: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
          type: "before",
        },
      ],
    },
    {
      id: 2,
      title: "Project 2",
      images: [
        {
          id: 3,
          uri: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
          type: "after",
        },
        {
          id: 4,
          uri: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
          type: "before",
        },
        {
          id: 5,
          uri: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
          type: "before",
        },
        {
          id: 6,
          uri: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
          type: "before",
        },
      ],
    },
  ]);

  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Sorry, we need camera roll permissions to upload images!"
      );
      return false;
    }
    return true;
  };

  const pickImages = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsMultipleSelection: true,
        quality: 0.8,
        aspect: [4, 3],
      });

      if (!result.canceled && result.assets) {
        const newImages = result.assets.map((asset, index) => ({
          id: Date.now() + index,
          uri: asset.uri,
          type: "after", // Default to 'after', can be changed later
        }));

        // Create a new project with selected images
        const newProject = {
          id: Date.now(),
          title: `Project ${projects.length + 1}`,
          images: newImages,
        };

        setProjects((prevProjects) => [...prevProjects, newProject]);

        Alert.alert(
          "Success",
          `Added ${newImages.length} image(s) to new project!`
        );
      }
    } catch (error) {
      Alert.alert("Error", "Failed to pick images");
      console.error("Image picker error:", error);
    }
  };

  const handleImagePress = (imageUri) => {
    // Handle image press - maybe open full screen view
    console.log("Image pressed:", imageUri);
  };

  const toggleImageType = (projectId, imageId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              images: project.images.map((image) =>
                image.id === imageId
                  ? {
                      ...image,
                      type: image.type === "before" ? "after" : "before",
                    }
                  : image
              ),
            }
          : project
      )
    );
  };

  const renderImage = ({ item: image, index, projectId }) => (
    <View className="relative mr-[3%] mb-[3%]" style={{ width: "47%" }}>
      <TouchableOpacity
        onPress={() => handleImagePress(image.uri)}
        onLongPress={() => toggleImageType(projectId, image.id)}
        activeOpacity={0.8}
        className="relative"
      >
        <Image
          source={{ uri: image.uri }}
          style={{ height: verticalScale(160) }}
          className="w-full  rounded-lg"
          resizeMode="cover"
        />

        {/* Camera Icon Overlay */}
        <View
          style={{
            top: verticalScale(10),
            left: scale(10),
            width: scale(32),
            height: scale(32),
          }}
          className="absolute  bg-[#319FCA] rounded-full items-center justify-center"
        >
          <Ionicons name="camera" size={16} color="white" />
        </View>

        {/* Before/After Label */}
        {image.type && (
          <View
            style={{
              bottom: verticalScale(10),
              right: scale(10),
              paddingHorizontal: scale(8),
              paddingVertical: verticalScale(4),
            }}
            className="absolute  bg-black/70  rounded"
          >
            <Text className="text-white text-xl font-semibold">
              {image.type}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );

  const renderProject = ({ item: project }) => (
    <View className="mt-[5%]">
      {/* Project Title */}
      <Text className="text-base font-poppins-500medium text-[#175994] mb-[3%] px-[4%]">
        {project.title}
      </Text>

      {/* Project Images in FlatList */}
      <View className="px-[4%]">
        <FlatList
          data={project.images}
          renderItem={({ item, index }) =>
            renderImage({ item, index, projectId: project.id })
          }
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          scrollEnabled={false}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#f9f9f9]">
      {/* Header */}
      <View className="flex-row px-[3%] ">
        <CustomTitle title="Project Gallery" />
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Projects List */}
        <FlatList
          data={projects}
          renderItem={renderProject}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />

        {/* Add More Project Button */}
        {/* <TouchableOpacity
          onPress={pickImages}
          className="mt-[8%] mb-[6%] border border-[#319FCA] bg-[#319FCA] py-[4%] rounded-full items-center justify-center mx-[4%]"
        >
          <View className="flex-row items-center">
            <Ionicons name="add" size={20} color="white" />
            <Text className="text-white font-poppins-bold text-base ml-[1%]">
              Add more project
            </Text>
          </View>
        </TouchableOpacity> */}
        <AddMoreButton onPress={pickImages} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProjectGalleryScreen;

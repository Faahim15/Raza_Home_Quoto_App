import {
  View,
  FlatList,
  Image,
  Pressable,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import imageData from "../../../../../data/shared/Images";
import { scale, verticalScale } from "../../../../../adaptive/Adaptiveness";
import { useState } from "react";

export default function Gallery() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };
  return (
    <View className="flex-row  mt-[3%] mx-[6%]">
      <FlatList
        data={imageData}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item.image)}
            className="mr-[2%]"
          >
            <Image
              source={item.image}
              style={{
                width: scale(100),
                height: verticalScale(121),
                borderRadius: scale(4),
              }}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingRight: scale(100) }}
      />
      {/* Modal for full-screen image view */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          className="flex-1 justify-center items-center bg-black/70"
          onPress={() => setModalVisible(false)}
        >
          <Image
            source={selectedImage}
            className="w-[90%] h-[50%] rounded-xl"
            resizeMode="contain"
          />
          <Text className="text-white mt-4 text-sm">Tap to close</Text>
        </Pressable>
      </Modal>
    </View>
  );
}

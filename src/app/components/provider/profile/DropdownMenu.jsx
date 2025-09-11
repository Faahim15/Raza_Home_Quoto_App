import { View, TouchableOpacity, Text, FlatList, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";
import { useState } from "react";
const DropdownMenu = ({ placeholder, options, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <View className="w-full mb-[4%]">
      <TouchableOpacity
        style={{ height: verticalScale(48) }}
        className="w-full  bg-white border border-gray-300 rounded-lg px-[4%] flex-row items-center justify-between"
        onPress={() => setIsOpen(true)}
      >
        <Text
          className={`text-base font-poppins-500medium ${selectedValue ? "text-gray-800" : "text-gray-500"}`}
        >
          {selectedValue || placeholder}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#6B7280" />
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          className="flex-1 bg-black/50 justify-center items-center px-[4%]"
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <View className="w-full  bg-white rounded-lg shadow-lg">
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="px-[4%] py-[3%] border-b border-gray-100"
                  onPress={() => handleSelect(item)}
                >
                  <Text className="text-base font-poppins-400regular text-gray-800">
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default DropdownMenu;

import { View, Text, TextInput } from "react-native";

export default function VerificationCodeField() {
  const numbers = [8, 2, 8, 4];
  return (
    <View className=" pt-[15%] justify-center items-center px-[5%]">
      <View className="flex-row justify-between w-full max-w-sm">
        {numbers.map((number, index) => (
          <TextInput
            key={index}
            className="bg-gray-100 rounded-2xl w-[20%] aspect-square text-center shadow-sm"
          >
            <Text className="text-2xl font-poppins-500medium text-black">
              {number}
            </Text>
          </TextInput>
        ))}
      </View>
    </View>
  );
}

import { ScrollView, Text, View } from "react-native";
import CustomTitle from "../components/shared/services/CustomTitle";

export default function PrivacyScreen() {
  const terms =
    "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.";

  return (
    <View className="flex-1 px-[6%] bg-[#F9F9F9] ">
      <View>
        <CustomTitle title="Privacy Policy" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-[1%] mt-[3%] ">
          {Array(15)
            .fill()
            .map((_, i) => (
              <Text
                key={i}
                className=" font-poppins-400regular text-justify text-sm text-[#333333] mb-[4%]"
              >
                {i + 1}. {terms}
              </Text>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

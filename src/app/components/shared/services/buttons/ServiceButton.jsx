import { View, Text, TouchableOpacity } from "react-native";

export default function CustomButton({ title, route, agreeToTerms = true }) {
  function navigatonHandler() {
    // if (route) {
    //   navigation.navigate(route);
    // }
  }
  return (
    <View className=" mt-[3%] bg-[#175994] border rounded-md border-[#0054A5] px-[3%] py-[3%] ">
      <TouchableOpacity
        disabled={!agreeToTerms}
        style={{ opacity: agreeToTerms ? 1 : 0.6 }}
        onPress={navigatonHandler}
      >
        <Text className="text-white font-poppins-bold text-center">
          {" "}
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

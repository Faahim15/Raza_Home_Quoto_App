import { View, Text } from "react-native";
import SingleButton from "./SingleButton";
import { useState } from "react";
export default function RequestButton() {
  const [selected, setSelected] = useState(false);
  function quoteHandler() {
    setSelected((prev) => !prev);
  }

  return (
    <View className="">
      <Text className="font-poppins-400regular text-base text-center text-[#80898A]">
        Or
      </Text>
      <View className="px-[6%] mt-[3%] ">
        <SingleButton
          title="Req a personalized Quote"
          onPress={quoteHandler}
          selected={selected}
        />
      </View>
    </View>
  );
}

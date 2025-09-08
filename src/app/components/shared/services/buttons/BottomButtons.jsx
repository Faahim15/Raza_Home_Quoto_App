import { View, Text, Pressable } from "react-native";
import { scale } from "../../../adaptive/Adaptiveness";

export default function BotttomButtons({
  title,
  backgroundColor,
  borderColor,
  color,
  width = 148,
  path,
}) {
  const navigation = useNavigation();

  const handlePress = () => {
    // if (typeof path === "string") {
    //   navigation.navigate(path);
    // } else {
    //   navigation.navigate(path.name, path.params);
    // }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={{
        width: scale(width),
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: scale(1),
      }}
      className="justify-center  rounded-md items-center px-[3%] py-[3%] "
    >
      <Text style={{ color: color }} className="font-poppins-bold text-base  ">
        {title}
      </Text>
    </Pressable>
  );
}

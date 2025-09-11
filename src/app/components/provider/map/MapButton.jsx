import { View, Text, TouchableOpacity } from "react-native";
export default function MapButton({
  title,
  backgroundColor = "#0054A5",
  color = "#fff",
  borderColor = "#0054A5",
  onPress,
}) {
  return (
    <View
      style={{ backgroundColor: backgroundColor, borderColor: borderColor }}
      className="px-[4%] py-[3%] border  rounded-md "
    >
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: color }} className="font-poppins-bold text-base">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

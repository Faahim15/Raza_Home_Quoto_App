import { Text, Pressable } from "react-native";

export default function UserSelectionButtons({
  backgroundColor = "#0054A5",
  onPress,
  title,
  textColor = "#fff",
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{ backgroundColor: backgroundColor }}
      className="w-[41%] p-[2%]   rounded-md border border-[#0054A5] "
    >
      <Text
        style={{ color: textColor }}
        className="text-center font-poppins-500medium text-base"
      >
        {title}
      </Text>
    </Pressable>
  );
}

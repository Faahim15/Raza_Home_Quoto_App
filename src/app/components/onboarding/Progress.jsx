import { View } from "react-native";

export default function ProgressDots({ activeIndex = 0 }) {
  return (
    <View className="flex-1 flex-row  gap-[2.07%] items-center">
      {[0, 1, 2].map((index) => (
        <View
          style={{
            shadowColor: "#ffffff",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25, // #00000040 = 25% opacity
            shadowRadius: 2,
            elevation: 4, // For Android
          }}
          key={index}
          className={
            index === activeIndex
              ? " w-[40px] h-[6px]  rounded-[79px] bg-[#1F2937]"
              : " w-[6px] h-[6px]  rounded-[79px] bg-[#1F2937]"
          }
        />
      ))}
    </View>
  );
}

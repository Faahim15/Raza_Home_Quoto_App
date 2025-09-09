import { FlatList, Image, View } from "react-native";
import imageData from "../../../../../data/shared/Images";
import { scale, verticalScale } from "../../../../../adaptive/Adaptiveness";

function showGallery({ item }) {
  return (
    <View>
      <Image
        style={{
          width: scale(160),
          height: verticalScale(195),
          borderRadius: scale(6),
        }}
        source={item.image}
      />
    </View>
  );
}

export default function ViewAllGallery() {
  return (
    <View>
      <FlatList
        data={imageData}
        renderItem={showGallery}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ItemSeparatorComponent={() => (
          <View style={{ height: verticalScale(16) }} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: verticalScale(70) }}
      />
    </View>
  );
}

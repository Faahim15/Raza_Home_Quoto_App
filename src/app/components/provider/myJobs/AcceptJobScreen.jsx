import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";
import PaymentChecklist from "../../tabs/jobs/PaymentCheckList";
const acceptJobData = [
  {
    id: "1",
    title: "Wallpaper on drawing room",
    author: "Amand Herlen",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
    service: "Painting/Indoor Painting",
    location: "Baker Street",
    time: "2hrs ago",
    price: "$150",
    status: "Completed",
  },
  {
    id: "2",
    title: "Kitchen Cabinet Renovation",
    author: "Sarah Johnson",
    authorImage:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop",
    service: "Carpentry/Kitchen Work",
    location: "Oak Avenue",
    time: "4hrs ago",
    price: "$320",
    status: "In Progress",
  },
  {
    id: "3",
    title: "Bathroom Tile Installation",
    author: "Mike Chen",
    authorImage:
      "https://images.unsplash.com/photo-1562788865-6a83f4b45272?w=200&auto=format&fit=crop",
    service: "Tiling/Bathroom",
    location: "Pine Street",
    time: "6hrs ago",
    price: "$220",
    status: "In Progress",
  },
  {
    id: "4",
    title: "Living Room Lighting Setup",
    author: "Emma Davis",
    authorImage:
      "https://images.unsplash.com/photo-1573497019707-1c04f17faa61?w=200&auto=format&fit=crop",
    service: "Electrical/Lighting",
    location: "Maple Drive",
    time: "8hrs ago",
    price: "$180",
    status: "Completed",
  },
  {
    id: "5",
    title: "Garden Landscaping",
    author: "Tom Wilson",
    authorImage:
      "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?w=200&auto=format&fit=crop",
    service: "Gardening/Outdoor",
    location: "Rose Garden",
    time: "1 day ago",
    price: "$400",
    status: "In Progress",
  },
  {
    id: "6",
    title: "Floor Polishing Service",
    author: "Lisa Brown",
    authorImage:
      "https://images.unsplash.com/photo-1573496357673-4e4b9d5c2754?w=200&auto=format&fit=crop",
    service: "Cleaning/Floor Care",
    location: "Cedar Lane",
    time: "1 day ago",
    price: "$120",
    status: "Completed",
  },
  {
    id: "7",
    title: "Window Blind Installation",
    author: "David Lee",
    authorImage:
      "https://images.unsplash.com/photo-1562788866-db1b7b0e8b2f?w=200&auto=format&fit=crop",
    service: "Installation/Windows",
    location: "Birch Road",
    time: "2 days ago",
    price: "$90",
    status: "In Progress",
  },
];

const ServiceCard = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("AceeptJobDetailScreen", { item: item })
      }
      style={{ width: scale(327), height: "full" }}
      className="bg-white pb-[2%] mr-[0.5%] flex-col justify-center  border border-[#D4E0EB] px-[4.5%]  rounded-xl shadow-sm overflow-hidden"
    >
      <View className="flex-row mt-[2%] ">
        {/* User Image */}
        <View className="">
          <Image
            source={{ uri: item.authorImage }}
            style={{ width: scale(48), height: verticalScale(48) }}
            className="mt-[12%] bg-gray-300 rounded-full mr-[2%]"
          />
        </View>

        {/* Card Content */}
        <View className=" ">
          {/* Title */}
          <Text
            className="text-gray-900 font-poppins-500medium text-base mt-[2%] "
            numberOfLines={2}
          >
            {item.title}
          </Text>

          {/* Author */}
          <View className="flex-row items-center mt-[2%]">
            <Text className="font-poppins-400regular text-sm">
              by{" "}
              <Text className="font-poppins-400regular text-[#319FCA] text-sm ">
                {item.author}
              </Text>
            </Text>
          </View>

          {/* Service Type */}
          <View className="flex-row gap-[2%] items-center mt-[2%]">
            <Ionicons name="construct-outline" size={16} color="#6B7280" />
            <Text className="font-poppins-400regular text-sm text-[#6B7280] ">
              {item.service}
            </Text>
          </View>

          {/* Location and Time */}
          <View className="flex-row items-center mt-[2%]">
            <Ionicons name="location-outline" size={16} color="#319FCA" />
            <Text className="text-gray-500 text-sm ml-[1%]"></Text>

            <Text className="font-poppins-400regular text-sm text-[#319FCA] ">
              {item.location}{" "}
              <Text className="text-[#6B7280]">| {item.time}</Text>
            </Text>
          </View>
        </View>
      </View>

      {/* Price section */}

      <View className="flex-row mt-[2%] justify-between">
        <Text className="font-poppins-400regular text-base text-[#1F2937] ">
          Price
        </Text>
        <Text className="font-poppins-semiBold text-lg text-[#F59E0B] ">
          {item.price}
        </Text>
      </View>
      {/* Status section */}

      <View className="flex-row mt-[2%] justify-between">
        <Text className="font-poppins-400regular text-base text-[#1F2937] ">
          status
        </Text>
        <Text
          className={`font-poppins-400regular text-base ${item.status === "In Progress" ? "text-[#1A73E8]" : item.status === "Completed" ? "text-[#00BFA5]" : "text-[#D32F2F]"} `}
        >
          {item.status}
        </Text>
      </View>

      {/* Job and payment confirmation section */}

      {item.status === "In Progress" && (
        <View className="py-[2%]  bg-[#F5F5F5] rounded-lg ">
          <PaymentChecklist />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default function AcceptJobsScreen() {
  return (
    <View
      className={`px-[2%]  justify-center items-start  bg-[#f9f9f9] mt-[2%]`}
    >
      <FlatList
        data={acceptJobData}
        renderItem={({ item }) => <ServiceCard item={item} />}
        keyExtractor={(item) => item.id}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: verticalScale(100),
          rowGap: verticalScale(12),
        }}
        snapToAlignment="start" // Ensures proper snapping alignment
      />
    </View>
  );
}

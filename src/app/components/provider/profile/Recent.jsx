import { View, Text, ScrollView } from "react-native";

const recentActivities = [
  {
    id: 1,
    description: 'Submitted quote for "Kitchen Plumbing Fix"',
    credits: -6,
    date: "Jun 10, 2025",
  },
  {
    id: 2,
    description: 'Submitted quote for "Kitchen Plumbing Fix"',
    credits: -6,
    date: "Jun 14, 2025",
  },
  {
    id: 3,
    description: 'Received 3 Star Review for "Kitchen Plumbing Fix"',
    credits: 3,
    date: "Jun 25, 2025",
  },
];

const RecentActivity = () => {
  return (
    <View className="px-[5%] pt-[5%]">
      <Text className="text-xl font-poppins-semiBold mb-[4%] text-black">
        Recent Activity
      </Text>
      <ScrollView className="space-y-[4%]">
        {recentActivities.map((activity) => (
          <View
            key={activity.id}
            className="border-b border-gray-200 pb-[4%] flex-row justify-between items-start"
          >
            <View className="flex-1 pr-[4%]">
              <Text className="text-xs font-poppins-400regular text-[#171717]">
                {activity.description}
              </Text>
              <Text
                className={`text-base font-poppins-400regular mt-[1%] ${
                  activity.credits < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {activity.credits > 0
                  ? `+${activity.credits} Credit`
                  : `${activity.credits} Credit`}
              </Text>
            </View>
            <Text className="text-sm text-[#171717] font-poppins-400regular mt-[1%]">
              {activity.date}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RecentActivity;

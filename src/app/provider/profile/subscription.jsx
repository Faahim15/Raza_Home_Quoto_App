import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CustomTitle from "../../components/shared/services/CustomTitle";
import { verticalScale } from "../../components/adaptive/Adaptiveness";
import { router } from "expo-router";

const SubscriptionScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const plans = [
    {
      id: "monthly",
      title: "Monthly",
      icon: "⏰",
      price: "$75",
      period: "/month",
      features: [
        "Unlimited quotes on all jobs",
        "Priority listing in local job searches",
        "Full access to all platform features",
      ],
    },
    {
      id: "6months",
      title: "6 Months",
      icon: "🏅",
      price: "$405",
      period: "/6 month",
      features: [
        "Save 10% compared to monthly",
        "Unlimited quotes on all jobs",
        "Ideal for consistent users who quote regularly",
      ],
    },
    {
      id: "yearly",
      title: "Yearly",
      icon: "📅",
      price: "$720",
      period: "/year",
      features: [
        "20% savings, best value overall",
        "Unlimited quotes on all jobs",
        "Best value for full-time service providers",
      ],
    },
  ];

  return (
    <View className="flex-1  bg-[#f9f9f9]">
      <View className="px-[6%]">
        <CustomTitle title="Subscription" />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: verticalScale(80) }}
        className="flex-1  px-[6%] py-[3%]"
      >
        <View className="gap-[4%]">
          {plans.map((plan) => (
            <TouchableOpacity
              key={plan.id}
              onPress={() => setSelectedPlan(plan.id)}
              className={` 
    ${selectedPlan === plan.id ? "bg-blue-50 border-[#175994]" : "bg-white border-gray-300"} 
    ${selectedPlan === plan.id ? "opacity-100" : "opacity-75"} 
    border-2 rounded-xl p-[5%] shadow-sm
  `}
              activeOpacity={1}
            >
              {/* Header with Icon and Title */}
              <View className="flex-row items-center mb-[4%]">
                <View className="relative">
                  <Text className="text-3xl mr-[3%]">{plan.icon}</Text>
                  {plan.badge && (
                    <View className="absolute -top-1 -right-1 bg-orange-500 rounded-full w-6 h-6 items-center justify-center">
                      <Text className="text-white text-xs font-bold">
                        {plan.badge}
                      </Text>
                    </View>
                  )}
                </View>
                <Text className="text-base font-poppins-500medium text-[#175994]">
                  {plan.title}
                </Text>
              </View>

              {/* Features List */}
              <View className="mb-[5%]">
                {plan.features.map((feature, index) => (
                  <View key={index} className="flex-row items-start mb-[2%]">
                    <Text className="text-[#175994] text-base mr-[2%] ">✓</Text>
                    <Text className="text-[#0F161C] font-poppins-400regular text-xs flex-1 leading-5">
                      {feature}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Price Section */}
              <View className="border-t flex-row justify-between border-[#DCDCDC] pt-[4%]">
                <Text className="text-[#1F2937] text-base font-poppins-400regular mb-[1%]">
                  Price
                </Text>
                <View className="flex-row items-baseline">
                  <Text className="text-[#F59E0B] text-lg font-poppins-semiBold ">
                    {plan.price}
                  </Text>
                  <Text className="text-[#F59E0B] font-poppins-semiBold text-base ml-1">
                    {plan.period}
                  </Text>
                </View>
              </View>

              {/* Selection Indicator */}
              {selectedPlan === plan.id && (
                <View className="absolute top-[3%] right-[3%]">
                  <View className="bg-[#175994] rounded-full w-6 h-6 items-center justify-center">
                    <Text className="text-white text-xs">✓</Text>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {/* Continue Button */}
      <TouchableOpacity
        onPress={() => router.push("/provider/profile/paymentDetails")}
        className="bg-[#0054A5] rounded-xl py-[4%] mx-[6%]  mb-[3%]"
        activeOpacity={1}
      >
        <Text className="text-white text-center text-base font-poppins-bold ">
          Continue with {plans.find((p) => p.id === selectedPlan)?.title} Plan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubscriptionScreen;

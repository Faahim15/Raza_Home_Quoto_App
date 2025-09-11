import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CustomTitle from "../../components/shared/services/CustomTitle";
import { verticalScale } from "../../components/adaptive/Adaptiveness";
import { router } from "expo-router";

const BuyCreditScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState(25);

  const plans = [
    {
      id: 20,
      title: "20 Credits",
      price: "$400",
      features: "Best for small to medium jobs",
    },
    {
      id: 50,
      title: "50 Credits",
      price: "$1000",
      features: "Ideal for larger projects",
    },
    {
      id: 100,
      title: "100 Credits",
      price: "$2000",
      features: "Perfect for enterprise-level jobs",
    },
  ];
  function buyCreditHandler() {
    // navigation.navigate("CreditsDetailScreen", {
    //   selectedPlanId: selectedPlan,
    // });
    router.push({
      pathname: "provider/profile/credits",
      params: { selectedPlanId: selectedPlan },
    });
  }

  return (
    <View className="flex-1 bg-[#f9f9f9]">
      <View className="px-[6%]">
        <CustomTitle title="Subscription" />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: verticalScale(180) }}
        className="flex-1  px-[6%] py-[3%]"
      >
        <View className=" mt-[6%] gap-[4%]">
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
              <View className="flex-row border-b border-[#dcdcdc] pb-[2%] items-center mb-[4%]">
                <Text className="text-base  font-poppins-500medium text-[#175994]">
                  {plan.title}
                </Text>
              </View>

              {/* Features List */}
              <View className="mb-[5%]">
                <View className="flex-row items-start mb-[2%]">
                  <Text className="text-[#175994] text-base mr-[2%] ">✓</Text>
                  <Text className="text-[#0F161C] font-poppins-400regular text-xs flex-1 leading-5">
                    {plan.features}
                  </Text>
                </View>
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
        onPress={buyCreditHandler}
        className="bg-[#0054A5] rounded-xl py-[4%] mx-[6%]  mb-[5%]"
        activeOpacity={1}
      >
        <Text className="text-white text-center text-base font-poppins-bold ">
          Continue with {plans.find((p) => p.id === selectedPlan)?.title} Plan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyCreditScreen;

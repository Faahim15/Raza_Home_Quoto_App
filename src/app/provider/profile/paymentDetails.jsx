import { View, Text } from "react-native";
import CustomTitle from "../../components/shared/services/CustomTitle";
import FormButton from "../../components/auth/FormButton";
import PaymentProgress from "../../components/provider/profile/PaymentProgress";
import { router } from "expo-router";

const PaymentDetailScreen = () => {
  const planDetails = {
    title: "Monthly",
    icon: "⏰",
    price: "$75",
    period: "/month",
    features: [
      "Get automatic monthly credits without manual purchase.",
      "Ensures you always have credits to quote on jobs.",
      "Priority listing in local job searches",
    ],
  };

  const pricing = {
    planPrice: "$75.00",
    taxes: "$5.00",
    total: "$80.00",
  };

  return (
    <View className="flex-1">
      <View className="flex-1 px-[6%] bg-[#F9F9F9]">
        <View>
          <CustomTitle title="Payment" />
        </View>
        {/* Header with Progress */}
        <PaymentProgress details={true} payment={false} confirm={false} />

        <View
          className={`border border-[#dcdcdc] bg-[#f9f9f9] rounded-xl p-[5%] shadow-sm`}
        >
          {/* Header with Icon and Title */}
          <View className="flex-row justify-center border-b border-[#DCDCDC] pb-[1%] items-center mb-[4%]">
            <View className="relative">
              <Text className="text-3xl mr-[3%]">{planDetails.icon}</Text>
            </View>
            <Text className="text-base font-poppins-500medium text-[#175994]">
              {planDetails.title}
            </Text>
          </View>

          {/* Features List */}
          <View className="mb-[5%]">
            {planDetails.features.map((feature, index) => (
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
                {planDetails.price}
              </Text>
              <Text className="text-[#F59E0B] font-poppins-semiBold text-base ml-1">
                {planDetails.period}
              </Text>
            </View>
          </View>
          {/*Plan Price Section */}
          <View className=" flex-row justify-between  pt-[4%]">
            <Text className="text-[#1F2937] text-base font-poppins-400regular mb-[1%]">
              Plan Price
            </Text>
            <View className="flex-row items-baseline">
              <Text className="text-[#202124] text-lg font-poppins-semiBold ">
                {pricing.planPrice}
              </Text>
            </View>
          </View>
          {/*Tax Price Section */}
          <View className=" border-b border-[#DCDCDC] pb-[2%] flex-row justify-between  pt-[4%]">
            <Text className="text-[#1F2937] text-base font-poppins-400regular mb-[1%]">
              Taxes
            </Text>
            <View className="flex-row items-baseline">
              <Text className="text-[#202124] text-lg font-poppins-semiBold ">
                {pricing.taxes}
              </Text>
            </View>
          </View>

          {/*Plan Price Section */}
          <View className=" flex-row justify-between  pt-[4%]">
            <Text className="text-[#1F2937] text-base font-poppins-400regular mb-[1%]">
              Total
            </Text>
            <View className="flex-row items-baseline">
              <Text className="text-[#202124] text-lg font-poppins-semiBold ">
                {pricing.total}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-1 px-[2%] pb-[2%]">
        <FormButton
          onPress={() => router.push("/provider/profile")}
          title="Continue"
        />
      </View>
    </View>
  );
};

export default PaymentDetailScreen;

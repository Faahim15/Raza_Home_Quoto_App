import { View, Text } from "react-native";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";
import { useState } from "react";
export default function PaymentProgress({ details, confirm, payment }) {
  const [currentStep, setCurrentStep] = useState(2); // 0: Details, 1: Payment, 2: Confirm

  const steps = [
    { id: 0, title: "Details", status: details },
    { id: 1, title: "Payment", status: payment },
    { id: 2, title: "Confirm", status: confirm },
  ];

  return (
    <View className="px-[6%] py-[5%] bg-[#f9f9f9] border-b border-gray-100">
      <View className="flex-row justify-center items-center mb-[4%]">
        {steps.map((step, index) => (
          <View key={step.id} className="flex-row items-center">
            {/* Step */}
            <View className="items-center">
              <View
                style={{ width: scale(24), height: verticalScale(24) }}
                className={`rounded-full items-center justify-center ${
                  step.status ? "bg-[#00BFA5]" : "bg-gray-300"
                }`}
              >
                <View
                  style={{ width: scale(8), height: verticalScale(8) }}
                  className={` rounded-full ${step.status ? "bg-white" : "bg-gray-500"}`}
                />
              </View>
              <Text
                className={`text-xs mt-[3%] ${step.status ? "text-[#00BFA5]" : "text-[#000]"}`}
              >
                {step.title}
              </Text>
            </View>

            {/* Connector */}
            {index < steps.length - 1 && (
              <View
                style={{
                  width: scale(48),
                  height: verticalScale(1),
                  marginHorizontal: scale(8),
                }}
                className={` ${step.status ? "bg-[#00BFA5]" : "bg-gray-300"}`}
              />
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

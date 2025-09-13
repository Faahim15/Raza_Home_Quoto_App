import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { scale, verticalScale } from "../components/adaptive/Adaptiveness";
import ArrowBack from "../components/auth/ArrowBack";
import TimeSlot from "../components/tabs/home/services/provider/details/TimeSlot";
import Gallery from "../components/tabs/home/services/provider/details/Gallery";
import Banner from "../components/tabs/home/services/provider/details/Banner";
import PerfomanceMetrics from "../components/tabs/home/services/provider/details/PerfomanceMetrics";
import Skills from "../components/tabs/home/services/provider/details/Skills";
import Testimonials from "../components/tabs/home/services/provider/details/Testimonials";
import ReviewButton from "../components/tabs/home/services/provider/details/ReviewButton";
import Biography from "../components/tabs/home/services/provider/details/Biography";
import { router, useLocalSearchParams } from "expo-router";
import QuoteReqData from "../components/data/jobs/QuotesData";
import XStyle from "../util/styles";
import PaymentMethodModal from "../components/shared/modal/PaymentMethodModal";
import { useState } from "react";
export default function ProviderDetailsScreen() {
  const skills = ["Lighting", "Circuit", "Wiring", "Repair"];
  const { showButtons, serviceId } = useLocalSearchParams();

  const item = QuoteReqData.find((s) => s.id.toString() === serviceId);
  const [showPayment, setShowPayment] = useState(false);
  const shouldShowButtons = showButtons === "true";
  const serviceColors = {
    "TV repair and Installation": "bg-[#319FCA]",
    "AC Repair and Maintenance": "bg-[#FF6B6B]",
    "Plumbing Services": "bg-[#10B981]",
    "Electrical Repair": "bg-[#8B5CF6]",
  };
  return (
    <View className="flex-1 w-full bg-white">
      <ScrollView
        contentContainerStyle={{ paddingBottom: verticalScale(40) }}
        className="flex-1 "
      >
        {/* Banner */}

        <LinearGradient
          colors={["#319FCA", "#18649F"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-md overflow-hidden relative"
          style={{
            height: verticalScale(344),
            borderBottomLeftRadius: scale(16),
            borderBottomRightRadius: scale(16),
          }}
        >
          <View className="w-10 h-10 mx-[6%] mt-[6%] rounded-[20px] bg-white ">
            <ArrowBack />
          </View>
          <View className="flex-1 ">
            <Image
              source={require("../../../assets/images/home/electrician/electrician3.png")} //../../../../../assets/images/home/electrician/electrician3.png
              style={{
                width: scale(264),
                height: verticalScale(290),
                marginTop: verticalScale(0),
                marginLeft: scale(30),
              }}
            />
          </View>
        </LinearGradient>

        <Banner />

        {/* PerfomanceMetrics */}

        <PerfomanceMetrics />

        {/* Skills */}

        <Skills data={skills} />

        {/* Book button */}

        {/* {!shouldShowButtons && (
          <View className="px-[6%]">
            <CustomButton
              onPress={() => router.push("/services/bookingForm")}
              title="Book"
            />
          </View>
        )} */}

        {/* Time Solt */}
        <View className="mx-[6%] mt-[3%] ">
          <Text className="font-poppins-semiBold text-base text-[#565656]">
            Available
          </Text>
        </View>
        <View className="flex-row justify-start gap-[3%] mx-[6%] mt-[3%] ">
          <TimeSlot title="7:00 AM" />
          <View>
            <Text className="font-poppins-semiBold pt-[2%] text-base text-[#919191] ">
              To
            </Text>
          </View>
          <TimeSlot title="10:00 PM" />
        </View>

        {/* Bio  */}
        <Biography />

        {/* Gallery Section */}
        <View>
          <View className="flex-row justify-between mx-[6%] mt-[3%] ">
            <Text className="font-poppins-semiBold text-base text-[#565656]">
              Gallery
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/services/showGallery")}
            >
              <Text className="font-poppins-500medium text-base text-[#175994]">
                View all
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Images section */}
        <Gallery />

        {/* Reviews */}
        <Testimonials />

        {/* Review Button */}
        <ReviewButton />
      </ScrollView>
      {shouldShowButtons && (
        <View
          className="flex-row w-full gap-[6%] h-[10%]  border border-[#D8DCE0] justify-center items-center "
          style={[
            XStyle.shadowBox,
            {
              borderTopRightRadius: scale(20),
              width: "100%",
              borderTopLeftRadius: scale(20),
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => setShowPayment(true)} //navigation.navigate("WaitConfirmationScreen")
            style={{ width: "100%", height: verticalScale(40) }}
            className={` justify-center items-center  mt-[3%] rounded-md py-[2%] px-[2%] ${serviceColors[item?.serviceType] || "bg-[#0054A5]"} `}
          >
            <Text className=" font-poppins-bold   text-white text-base ">
              Pay Now
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <PaymentMethodModal
        visible={showPayment}
        onClose={() => setShowPayment(false)}
      />
    </View>
  );
}

import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import QuotesRequestScreen from "../../components/provider/myJobs/QuoteRequestScreen";
import AcceptJobsScreen from "../../components/provider/myJobs/AcceptJobScreen";

const ContractorJobScreen = () => {
  const [activeTab, setActiveTab] = useState("Quote Requests");

  const tabs = ["Quote Requests", "Accepted Jobs"];

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Accepted Jobs":
        return <AcceptJobsScreen />;
      default:
        return <QuotesRequestScreen />;
    }
  };

  return (
    <View className="w-full px-[3%] bg-[#f9f9f9] rounded-lg shadow-lg overflow-hidden">
      {/* Tab Navigation */}
      <View className="flex-row border-b border-[#C8C8C8] bg-[#f9f9f9]">
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            className={`flex-1 py-3 px-4 ${
              activeTab === tab ? "bg-white border-b border-[#175994]" : ""
            }`}
            onPress={() => handleTabPress(tab)}
          >
            <Text
              className={`text-center text-base font-poppins-400regular ${
                activeTab === tab ? "text-[#175994]" : "text-[#6B7280]"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Dynamic Content */}
      {renderContent()}
    </View>
  );
};

export default ContractorJobScreen;

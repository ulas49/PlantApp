import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";

const questions = [
  {
    id: "1",
    title: "How to identify plants?",
    subtitle: "Life Style",
    image_uri:
      "https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard.png?alt=media",
  },
  {
    id: "2",
    title: "Differences Between Species and Varieties?",
    subtitle: "Plant Identify",
    image_uri:
      "https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2Fcard2.png?alt=media",
  },
  {
    id: "3",
    title: "Why same plant can look different?",
    subtitle: "Life Style",
    image_uri:
      "https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard3.png?alt=media",
  },
];

const categories = [
  {
    id: "1",
    title: "Edible Plants",
    image_uri: "https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png",
  },
  {
    id: "2",
    title: "Ferns",
    image_uri: "https://cms-cdn.plantapp.app/6_edbcc6988a/6_edbcc6988a.png",
  },
  {
    id: "3",
    title: "Cacti and Succulents",
    image_uri: "https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png",
  },
  {
    id: "4",
    title: "Flowering Plants",
    image_uri: "https://cms-cdn.plantapp.app/2_4a226c9ae7/2_4a226c9ae7.png",
  },
  {
    id: "5",
    title: "Cacti and Succulents",
    image_uri: "https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png",
  },
  {
    id: "6",
    title: "Flowering Plants",
    image_uri: "https://cms-cdn.plantapp.app/2_4a226c9ae7/2_4a226c9ae7.png",
  },
  {
    id: "7",
    title: "Cacti and Succulents",
    image_uri: "https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1  bg-white">
      <Image
        source={require("../../assets/images/HomeHeaderBG.png")}
        className="absolute top-0 left-0 w-full h-[175px]"
        resizeMode="cover"
      />

      
        <View className="mt-6 relative ml-6">
          <Text className="text-[#13231B] font-rubik text-[20px]">  
            Hi, plant lover!
          </Text>
          <Text className="text-[#13231B] font-rubik-semibold text-2xl mt-1 mb-[6px]">
            Good Afternoon! 🌥
          </Text>
        </View>

        <View className=" bg-[#FFFFFFE0] border-[0.2px] border-[#3C3C4340] rounded-xl flex-row items-center px-4 py-3 ml-4 w-[327px] ">
          <EvilIcons name="search" size={24} color="#ABABAB" className="mr-2" />
          <TextInput
            placeholder="Search for plants"
            placeholderTextColor="#A3A3A3"
            className="flex-1 font-rubik"
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} className="px-5">
        <TouchableOpacity className="bg-[#24201A] rounded-xl flex-row items-center  h-16 mt-5 ">
          <Image
            source={require("../../assets/images/HomeEnvelopeIcon.png")}
            className="w-10 h-10 ml-4"
            resizeMode="contain"
          />
          <View className="ml-10 flex-1">
            <Text className="text-[#FFDE9C] font-rubik-semibold text-sm">
              FREE Premium Available
            </Text>
            <Text className="text-[#F5C25B] font-rubik text-xs mt-1">
              Tap to upgrade your account!
            </Text>
          </View>

          <Image
            source={require("../../assets/images/HomeArrowIcon.png")}
            className=" mr-4"
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View className="mt-8">
          <Text className="text-[15px] font-rubik-semibold text-[#13231B] mb-4">
            Get Started
          </Text>

          <FlatList
            data={questions}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 12 }}
            renderItem={({ item }) => (
              <TouchableOpacity className="w-[240px] h-[164px]  rounded-xl overflow-hidden  ">
                <ImageBackground
                  source={{ uri: item.image_uri }}
                  className="w-[240] h-[164px] flex-1 justify-end "
                  resizeMode="cover"
                >
                  <View className=" ">
                    <Text className="text-white font-rubik-semibold text-[15px]  mb-5 ml-2">
                      {item.title}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        </View>

        <View className="mt-8">
          <FlatList
            data={categories}
            numColumns={2}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity className="bg-[#F2F3F2] rounded-xl mb-4 w-[158px] h-[152px] overflow-hidden ">
                <ImageBackground
                  source={{ uri: item.image_uri }}
                  className="w-full h-[100px]"
                  resizeMode="cover"
                />
                <View className="p-3">
                  <Text className="text-[#13231B] font-rubik-semibold">
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

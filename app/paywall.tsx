import { View, Text, ImageBackground, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import FeatureCard from '@/components/FeatureCard';
import PlanCard from '@/components/PlanCard';
import { useState } from 'react';
import { setPlan } from '@/store/userSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { Ionicons } from '@expo/vector-icons';

const features = [
  {
    icon: require('../assets/images/PaywallScanIcon.png'),
    title: 'Unlimited',
    subtitle: 'Plant Identify',
  },
  {
    icon: require('../assets/images/PaywallTimeIcon.png'),
    title: 'Faster',
    subtitle: 'Process',
  },
  {
    icon: require('../assets/images/PaywallHalfIcon.png'),
    title: 'Detailed',
    subtitle: 'Plant Care',
  },
];



export default function Paywall() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<'month' | 'year'>('year');
  const dispatch = useDispatch<AppDispatch>();
  const handleTryFree = () => {
    // dispatch(setPlan('pro')); 
    router.replace('/home');
  };

  const handleSkip = () => {
    // dispatch(setPlan('free'));
    router.replace('/home');
  };


  return (
    <ImageBackground
      source={require('../assets/images/Paywallimage.png')}
      resizeMode="cover"
      className="flex-1"
    >
      <SafeAreaView className="flex-1 px-6">


        <TouchableOpacity
          onPress={handleSkip}
          className="absolute top-12 right-6 z-50"
          activeOpacity={0.7}
        >
          <Ionicons name="close" size={28} color="white" />
        </TouchableOpacity>


        <View className=" justify-center flex-1 mt-48">
          <Text className="text-white text-[30px] font-rubik-bold">
            PlantApp <Text className="font-rubik">Premium</Text>
          </Text>
          <Text className="text-[#FFFFFFB2] text-opacity-70 text-base font-rubik mt-2">
            Access All Features
          </Text>
        </View>

        <View className="flex-row justify-between mt-10 gap-2">
          <FlatList
            data={features}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="rounded-[12px] p-4 w-[156px] h-[130px] bg-[#233029B2] mr-2">
                <Image source={item.icon} />
                <Text className="text-white font-rubik-medium text-xl mt-2">{item.title}</Text>
                <Text className="text-white font-rubik text-[12px] mt-1">{item.subtitle}</Text>
              </View>
            )}
          />
        </View>

        <View className="mt-10">


          <TouchableOpacity
            className={`rounded-xl p-4 flex-row items-center relative mb-2 
  ${selectedPlan === 'month' ? 'border-green-500 bg-black/20 border-[1.5px]' : 'border-[#FFFFFF4D] bg-[#1C2923] border'}`}
            onPress={() => setSelectedPlan('month')}
            activeOpacity={0.7}
          >
            <View className={`w-8 h-8 rounded-3xl mr-4 ${selectedPlan === 'month' ? 'bg-[#28AF6E] justify-center items-center' : 'bg-[#2E3A34]'}`}>
              {selectedPlan === 'month' && (
                <View className="w-3 h-3 rounded-3xl bg-white" />
              )}
            </View>
            <View>
              <Text className="text-white font-rubik-bold">1 Month</Text>
              <Text className="text-gray-400 text-xs mt-1 font-rubik">
                $2.99/month, auto renewable
              </Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            className={`rounded-xl p-4 flex-row items-center relative mb-2 ${selectedPlan === 'year' ? 'border-green-500 bg-black/20 border-[1.5px]' : 'border-[#FFFFFF4D] bg-[#1C2923] border'}`}
            onPress={() => setSelectedPlan('year')}
            activeOpacity={0.7}
          >
            <View className={`w-8 h-8 rounded-3xl mr-4 ${selectedPlan === 'year' ? 'bg-[#28AF6E] justify-center items-center' : 'bg-[#2E3A34]'}`}>
              {selectedPlan === 'year' && (
                <View className="w-3 h-3 rounded-3xl bg-white" />
              )}
            </View>
            <View>
              <Text className="text-white font-rubik-bold">1 Year</Text>
              <Text className="text-gray-400 text-xs mt-1 font-rubik">
                First 3 days free, then $529.99/year
              </Text>
            </View>


            <View className="absolute top-0 right-0 bg-green-500 px-2 py-1 rounded-md">
              <Text className="text-white text-[10px] font-rubik-bold">Save 50%</Text>
            </View>
          </TouchableOpacity>

        </View>


        <View className="mt-6">
          <TouchableOpacity className="bg-[#28AF6E] p-4 rounded-xl" onPress={handleTryFree} >
            <Text className="text-white text-center font-bold text-lg">Try free for 3 days</Text>
          </TouchableOpacity>

        </View>


        <View className=" justify-center space-x-6 mt-6 mb-6 items-center">
          <Text className='text-[#FFFFFF85] font-rubik text-[9px] text-center' >After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable</Text>
          <View className='flex-row mt-4 items-center  '>
            <Text className="text-[#FFFFFF80] text-xs font-rubik mr-1">Terms</Text>
            <Text className="text-[#FFFFFF80] text-md  mr-1">•</Text>
            <Text className="text-[#FFFFFF80] text-xs font-rubik mr-1">Privacy</Text>
            <Text className="text-[#FFFFFF80] text-md  mr-1">•</Text>
            <Text className="text-[#FFFFFF80] text-xs font-rubik ">Restore</Text>
          </View>
        </View>

      </SafeAreaView>
    </ImageBackground>
  );
}
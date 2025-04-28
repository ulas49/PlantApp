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

        <View className="flex-row justify-between mt-10  gap-2  ">
          <FlatList
            data={features}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (<FeatureCard icon={item.icon} title={item.title} subtitle={item.subtitle} />)}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-1" />}
          />
        </View>

        <View className="mt-10 ">

          <PlanCard
            selected={selectedPlan === "month"}
            title='1 Month'
            description='$2.99/month, auto renewable'
            onPress={() => setSelectedPlan("month")}
          />

          <PlanCard
            selected={selectedPlan === "year"}
            title='1 Year'
            description='First 3 days free, then $529.99/year'
            onPress={() => setSelectedPlan("year")}
            badge="Save 50%"
          />
        </View>


        <View className="mt-6">
          <TouchableOpacity className="bg-[#28AF6E] p-4 rounded-xl" onPress={handleTryFree} >
            <Text className="text-white text-center font-bold text-lg">Try free for 3 days</Text>
          </TouchableOpacity>

        </View>


        <View className=" justify-center space-x-6 mt-6 mb-6 items-center">
          <Text className='text-[#FFFFFF85] font-rubik text-[9px] text-center' >After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable</Text>
          <View className='flex-row mt-4 items-center '>
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
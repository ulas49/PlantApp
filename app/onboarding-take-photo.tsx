import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OnboardingTakePhoto() {
  const router = useRouter();

  return (

 <ImageBackground
 source={require('../assets/images/Onboarding1BG.png')}
 resizeMode="cover"
 className='flex-1 '
 >
     <SafeAreaView className="flex-1 justify-between items-center">
   


   <View className="items-center mt-[35px] w-[330px] ">
       <Text className="text-[28px] font-rubik-medium text-[#13231B] ">
         Take a photo to <Text className="font-rubik-bold ">identify</Text> the plant!
       </Text>
     </View>


   
     <View className="w-full h-[530px] items-center justify-center  ">
       <Image
         source={require('../assets/images/Onboarding1.png')}
         resizeMode="contain"
         className="w-[375px] h-[700px]   mt-40"
       />
     </View>

   <View className="w-full items-center mb-5">
     <TouchableOpacity
       onPress={() => router.replace('/onboarding-care-guide')}
       className="bg-[#28AF6E] w-[327px] p-[18px] rounded-xl "
     >
       <Text className="text-white text-center font-bold text-lg">Continue</Text>
     </TouchableOpacity>

     <View className="flex-row items-center justify-center space-x-2 mt-6">
       <View className="w-3 h-3 rounded-full bg-black mr-2"  />
       <View className="w-2 h-2 rounded-full bg-gray-400 opacity-50 mr-2" />
       <View className="w-2 h-2 rounded-full bg-gray-400 opacity-50 " />

     </View>
   </View>

 </SafeAreaView>
 </ImageBackground>

  );
}

import { View, Text, ImageBackground, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';



export default function Paywall() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/images/Paywallimage.png')}
      resizeMode="cover"
      className="flex-1"
    >
      <SafeAreaView className="flex-1 px-6">


        <View className=" justify-center flex-1 mt-24">
          <Text className="text-white text-[30px] font-rubik-bold">
            PlantApp <Text className="font-rubik">Premium</Text>
          </Text>
          <Text className="text-[#FFFFFFB2] text-opacity-70 text-base font-rubik mt-2">
            Access All Features
          </Text>
        </View>

        <View className="flex-row justify-between mt-10  gap-2  ">
          <View className="rounded-[12px] p-4 w-[156px]  h-[130px] bg-[#233029B2]  " >
            <Image source={require('../assets/images/PaywallScanIcon.png')} />
            <Text className="text-white  font-rubik-medium text-xl mt-2">Unlimited</Text>
            <Text className="text-white  font-rubik text-[12px] mt-1">Plant Identify</Text>
          </View>
          <View className="rounded-[12px] p-4 w-[156px]  h-[130px] bg-[#233029B2] " >
            <Image source={require('../assets/images/PaywallTimeIcon.png')} />
            <Text className="text-white  font-rubik-medium text-xl mt-2">Faster</Text>
            <Text className="text-white  font-rubik text-[12px] mt-1">Process</Text>
          </View>
          <View className="rounded-[12px] p-4 w-[156px]  h-[130px] bg-[#233029B2] " >
            <Image source={require('../assets/images/PaywallHalfIcon.png')} />
            <Text className="text-white  font-rubik-medium text-xl mt-2">Detailed</Text>
            <Text className="text-white  font-rubik text-[12px] mt-1">Plant care</Text>
          </View>
        </View>

        <View className="mt-10">

          <TouchableOpacity className="border border-white/20 bg-[#1C2923] rounded-xl p-4 flex-row items-center  mb-6">
            <View className='w-8 h-8 rounded-3xl bg-[#2E3A34] mr-4' />
            <View>
              <Text className="text-white font-rubik-bold" > 1 Month</Text>
              <Text className="text-gray-400  text-xs mt-1 font-rubik">
                $2.99/month, <Text className='font-rubik-medium text-[#FFFFFFB2]'>auto renewable</Text>
              </Text></View>
          </TouchableOpacity>


          <TouchableOpacity className="border-2 border-green-500 bg-black/20 rounded-xl p-4 relative flex-row items-center">
            <View className='w-8 h-8 rounded-3xl bg-[#28AF6E] mr-4 justify-start relative' >
              <View className='w-3 h-3 rounded-3xl bg-white absolute  top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2' />
            </View>
            <View>
              <Text className="text-white font-rubik">1 Year</Text>
              <Text className="text-gray-400  text-xs mt-1 font-rubik">
                First 3 days free, then $529.99/year
              </Text>
            </View>




            <View className="absolute top-2 right-2 bg-green-500 px-2 py-1 rounded-md">
              <Text className="text-white text-[10px] font-rubik-bold">Save 50%</Text>
            </View>
          </TouchableOpacity>
        </View>


        <View className="mt-6">
          <TouchableOpacity className="bg-[#28AF6E] p-4 rounded-xl">
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
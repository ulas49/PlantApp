import { View, Text, ImageBackground, Image, TouchableOpacity, ActivityIndicator, TouchableHighlight, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { useRouter } from 'expo-router'

const GetStartedScreen = () => {
   const router = useRouter();

  const [fontsLoaded] = useFonts({
    'Rubik-normal': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-semibold': require('../assets/fonts/Rubik-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="green" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <ImageBackground
      source={require('../assets/images/Startedbackground.png')}
      resizeMode="cover"
      className='flex-1 '
    >
      <SafeAreaView className='flex-1 justify-between  items-center'>

        <View className='w-[300px] h-[85px] mt-[35px]  gap-2 '>
          <Text className=" text-[28px] text-[#13231B] font-rubik">
            Welcome to <Text className="font-rubik-semibold">PlantApp</Text>
          </Text>
          <Text className="text-[#13231BB2] leading-[22px] font-rubik ">
            Identify more than 3000+ plants and 88% accuracy.
          </Text>

          <View className='w-full h-[499px] relative  items-center justify-center '>
            <Image
              source={require('../assets/images/StartedImage.png')}
              resizeMode='contain'

            />
          </View>
        </View>

        <View  className='items-center mb-2' >
          <TouchableOpacity
            className="bg-[#28AF6E] p-[18px] rounded-xl w-[327px]"
            onPress={() => router.push('/onboarding')}
          >
            <Text className="text-white text-center font-bold text-lg ">Get Started</Text>
          </TouchableOpacity>      

            <Text className=" text-[11px] leading-[15px] text-[#597165B2] text-center mt-4 font-rubik w-[232px]">
            By tapping next, you are agreeing to PlantID{' '}
            <Text className="underline">Terms of Use</Text> &{' '}
            <Text className="underline">Privacy Policy</Text>.
          </Text> 
        </View>
      </SafeAreaView>

    </ImageBackground>

  )
}

export default GetStartedScreen
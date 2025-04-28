import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ScanScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center px-6">
      <Ionicons name="camera-outline" size={120} color="#28AF6E" />
      <Text className="text-2xl font-rubik-semibold text-[#13231B] mt-6">
        Scan your plant
      </Text>
      <Text className="text-gray-400 font-rubik text-center text-base mt-4">
        Capture your plant using your camera and identify it easily!
      </Text>
      <TouchableOpacity
        className="bg-[#28AF6E] mt-10 p-4 px-10 rounded-xl"
        activeOpacity={0.7}
        onPress={() => {}}
      >
        <Text className="text-white font-rubik-semibold text-lg">Start Scan</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

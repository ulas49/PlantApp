import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <Ionicons name="person-outline" size={80} color="#28AF6E" />
      <Text className="text-2xl font-rubik-semibold text-[#13231B] mt-4">
        Coming Soon
      </Text>
      <Text className="text-gray-400 font-rubik text-sm mt-2">
      This feature is under development.
      </Text>
    </SafeAreaView>
  );
}

import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ComingSoonProps {
  iconName: keyof typeof Ionicons.glyphMap; 
  title?: string;
  subtitle?: string;
}

export default function ComingSoon({ iconName, title, subtitle }: ComingSoonProps) {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Ionicons name={iconName} size={80} color="#28AF6E" />
      <Text className="text-2xl font-rubik-semibold text-[#13231B] mt-4">
        {title || 'Coming Soon'}
      </Text>
      <Text className="text-gray-400 font-rubik text-sm mt-2 text-center px-10">
        {subtitle || 'This feature is under development.'}
      </Text>
    </View>
  );
}

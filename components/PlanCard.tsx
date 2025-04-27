import { TouchableOpacity, View, Text } from 'react-native';

interface PlanCardProps {
  selected: boolean;
  title: string;
  description: string;
  badge?: string;
  onPress?: () => void;
}

export default function PlanCard({ selected, title, description, badge, onPress }: PlanCardProps) {
  return (
    <TouchableOpacity 
      className={`rounded-xl p-4 flex-row items-center relative mb-2  ${selected ? 'border-green-500 bg-black/20 border-[1.5px]' : 'border-[#FFFFFF4D] bg-[#1C2923] border '}`}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View className={`w-8 h-8 rounded-3xl mr-4 ${selected ? 'bg-[#28AF6E]  justify-start relative' : 'bg-[#2E3A34]'} `}>
        {selected && <View className='w-3 h-3 rounded-3xl bg-white absolute  top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2' />}
      </View>

      <View>
        <Text className="text-white font-rubik-bold">{title}</Text>
        <Text className="text-gray-400 text-xs mt-1 font-rubik">{description}</Text>
      </View>

      {badge && (
           <View className="absolute top-0 right-0 bg-green-500 px-2 py-1 rounded-md">
           <Text className="text-white text-[10px] font-rubik-bold">{badge}</Text>
         </View>
      )}
    </TouchableOpacity>
  );
}

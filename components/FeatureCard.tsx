import { View, Text, Image } from 'react-native'
import React from 'react'

interface FeatureCardProps {
    icon: any,
    title: string,
    subtitle: string
}

const FeatureCard = ({ icon, title, subtitle }: FeatureCardProps) => {
    return (
        <View className="rounded-[12px] p-4 w-[156px]  h-[130px] bg-[#233029B2]  " >
            <Image source={icon} />
            <Text className="text-white  font-rubik-medium text-xl mt-2">{title}</Text>
            <Text className="text-white  font-rubik text-[12px] mt-1">{subtitle}</Text>
        </View>
    )
}
export default FeatureCard
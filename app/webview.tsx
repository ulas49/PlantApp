import { View, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function WebviewScreen() {
    const { url } = useLocalSearchParams();
    const router = useRouter();

    if (!url) {
        return null;
    }

    return (
        <View className="flex-1 bg-white">

            <View className="flex-row items-center mt-14 px-5">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

            </View>
            <WebView
                source={{ uri: url as string }}
                style={{ flex: 1 }}
                startInLoadingState={true}
            />
        </View>
    );
}

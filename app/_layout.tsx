import { Stack } from "expo-router";
import './global.css' 

export default function RootLayout() {

  return <Stack 
  screenOptions={{
    headerShown:false,
    animation: 'fade'
  }}
  > 
  <Stack.Screen name="paywall" options={{ animation: 'slide_from_bottom' }} />
  </Stack>;
}

import { Stack } from "expo-router";
import { Provider } from "react-redux"
import './global.css'
import { store } from "@/store";

export default function RootLayout() {

  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade'
        }}
      >
        <Stack.Screen name="paywall" options={{ animation: 'slide_from_bottom' }} />
      </Stack>
    </Provider>


  );
}

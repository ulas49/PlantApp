import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, Image, TouchableOpacity } from "react-native";

export default function TabLayout() {
  const { height } = Dimensions.get("window"); 
  const isSmallDevice = height < 700; // Bazı küçük cihazlarda scan butonu fazla yukarıda kalmasın diye yaptım.
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#28AF6E",
        tabBarInactiveTintColor: "#AAAAAA",
        tabBarStyle: {
          borderTopWidth: 0,
          height: 84,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="diagnose"
        options={{
          tabBarLabel: "Diagnose",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          tabBarButton: ({ onPress }) => (
            <TouchableOpacity
              onPress={onPress}
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                backgroundColor: "#28AF6E",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: isSmallDevice ? 10 : 30,
                alignSelf: "center",
                zIndex: 10,
              }}
            >
              <Image
                source={require("../../assets/images/ScanwithoutBG.png")}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="mygarden"
        options={{
          tabBarLabel: "My Garden",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="leaf-outline" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}

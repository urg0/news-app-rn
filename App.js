import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/utils/api.service";

import LandingScreen from "./src/screens/LandingScreen";
import AllNews from "./src/screens/AllNews";
import NewsDetails from "./src/screens/NewsDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Landing Page" component={LandingScreen} />
            <Stack.Screen name="All News" component={AllNews} />
            <Stack.Screen name="News Details" component={NewsDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}

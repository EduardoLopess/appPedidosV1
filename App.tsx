import { useEffect } from "react";
import { AppState, Text, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { NavigationContainer } from "@react-navigation/native";
import { BottonNavigation } from "./navigation/Index";
import { MenuScreen } from "./screens/menu-product/Index";
import { TableScreen } from "./screens/table/Index";
import { CartScreen } from "./screens/cart/Index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


export type RootTabParamList = {
  Cardapio: undefined,
  Mesas: undefined,
  Carrinho: undefined
}

const Tab = createBottomTabNavigator()

export default function App() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
    const subscription = AppState.addEventListener(
      "change",
      async (nextAppState) => {
        if (nextAppState === "active") {
          await NavigationBar.setVisibilityAsync("hidden");
        }
      }
    );
    return () => subscription.remove();
  }, []);

  return  (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={() => <BottonNavigation/>}
        screenOptions={{
          headerTitleAlign: 'center'
        }}>
        
          <Tab.Screen
            name='Cardapio'
            component={MenuScreen}
            options={{headerTitle: 'CARDÁPIO'}}
          />

          <Tab.Screen
            name='Mesas'
            component={TableScreen}
            options={{headerTitle: 'MESAS'}}
          />

          <Tab.Screen
            name='Carrinho'
            component={CartScreen}
            options={{headerTitle: 'CARRINHO'}}
          />
        
        </Tab.Navigator>

    </NavigationContainer>
  );
}

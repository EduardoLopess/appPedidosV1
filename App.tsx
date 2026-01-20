import { useEffect } from "react";
import { AppState, Text, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { NavigationContainer } from "@react-navigation/native";
import { BottonNavigation } from "./src/navigation/Index";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TableScreen } from "./src/screens/table/Index";
import { MenuScreen } from "./src/screens/menu-product/Index";
import { CartScreen } from "./src/screens/cart/Index";
import { OrderProvider } from "./src/context/orderFlow";
import { TableIdentificationDialog } from "./src/components/dialog/Index";
import { ControllOrderProvider } from "./src/context/controllOrder";
import { Mensage } from "./src/components/mensage/Index";

export type RootTabParamList = {
  Cardapio: undefined;
  Mesas: undefined;
  Carrinho: undefined;
};

const Tab = createBottomTabNavigator();

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

  return (
    <ControllOrderProvider>
      <OrderProvider>
        <Mensage/>
        <TableIdentificationDialog />
        <NavigationContainer>
          <Tab.Navigator
            tabBar={() => <BottonNavigation />}
            screenOptions={{
              headerTitleAlign: "center",
            }}
          >
            <Tab.Screen
              name="Mesas"
              component={TableScreen}
              options={{ headerTitle: "MESAS" }}
            />

            <Tab.Screen
              name="Cardapio"
              component={MenuScreen}
              options={{ headerTitle: "CARDÁPIO" }}
            />

            <Tab.Screen
              name="Carrinho"
              component={CartScreen}
              options={{ headerTitle: "CARRINHO" }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </OrderProvider>
    </ControllOrderProvider>
  );
}

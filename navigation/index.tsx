/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, ColorSchemeName, Pressable, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TransactionsSecreen from '../screens/Transactions';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal', title: 'Add Transaction' }}>
        <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Tracker"
      screenOptions={{
        tabBarActiveTintColor: "linear-gradient(135deg, rgba(82,183,171,1) 0%, rgba(64,145,108,1) 100%)",
        tabBarStyle: { 
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          height: '12%', 
          position: 'absolute', 
          borderTopLeftRadius: 46.2, 
          borderTopRightRadius: 46.2,
          borderWidth: 0,
          shadowColor: 'black',
          shadowOpacity: 0.2,
        },
        tabBarLabelStyle: {
          paddingBottom: 8
        },
        headerStyle: {
          backgroundColor: Colors[colorScheme].background,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
            width: 0
          }
        }
      }}
      sceneContainerStyle={{
        height: '100%',
      }}>
      <BottomTab.Screen
        name="Tracker"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'Tracker'>) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="dot-circle-o" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Transactions"
        component={TransactionsSecreen}
        options={({ navigation }: RootTabScreenProps<'Transactions'>) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="dollar" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('AddTransaction')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome size={20} name="plus" color="white" style={{ paddingRight: 32}} />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Initiatives"
        component={TransactionsSecreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="handshake-o" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={32} {...props}/>;
}

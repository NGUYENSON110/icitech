import * as React from 'react';
import { Text, View, Image, ImageSourcePropType, Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerActions, useNavigation } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
interface TabBarIconProps {
  focus: boolean;
  source: ImageSourcePropType;
}
function SignInScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SignInScreen!</Text>
    </View>
  );
}
function SignUpScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SignUp!</Text>
    </View>
  );
}
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
function JobsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Jobs!</Text>
    </View>
  );
}
function ScheduleScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Schedule!</Text>
    </View>
  );
}
function ContactsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contacts!</Text>
    </View>
  );
}
function CrmScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CRM!</Text>
    </View>
  );
}
function TimeclockScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Timeclock!</Text>
    </View>
  );
}
function InvoiceScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>
      <Text>Invoice!</Text>
    </View>
  );
}
function EstimatesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Estimates!</Text>
    </View>
  );
}
function ReportScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Report!</Text>
    </View>
  );
}
function MoreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>More!</Text>
    </View>
  );
}
const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='HOME'>
      <Stack.Screen
        name="LOGIN"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SIGNUP"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HOME"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  const TabBarIcon: React.FC<TabBarIconProps> = ({ focus, source }) => {
    let tintColor = focus ? '#007AFC' : '#728FAB';
    return (
      <Image
        source={source}
        style={{
          width: 24,
          height: 24,
          tintColor: tintColor,
        }}
      />
    );
  };
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#F2F8FF',
          marginBottom: 15,
          borderRadius: 22,
          height: 67,
          position: 'absolute',
          left: 10,
          right: 10,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focus={focused}
              source={require('./src/iconHome.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focus={focused}
              source={require('./src/jobs.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focus={focused}
              source={require('./src/schedule.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={() => null}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focus={focused}
              source={require('./src/more.png')}
            />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            Alert.alert('123')
            // navigation.dispatch(DrawerActions.openDrawer());
          },
        })}
      />
    </Tab.Navigator>
  )
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
     <Drawer.Screen name="Contacts" component={ContactsScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <DrawerNavigator/> */}
      {/* <TabNavigator/> */}
    </NavigationContainer>
  );
}
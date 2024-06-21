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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SIGNUP"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HOME"
        component={TabNavigator}
        options={{ headerShown: false }}
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
          justifyContent:'center',
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
        component={DrawerNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focus={focused}
              source={require('./src/more.png')}
            />
          ),
        }}
      // listeners={({ navigation }) => ({
      //   tabPress: e => {
      //     e.preventDefault();
      //     // Alert.alert('123')
      //     navigation.dispatch(DrawerActions.openDrawer());

      //   },
      // })}
      />
    </Tab.Navigator>
  )
};
const DrawerNavigator = () => {
  return (

    <Drawer.Navigator
      initialRouteName="HOME"
      drawerContent={props => {
        const { routeNames, index } = props.state;
        const focused = routeNames[index];
        console.log('focused', focused);

        return (
          <DrawerContentScrollView {...props}>
            <View style={{ marginTop: 12, marginLeft: 24 }}>
              <Image source={require('./src/Logo.png')} style={{ height: 56, width: 56 }} />
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#E5EAEF',
                  marginTop: 10,
                }}>
              </View>
            </View>
            <DrawerItem
              label={'Home'}
              icon={() => <Image source={require('./src/home.png')} style={{ height: 24, width: 24 }} />}
              onPress={() => {
                Alert.alert('123')
              }}
            // focused={focused === SCREENS.PROFILE}
            // activeBackgroundColor={COLORS.ORANGE}
            // inactiveBackgroundColor={COLORS.GRAY_LIGHT}
            // inactiveTintColor={COLORS.BLACK}
            // activeTintColor={COLORS.WHITE}
            />
            <DrawerItem
              label={'Job Management'}
              icon={() => <Image source={require('./src/jobs.png')} style={{ height: 24, width: 24 }} />}
              onPress={() => {
                Alert.alert('123')
              }}
            // focused={focused === SCREENS.ABOUT}
            // activeBackgroundColor={COLORS.ORANGE}
            // inactiveBackgroundColor={COLORS.GRAY_LIGHT}
            // inactiveTintColor={COLORS.BLACK}
            // activeTintColor={COLORS.WHITE}
            />
            <DrawerItem
              label={'Schedule'}
              icon={() => <Image source={require('./src/schedule.png')} style={{ height: 24, width: 24 }} />}
              onPress={() => {
                Alert.alert('123')
              }}
            // focused={focused === SCREENS.ABOUT}
            // activeBackgroundColor={COLORS.ORANGE}
            // inactiveBackgroundColor={COLORS.GRAY_LIGHT}
            // inactiveTintColor={COLORS.BLACK}
            // activeTintColor={COLORS.WHITE}
            />
            <DrawerItem
              label={'Contacts'}
              icon={() => <Image source={require('./src/contacts.png')} style={{ height: 24, width: 24 }} />}
              onPress={() => {
                Alert.alert('123')
              }}
            // focused={focused === SCREENS.ABOUT}
            // activeBackgroundColor={COLORS.ORANGE}
            // inactiveBackgroundColor={COLORS.GRAY_LIGHT}
            // inactiveTintColor={COLORS.BLACK}
            // activeTintColor={COLORS.WHITE}
            />
            <DrawerItem
              label={'CRM'}
              icon={() => <Image source={require('./src/crm.png')} style={{ height: 24, width: 24 }} />}
              onPress={() => {
                Alert.alert('123')
              }}
            // focused={focused === SCREENS.ABOUT}
            // activeBackgroundColor={COLORS.ORANGE}
            // inactiveBackgroundColor={COLORS.GRAY_LIGHT}
            // inactiveTintColor={COLORS.BLACK}
            // activeTintColor={COLORS.WHITE}
            />
            <DrawerItem
              label={'Timeclock'}
              icon={() => <Image source={require('./src/timeclock.png')} style={{ height: 24, width: 24 }} />}
              onPress={() => {
                Alert.alert('123')
              }}
            // focused={focused === SCREENS.ABOUT}
            // activeBackgroundColor={COLORS.ORANGE}
            // inactiveBackgroundColor={COLORS.GRAY_LIGHT}
            // inactiveTintColor={COLORS.BLACK}
            // activeTintColor={COLORS.WHITE}
            />
            <DrawerItem
              label={'Invoice'}
              icon={() => <Image source={require('./src/invoice.png')} style={{ height: 24, width: 24 }} />}
              onPress={() => {
                Alert.alert('123')
              }}
            // focused={focused === SCREENS.ABOUT}
            // activeBackgroundColor={COLORS.ORANGE}
            // inactiveBackgroundColor={COLORS.GRAY_LIGHT}
            // inactiveTintColor={COLORS.BLACK}
            // activeTintColor={COLORS.WHITE}
            />
            <DrawerItem
              label={'Estimates'}
              icon={() => <Image source={require('./src/estimates.png')} style={{ height: 24, width: 24 }} />}
              onPress={() => {
                Alert.alert('123')
              }}
            // focused={focused === SCREENS.ABOUT}
            // activeBackgroundColor={COLORS.ORANGE}
            // inactiveBackgroundColor={COLORS.GRAY_LIGHT}
            // inactiveTintColor={COLORS.BLACK}
            // activeTintColor={COLORS.WHITE}
            />
            <DrawerItem
              label={'Reports'}
              icon={() => <Image source={require('./src/reports.png')} style={{ height: 24, width: 24 }} />}
              onPress={() => {
                Alert.alert('123')
              }}
            // focused={focused === SCREENS.ABOUT}
            // activeBackgroundColor={COLORS.ORANGE}
            // inactiveBackgroundColor={COLORS.GRAY_LIGHT}
            // inactiveTintColor={COLORS.BLACK}
            // activeTintColor={COLORS.WHITE}
            />



          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
    // <Drawer.Navigator initialRouteName="Contacts">

    // </Drawer.Navigator>
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
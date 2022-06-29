import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/features/Home';
import New from './src/features/New';
import Perso from './src/features/Perso';
import { AntDesign, Entypo, Ionicons} from '@expo/vector-icons'
import useTheme from './src/hooks/theme';

const Tab = createBottomTabNavigator();

export const theme = createContext({})

export default function App() {
	const [dark, setDark] = useState(false);
	const {color}=useTheme();
	return (
		<theme.Provider value={{ dark, setDark }}>
			<NavigationContainer>
				<Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
					<Tab.Screen
						name="Home"
						component={Home}
						options={{
							tabBarIcon: ({ focused, color, size }) => {
								return <Entypo name="folder" size={24} color="#27569C"/>;
							},
						}}
					/>
					<Tab.Screen
						name="New"
						component={New}
						options={{
							tabBarIcon: ({ focused, color, size }) => {
								return <AntDesign name="form" size={24} color="#27569C"/>;
							},
						}}
					/>
					<Tab.Screen
						name="Perso"
						component={Perso}
						options={{
							tabBarIcon: ({ focused, color, size }) => {
								return <Ionicons name="ios-person-circle" size={24} color="#27569C"/>;
							},
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</theme.Provider>

	);
}

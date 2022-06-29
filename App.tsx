import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/features/Home';
import Detail from './src/features/Perso';
import Feather from "@expo/vector-icons/Feather"

const Tab = createBottomTabNavigator();

export const theme = createContext({})

export default function App() {
	const [dark, setDark] = useState(false);
	return (
		<theme.Provider value={{ dark, setDark }}>
			<NavigationContainer>
				<Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
					<Tab.Screen
						name="Home"
						component={Home}
						options={{
							tabBarIcon: ({ focused, color, size }) => {
								return <Feather name="activity" size={30} />;
							},
						}}
					/>
					<Tab.Screen name="Detail" component={Detail} />
				</Tab.Navigator>
			</NavigationContainer>
		</theme.Provider>

	);
}

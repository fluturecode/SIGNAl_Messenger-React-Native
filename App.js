import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { StyleSheet } from "react-native"
import "react-native-gesture-handler"
import AddChatScreen from "./screens/AddChatScreen"
import ChatScreen from "./screens/ChatScreen"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"

const Stack = createStackNavigator()

const globalScreenOptons = {
	headerStyle: { backgroundColor: "#2C6BED" },
	headerTitleStyle: { color: "white" },
	headerTintColor: "white",
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={globalScreenOptons}>
				<Stack.Screen name='Login' component={LoginScreen} />
				<Stack.Screen name='Register' component={RegisterScreen} />
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='AddChat' component={AddChatScreen} />
				<Stack.Screen name='Chat' component={ChatScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})

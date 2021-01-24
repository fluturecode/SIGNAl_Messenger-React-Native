import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Input, Image } from "react-native-elements"

const LoginScreen = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<View>
			<Image
				style={{ width: 200, height: 200 }}
				source={{
					uri:
						"https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
				}}
			/>
			<View>
				<Input
					placeholder='Email'
					autoFocus
					type='email'
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					placeholder='Password'
					secureTextEntry
					type='password'
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
				<Button containerStyle={styles.button} title='Login' />
				<Button
					containerStyle={styles.button}
					title='Register'
					type='outline'
				/>
			</View>
		</View>
	)
}

export default LoginScreen

const styles = StyleSheet.create({
	button: {
		width: 200,
		marginTop: 10,
	},
})

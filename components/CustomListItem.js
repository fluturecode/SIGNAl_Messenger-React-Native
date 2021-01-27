import React from "react"
import { StyleSheet } from "react-native"
import { Avatar, ListItem } from "react-native-elements"

const CustomListItem = ({ id, chatName, enterChat }) => {
	return (
		<ListItem>
			<Avatar
				rounded
				source={{
					uri:
						"https:/cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
				}}
			/>
			<ListItem.Content>
				<ListItem.Title style={{ fontWeight: "800" }}>
					YouTube Chat
				</ListItem.Title>
				<ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
					This is a Subtitle that is too long for this line so we use
					elipsize....
				</ListItem.Subtitle>
			</ListItem.Content>
		</ListItem>
	)
}

export default CustomListItem

const styles = StyleSheet.create({})

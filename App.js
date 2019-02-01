import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Header, AlbumList } from "./src/components";
export default class App extends Component {
	render() {
		return (
			<View>
				<Header headerText={"Albums"} />
				<AlbumList />
			</View>
		);
	}
}

const styles = StyleSheet.create({});

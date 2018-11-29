import React, { Component } from "react";
import "./App.css";
import LinkList from "./components/LinkList";

class App extends Component {
	render() {
		return (
			<div className="MainApp">
				<LinkList />
			</div>
		);
	}
}

export default App;

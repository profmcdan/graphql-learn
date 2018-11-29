import React, { Component } from "react";
import "./App.css";
import LinkList from "./components/LinkList";
import CreateLink from "./components/CreateLink";

class App extends Component {
	render() {
		return (
			<div className="MainApp">
				<CreateLink />
			</div>
		);
	}
}

export default App;

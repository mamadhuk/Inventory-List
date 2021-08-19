import React, { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			errorInfo: null,
			hasError: false,
			showMaintenanceScreen: false,
		};
	}

	componentDidMount() {}

	static getDerivedStateFromError(error) {
		console.log(error);
		return {
			hasError: true,
		};
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			error: error,
			errorInfo: errorInfo,
		});
	}

	render() {
		if (this.state.hasError) {
			return (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					{this.state.showMaintenanceScreen ? (
						<div>{this.state.error && this.state.error.toString()}</div>
					) : (
						<div>
							<h1>Oops, Something went wrong.</h1>
							<h3 style={{ textAlign: "center" }}>
								Try Reloading the page <br />{" "}
								<button onClick={() => window.location.reload()}>Reload</button>
							</h3>
							<pre>{this.state.error && this.state.error.toString()}</pre>
							<pre>
								{this.state.errorInfo && this.state.errorInfo.componentStack}
							</pre>
						</div>
					)}
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;

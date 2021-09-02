import { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./App.css";
import {
	auth,
	createUserProfileDocument,
} from "./components/firebase/firebase.utils";
import Header from "./components/header/Header";
import Checkout from "./pages/checkout/Checkout";
import HomePage from "./pages/homepage/HomePage";
import LoginAndRegister from "./pages/login-register/LoginAndRegister";
import Shop from "./pages/shop/Shop";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";

class App extends Component {
	unSubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
				console.log(userAuth);
			}

			setCurrentUser({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		return (
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={Shop} />
					<Route path="/checkout" component={Checkout} />
					<Route
						exact
						path="/login-register"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<LoginAndRegister />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

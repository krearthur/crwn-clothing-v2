import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";
import { setIsCartOpen } from "./store/cart/cart.action";
import { selectIsCartOpen } from "./store/cart/cart.selector";

const App = () => {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);

	useEffect(() => {
		dispatch(checkUserSession());
	}, []);

	const closeCartHandler = () => {
		if (isCartOpen) {
			console.log("close cart");
			dispatch(setIsCartOpen(false));
		}
	};

	return (
		<div onClick={closeCartHandler}>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="shop/*" element={<Shop />} />
					<Route path="auth" element={<Authentication />} />
					<Route path="checkout" element={<Checkout />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;

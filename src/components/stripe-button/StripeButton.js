import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;

	const publishableKey =
		"pk_test_51JVBTsEYKGe2yYU577AOh97U4AF7TkVPqUxChbCKhReIzWDfynixF1qJZMAobZVCIWZLwIlM8wfoMVECyPXJBwmF008blAgCIu";

	const onToken = (token) => {
		console.log(token);
		alert("Payment successfully !");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="PNL Shop Clothing"
			billingAddress
			shippingAddress
			image="	https://soyte.phutho.gov.vn/Portals/0/178090737_369188661112780_2090405559360655052_n.jpg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Payment Right Now !"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;

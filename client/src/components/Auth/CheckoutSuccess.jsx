import React, { useState } from "react";
import axios from "axios";
import HeaderStudent from "../CommonComponents/header/Header";
import StripeCheckout from "react-stripe-checkout";
import swal from "sweetalert";

import { Link, useHistory } from "react-router-dom";

const CheckoutSuccess = () => {
  const history = useHistory();
  const [product] = useState({
    name: "Sample Book",
    price: 120,
    description: "This is a sample book",
  });
  async function handleToken(token, addresses) {
    const response = await axios.post("http://localhost:5000/auth/checkout", {
      token,
      product,
    });
    console.log("resonse", response);
    console.log(response.status);

    if (response.status === 200 || response.status === 201) {
      sessionStorage.setItem(
        "PaymentStatus",
        true
      );
      swal("Payment Successful!", {
        buttons: false,
        timer: 1000,
      });
    } else {
      swal("Something went wrong!", {
        buttons: false,
        timer: 1000,
      });
    }
  }
  return (
    <div>
      <HeaderStudent />
      <StripeCheckout
        className="center"
        stripeKey="pk_test_51Lslh7SBtgHFMVIcORqVL1VHQHxykl4EyfSgdupVBM2WcRax1IdPjhaLTentSaT08L9DBtjpYyL1XS9We8xXLR8d00gfS07dkj"
        token={handleToken}
        amount={product.price * 100}
        name="Sample Book"
      >
        <button onClick={() => history.push("/Auth")}>Enroll now</button>
      </StripeCheckout>
    </div>
  );
};

export default CheckoutSuccess;

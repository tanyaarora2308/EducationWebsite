import React, { useState } from "react";
import axios from "axios";
import HeaderStudent from "../../CommonComponents/header/Header";
import "./Checkout.css";
import StripeCheckout from "react-stripe-checkout";
import swal from "sweetalert";

import { Link, useHistory } from "react-router-dom";

const Checkout = () => {
  const history = useHistory();
  let price;
  if(JSON.parse(sessionStorage.getItem("RegisterData"))?.courses.size === 2){
    price = 30000;
  }else price = 15000;
  const [product] = useState({
    name: "Enrollment Payment",
    price: price,
  });
  async function handleToken(token, addresses) {
    const response = await axios.post("http://localhost:5000/auth/checkout", {
      token,
      product,
    });
    console.log("resonse", response);
    console.log(response.status);

    if (response.status === 200 || response.status === 201) {
      sessionStorage.setItem("PaymentStatus", true);
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
      <section class="section-one">
        <div class="container">
          <h1>Hi {JSON.parse(sessionStorage.getItem("RegisterData")).name}!</h1>
          <p>
            You are enrolling for the following courses:{" "}
            {JSON.parse(sessionStorage.getItem("RegisterData"))?.courses.map(
              (a) => {
                return (
                  <span style={{ textTransform: "capitalize" }}>{a}: Rs. 15000,  </span>
                );
              }
            )}
          </p>
          <StripeCheckout
            className="center"
            stripeKey="pk_test_51Lslh7SBtgHFMVIcORqVL1VHQHxykl4EyfSgdupVBM2WcRax1IdPjhaLTentSaT08L9DBtjpYyL1XS9We8xXLR8d00gfS07dkj"
            token={handleToken}
            amount={product.price * 100}
            name="Payment"
          >
            <button>Enroll now</button>
          </StripeCheckout>
        </div>
      </section>
    </div>
  );
};

export default Checkout;

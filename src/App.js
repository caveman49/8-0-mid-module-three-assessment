import { Component } from "react";
import productData from "./data/productData";
// import formatPrice from "./helpers/formatPrice";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      checkout: productData.name,
    };
  }

  render() {
    return (
      <body>
        <h1>Mod 3 Mid</h1>
        <productData className="products" />
        <form onSubmit={this.handleFormSubmit} id="checkout">Form</form>
      </body>
    );
  }
}

export default App;

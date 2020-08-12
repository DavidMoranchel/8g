import React, { Component } from "react";

// Components
import Input from "../../components/Input";

// CSS
import "./CurrencyConverter.css";

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityMXN: 0,
      quantityDLS: 0,
    };
    this.handleCurrencyInput = this.handleCurrencyInput.bind(this);
  }

  handleCurrencyInput(name, value) {
    let mxn, dls;
    console.log(name, value);
    if (name === "quantityMXN") {
      mxn = value;
      dls = mxn / 22.42;
    } else {
      dls = value;
      mxn = dls * 22.24;
    }
    this.setState({
      quantityMXN: mxn,
      quantityDLS: dls,
    });
  }

  render() {
    const { quantityMXN, quantityDLS } = this.state;
    return (
      <div>
        <form>
          <Input
            type="number"
            name="quantityMXN"
            value={quantityMXN}
            callback={this.handleCurrencyInput}
          />
          <Input
            type="number"
            name="quantityDLS"
            value={quantityDLS}
            callback={this.handleCurrencyInput}
          />
        </form>
      </div>
    );
  }
}

export default CurrencyConverter;

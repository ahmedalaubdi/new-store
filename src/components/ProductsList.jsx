import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";

import { ProductConsumer } from "../context";

class ProductsList extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(hello) => {
                  return hello.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductsList;

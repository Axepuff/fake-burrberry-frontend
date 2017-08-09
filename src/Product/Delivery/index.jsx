import React, { Component } from "react";
import Row from "../../common/Row";
import Col from "../../common/Col";

class Delivery extends Component {
  render() {
    return (
      <div className="delivery">
        <Row>
          <Col md="7">
            <img
              src="images/product/5_s.jpg"
              alt="Delivery"
              class="delivery-img"
            />
          </Col>
          <Col md="5">
            <h2 className="delivery-title">Delivery</h2>
            <div className="delivery-feauture">
              <h3 className="delivery-feauture__title">
                Free Next Day Delivery
              </h3>
              <p className="delivery-feauture__text">
                Order before 7pm Monday to Thursday for delivery the next day
              </p>
            </div>
            <div className="delivery-feauture">
              <h3 className="delivery-feauture__title">Collect-in-Store</h3>
              <p className="delivery-feauture__text">
                Order online today and pick up your items in store as early as
                tomorrow
              </p>
            </div>
            <div className="delivery-feauture">
              <h3 className="delivery-feauture__title">Free Returns</h3>
              <p className="delivery-feauture__text">
                Enjoy free returns on your order
              </p>
            </div>
            <div className="delivery-feauture">
              <h3 className="delivery-feauture__title">Free Gift Packaging</h3>
              <p className="delivery-feauture__text">
                Discover our gift packaging, a gold lined box tied with a
                coloured ribbon
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Delivery;

import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Alert,
  CardTitle,
  Button,
  Card,
  CardText,
} from "reactstrap";

class UrunListesi extends Component {
  render() {
    return (
      //  div arasındakileri return eder
      <div>
        <h3>Ürün listesi / {this.props.title}--{this.props.secilicategories}</h3>
        <Alert>
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
        <div>
          <p>
            The <code>numbered</code> prop can be used to opt into numbered list
            group items.
          </p>
          <ListGroup numbered>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </div>
        <div>
          <Card
            body
            className="text-center"  //"text-end my-2" or "my-2"
            style={{
              width: "40rem",
              color: "brown",
              backgroundColor: "pink",
            }}>
            <CardTitle tag="h3">Card Title </CardTitle>
            <CardText>
                CardText Message 
            </CardText>
            <Button color="primary" 
            style={{
                backgroundColor:"red",
                color:"brown",
                fontSize:"18px",
            }}>Click
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}

export default UrunListesi;

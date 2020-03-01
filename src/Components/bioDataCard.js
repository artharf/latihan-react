import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import AlertCustom from './Alert'


const bioDataCard = (props) => {
  // console.log(props)
  const { namaContoh, usiaBebas, pekerjaanya, image, color, alert, show } = props
  return (
    <div style= {{margin: '0px 40px'}}>
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{namaContoh}</CardTitle>
          <CardSubtitle>{usiaBebas}</CardSubtitle>
          <CardText>{pekerjaanya}</CardText>
          <Button onClick={show}>Button</Button>
          <Button onClick={alert}>Button</Button>
          <AlertCustom color={color} content='Buyer'></AlertCustom>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default bioDataCard;
import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CardComponent = ({ imageUrl, title, description }) => (
  <Card
    hoverable
    style={{ width: 300 }}
    cover={<img alt={title} src={imageUrl} />}
  >
    <Meta title={title} description={description} />
  </Card>
);

export default CardComponent;

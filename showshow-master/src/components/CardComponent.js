import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CardComponent = ({ imgSrc, title, description }) => (
  <Card
    hoverable
    style={{ width: 300 }}
    cover={<img src={imgSrc="../Images/busking.jpg"} alt={title} style={{ width: '100%', height: 'auto' }} />} // 이미지 크기 설정
    onClick={() => { window.location.href = '/'; }} // 클릭 이벤트 처리
  >
    <Meta title={title} description={description} />
  </Card>
);

export default CardComponent;

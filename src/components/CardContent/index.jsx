import React from 'react';
import { Avatar, Button, Card, Col, Icon, Row, Modal, List, Tag, Input, message } from 'antd/es';
import infos from './../../data/infos';

const CardContent = () => {

  return (
    <Row type="flex" align="middle" justify="center">
      <Col md={14} sm={16} xs={24}>
        <Row type="flex" justify="space-between">
          <Col span={10} className="text-center">
            <Avatar size={100} icon="user" className="profil-pic" src={infos.profileData.profilePicture} />
            <h3>{`${infos.profileData.firstname} ${infos.profileData.lastname}`}</h3>
          </Col>
          <Col span={10}>
            <p>
              <Icon type="user" className="p-icon" />
              {infos.profileData.username}
            </p>
            <p>
              <Icon type="mail" className="p-icon" />
              {infos.profileData.email}
            </p>
            <p>
              <Icon type="phone" className="p-icon" />
              {infos.profileData.phoneNumber}
            </p>
            <p>
              <Icon type="calendar" className="p-icon" />
              {infos.profileData.createdAt}
            </p>
          </Col>
        </Row>
      </Col>
      <Col md={10} sm={16} xs={24} className="text-center">
        <Button type="ghost" icon="setting">Edit account</Button>
        <br />
        <br />
        <Button type="ghost" icon="upload">Upload a picture</Button>
      </Col>
    </Row>
  )
};

export default CardContent;

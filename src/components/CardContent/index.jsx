import React from 'react';
import { Avatar, Button, Col, Icon, Row } from 'antd/es';
import infos from './../../data/infos';

const CardContent = (props) => {
  const openEditModal = () => {
    props.openEditModal();
  };

  const openUploadModal = () => {
    props.openUploadModal();
  };

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
        <Button type="ghost" icon="setting" onClick={openEditModal}>Edit account</Button>
        <br />
        <br />
        <Button type="ghost" icon="upload" onClick={openUploadModal}>Upload a picture</Button>
      </Col>
    </Row>
  )
};

export default CardContent;

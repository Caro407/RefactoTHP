import React from 'react';
import { Col, Row, Input } from 'antd/es';
import infos from './../../data/infos';
import UserProfileContext from './../../UserProfileContext';

const ProfileModalContent = () => {
  const profileInfos = React.useContext(UserProfileContext);

  const setEmail = () => {

  }

  return (
    <div>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Email</b>
          <Input id="email" type="text" value={infos.profileData.email} />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Firstname</b>
          <Input id="firstname" type="text" value={infos.profileData.firstname} />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Lastname</b>
          <Input id="lastname" type="text" value={infos.profileData.lastname} />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Phone number</b>
          <Input id="email" type="text" value={infos.profileData.phoneNumber} />
        </Col>
      </Row>
    </div>
  )
};

export default ProfileModalContent;

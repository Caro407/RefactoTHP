import React from 'react';
import { Col, Row, Card, Modal, message } from 'antd/es';
import CardContent from './../CardContent';
import ProfileModalContent from './../ProfileModalContent';
import PictureUpdateModalContent from './../PictureUpdateModalContent'
import infos from './../../data/infos';
import UserProfileContext from './../../UserProfileContext';

const ProfileSection = () => {
  const [profileInfos, setProfileInfos] = React.useState(infos.profileData)
  const [editProfilModal, setEditProfilModal] = React.useState(false);
  const [uploadModal, setUploadModal] = React.useState(false);
  const [profileData, setProfileData] = React.useState({ data: infos.profileData });

  const updateProfile = (infos) => {
    setProfileData({data: infos});
    setEditProfilModal(false);
    message.success('Profile well updated', 3);
  };

  const openEditModal = () => {
    setEditProfilModal(true);
  };

  const openUploadModal = () => {
    setUploadModal(true);
  };

  const uploadPicture = () => {
    alert("J'upload une image avec la description : " + this.state.description + " et les hashtags " + this.state.hashtags + " et les mentions " + this.state.mentions);
  };

  return (
    <UserProfileContext.Provider value={{
          profileInfos,
          updateProfile,
          uploadPicture
        }}>
      <Modal title="Edit your account" okText="Update" visible={editProfilModal} onOk={updateProfile} onCancel={() => setEditProfilModal(false)}>
        <ProfileModalContent />
      </Modal>
      <Modal title="Upload a picture" okText="Upload" visible={uploadModal} onOk={uploadPicture} onCancel={() => setUploadModal(false)}>
        <PictureUpdateModalContent />
      </Modal>
      <Row type="flex" align="middle" justify="center">
        <Col sm={16} xs={24}>
          <Card bordered>
            <CardContent openEditModal={openEditModal} openUploadModal={openUploadModal}/>
          </Card>
        </Col>
      </Row>
    </UserProfileContext.Provider>
  )
};

export default ProfileSection;

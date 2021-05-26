import React from 'react';
import { Col, Row, Card, Icon, Modal } from 'antd/es';
import PublicationModalContent from './../PublicationModalContent';
import ModalFooterContent from './../ModalFooterContent';
import posts from './../../data/posts';

const ProfileSection = () => {
  const [publications, setPublications] = React.useState(posts);
  const [previewPublicationModal, setPreviewPublicationModal] = React.useState(false);
  const [previewItem, setPreviewItem] = React.useState(0);

  const openPreview = (postNumber) => {
    setPreviewItem(postNumber);
    setPreviewPublicationModal(true);
  };
  return (
    <div>
      {publications.map((publication, index) => (
        <Modal width={520} visible={previewPublicationModal} onCancel={() => setPreviewPublicationModal(false)} footer={<ModalFooterContent data={publication} />}>
          <PublicationModalContent data={publication} key={index}/>
        </Modal>
      ))}
      <Row type="flex" justify="center">
        <Col sm={18} xs={24}>
          <Col span={24} className="container text-center">
            <h2>
              <Icon type="save" />
              <span className="span-icon">Publications</span>
            </h2>
            {publications.map((publication, index) => (
              <Card bordered className="card-pubs" onClick={() => {openPreview(index)}}>
                <img src={publication.imageUrl} width={200} height={200} alt={publication.imageUrl} />
              </Card>
            ))}
          </Col>
        </Col>
      </Row>
    </div>
  )
};

export default ProfileSection;

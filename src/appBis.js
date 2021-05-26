import React from 'react';
import { Avatar, Button, Card, Col, Icon, Row, Modal, List, Tag, Input, message } from 'antd/es';
import ModalContent from './components/ModalContent';
import ModalFooterContent from './components/ModalFooterContent';
import CardContent from './components/CardContent';
import posts from './data/posts';
import infos from './data/infos';

const App = () => {
  const [publications, setPublications] = React.useState(posts)
  const [editProfilModal, setEditProfilModal] = React.useState(false);
  const [editPublicationModal, setEditPublicationModal] = React.useState(false);
  const [previewPublicationModal, setPreviewPublicationModal] = React.useState(false);
  const [previewItem, setPreviewItem] = React.useState(0);
  const [uploadModal, setUploadModal] = React.useState(false);
  const [description, setDescription] = React.useState('');
  const [hashtags, setHashtags] = React.useState('');
  const [mentions, setMentions] = React.useState('');

  const openPreview = (postNumber) => {
    setPreviewItem(postNumber);
    setPreviewPublicationModal(true);
  };

  return (
    <div className="div-de-Caro">
    {publications.map((publication, index) => (
      <Modal width={520} visible={previewPublicationModal} onCancel={() => setPreviewPublicationModal(false)} footer={<ModalFooterContent />}>
        <ModalContent data={publication} key={index}/>
      </Modal>
    ))}
    <Row type="flex" align="middle" justify="center">
      <Col sm={16} xs={24}>
        <Card bordered>
          <CardContent/>
        </Card>
        </Col>
    </Row>
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

export default App;

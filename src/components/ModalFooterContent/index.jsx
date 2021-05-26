import React from 'react';
import { Button, Col, Row } from 'antd/es';

const ModalFooterContent = (props) => {
  const updatePic = () => {
    alert("J'update la publication avec l'id : " + props.data.id);
  };

  const deletePic = () => {
    alert("Je supprime la publication avec l'id : " + props.data.id);
  };

return (
  <Row type="flex">
    <Col span={12} className="text-center">
      <Button type="ghost" icon="edit" onClick={updatePic}>Edit</Button>
    </Col>
    <Col span={12} className="text-center">
      <Button type="danger" icon="delete" onClick={deletePic}>Delete</Button>
    </Col>
  </Row>
)
};

export default ModalFooterContent;

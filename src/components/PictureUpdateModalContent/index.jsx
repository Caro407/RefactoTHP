import React from 'react';
import { Col, Row, Input } from 'antd/es';
import infos from './../../data/infos';
import MentionsTagsComponent from './../MentionsTagsComponent'

const PictureUpdateModalContent = () => {
  const [description, setDescription] = React.useState('');
  const [hashtags, setHashtags] = React.useState('');
  const [mentions, setMentions] = React.useState('');

  const updateMentions = (value) => {
    setMentions(value);
  };

  const updateHashtags = (value) => {
    setHashtags(value);
  };

  return (
    <div>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Description:</b>
          <Input id="description" title="Description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </Col>
      </Row>
      <MentionsTagsComponent type="mentions" value={mentions} title="Mention a user" setValue={updateMentions}/>
      <MentionsTagsComponent type="tags" value={hashtags} title="Hashtags" setValue={updateHashtags}/>
    </div>
  )
};

export default PictureUpdateModalContent;

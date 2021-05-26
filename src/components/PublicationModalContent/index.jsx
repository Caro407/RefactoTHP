import React from 'react';
import { Col, Row, List, Tag } from 'antd/es';

const PublicationModalContent = (props) => {

  return (
    <Row type="flex" align="middle">
      <Col xs={24} md={12} className="text-center">
        <img src={props.data.imageUrl} width={200} height={200} alt={props.data.description} />
      </Col>
      <Col xs={24} md={12}>
        <div>
          <b>Description: </b>
          <p>{props.data.description}</p>
        </div>
        <div>
          <b>Hashtag:</b>
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={props.data.hashtags}
            renderItem={(tag) => (
              <List.Item>
                <Tag>{`${tag}`}</Tag>
              </List.Item>
            )}
          />
        </div>
        <div>
          <b>Mention:</b>
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={props.data.mentions}
            renderItem={(user) => (
              <List.Item>
                <Tag>{`@${user}`}</Tag>
              </List.Item>
            )}
          />
        </div>
      </Col>
    </Row>
  )
};

export default PublicationModalContent;

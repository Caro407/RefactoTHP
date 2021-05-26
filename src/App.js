// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { Component } from 'react';
import { Col, Row, Modal, Input, message } from 'antd/es';
import AppBis from './appBis'

class App extends Component {
  constructor() {
    super();
    this.state = {
      editProfilModal: false,
      editPublicationModal: false,
      previewPublicationModal: false,
      previewItem: 0,
      uploadModal: false,
      description: '',
      hashtags: '',
      mentions: '',
      email: 'myprofile@thp.fr',
      phoneNumber: '0601020304',
      firstname: 'TheHacking',
      lastname: 'Project',
      profileData: {
        username: 'RefactoProject',
        email: 'myprofile@thp.fr',
        phoneNumber: '0601020304',
        createdAt: '2020-02-23T07:50:17.335Z',
        firstname: 'TheHacking',
        lastname: 'Project',
        profilePicture: 'https://blog.thehackingproject.org/wp-content/uploads/2019/03/short_white-1.png',
        posts: [
          {
            imageUrl: 'https://f1.pngfuel.com/png/951/574/485/react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-png-clip-art.png',
            description: 'This is a Javascript logo',
            hashtags: ['#Javascript', '#reactJS'],
            mentions: ['TheHackingProject'],
            id: 1,
          },
          {
            imageUrl: 'https://www.tuannguyen.tech/wp-content/uploads/2019/01/react.png',
            description: 'This is the React logo',
            hashtags: ['#React', '#formation'],
            mentions: ['THP'],
            id: 2,
          },
          {
            imageUrl: 'https://avatars2.githubusercontent.com/u/25484553?s=200&v=4',
            description: 'The Hacking Project logo',
            hashtags: ['#THP', '#TheHackingProject'],
            mentions: ['youhou', 'week7'],
            id: 3,
          }
        ]
      }
    }
    this.formatDate = this.formatDate.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  formatDate(date) {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  }

  uploadPicture() {
    alert("J'upload une image avec la description : " + this.state.description + " et les hashtags " + this.state.hashtags + " et les mentions " + this.state.mentions);
  }

  updateProfile() {
    let tmp = this.state.profileData;
    tmp.email = this.state.email;
    tmp.firstname = this.state.firstname;
    tmp.lastname = this.state.lastname;
    tmp.phoneNumber = this.state.phoneNumber;
    this.setState({ profileData: tmp, editProfilModal: false });
    message.success('Profile well updated', 3);
  }

  render() {
    return (
      <div style={{ margin: 50 }}>
        <AppBis />
        <Modal title="Upload a picture" okText="Upload" visible={this.state.uploadModal} onOk={this.uploadPicture} onCancel={() => this.setState({ uploadModal: false })}>
          <Row type="flex" justify="center" className="input-container">
            <Col span={20}>
              <b>Description:</b>
              <Input id="description" title="Description" type="text" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
            </Col>
          </Row>
        </Modal>
        <Modal title="Edit your account" okText="Update" visible={this.state.editProfilModal} onOk={this.updateProfile} onCancel={() => this.setState({ editProfilModal: false })}>
          <Row type="flex" justify="center" className="input-container">
            <Col span={20}>
              <b>EMail</b>
              <Input id="email" type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
            </Col>
          </Row>
          <Row type="flex" justify="center" className="input-container">
            <Col span={20}>
              <b>Firstname</b>
              <Input id="firstname" type="text" value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} />
            </Col>
          </Row>
          <Row type="flex" justify="center" className="input-container">
            <Col span={20}>
              <b>Lastname</b>
              <Input id="lastname" type="text" value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} />
            </Col>
          </Row>
          <Row type="flex" justify="center" className="input-container">
            <Col span={20}>
              <b>Phone number</b>
              <Input id="email" type="text" value={this.state.phoneNumber} onChange={(e) => this.setState({ phoneNumber: e.target.value })} />
            </Col>
          </Row>
        </Modal>
      </div>
    )
  }
}

export default App;

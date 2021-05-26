import React from 'react';
//import { Avatar, Button, Card, Col, Icon, Row, Modal, List, Tag, Input, message } from 'antd/es';
import ProfileSection from './components/ProfileSection';
import PublicationsSection from './components/PublicationsSection';
import posts from './data/posts';
import infos from './data/infos';

const App = () => {
  const [editPublicationModal, setEditPublicationModal] = React.useState(false);

  return (
    <main>
      <ProfileSection />
      <PublicationsSection />
    </main>
  )
};

export default App;

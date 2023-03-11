import React, { useContext } from "react";
import { Card } from 'antd';

import AuthContext from "../AuthContext";

const Profile = () => {
      const { Meta } = Card;
      const [isLoggedIn,user] = useContext(AuthContext);
      return (
            <Card
            hoverable
            style={{
              maxWidth: 300,
            }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80" />}
          >
            <Meta title={isLoggedIn && user.email.match(/^([^@]*)@/)[1]} />
            <p style={{wordWrap:'break-word'}}>
            Your UID - {isLoggedIn && user.uid} <br /><br />
            Your Email - {isLoggedIn && user.email}
            </p>
          </Card>
      );
}

export default Profile;
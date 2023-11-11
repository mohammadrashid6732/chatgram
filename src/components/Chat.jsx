/** @format */
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';
//contexts
import { AuthContext } from '../contexts/AuthContextProvider';
//components
import Navbar from './Navbar';
//styles
import styles from './Chat.module.css';

const Chat = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    if (!user) {
      history.push('/');
      return;
    }
    axios
      .get('https://api.chatengine.io/users/me', {
        headers: {
          'project-id': 'c99234e3-7024-4cb4-b223-85a051544b3a',
          'user-name': user.email,
          'user-secret': user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append('email', user.email);
        formdata.append('username', user.email);
        formdata.append('secret', user.uid);
        getFile(user.photoUrl).then((avatar) => {
          formdata.append('avatar', avatar, avatar.name);
          axios
            .post('https://chatengine.io/users', formdata, {
              headers: {
                'private-key': 'd8c125c6-5044-4f84-917a-ca34afa93ec4',
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' });
  };

  const logoutHandler = async () => {
    await auth.signOut();
    history.push('/');
  };
  if (!user || loading) return '...loading';
  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} displayName={user.displayName} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="c99234e3-7024-4cb4-b223-85a051544b3a"
        userName={user.email}
        userSecret={user.uid}
        userExtraInfo={{ name: user.displayName }}
      />
    </div>
  );
};

export default Chat;

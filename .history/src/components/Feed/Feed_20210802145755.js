import React, { useState, useEffect} from 'react';
//COMPONENTS
import { InputOptions, Post } from './../';
//REDUX
//FIREBASE
import { db } from './../../firebase/confing';
//MATERIAL UI
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import VideocamIcon from '@material-ui/icons/Videocam';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

//CSS
import './Feed.css';
//FILES

const Feed = () => {
  const [inputPost, setInputPost] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),

        }
      )))
    ))
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: "Krzysztofa Kołodziejczak",
      description: "This is a test",
      message: inputPost,
      photoUrl: '',
    })
  };

  return (
    <section className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={inputPost} onChange={e => setInputPost(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5f9" />
          <InputOptions Icon={VideocamIcon} title="Video" color="#649e41" />
          <InputOptions Icon={EventIcon} title="Event" color="#f7c274" />
          <InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#e970a8" />
        </div>
      </div>
      {posts.map((post) => (
        <Post />
      ))}
        <Post
          name="Krzysztofa Kołodziejczak"
          description="This is a test"
          message="This is super worked" />

    </section>
  )
}

export default Feed


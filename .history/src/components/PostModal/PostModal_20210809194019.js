import React, { useState } from 'react';
//COMPONENTS
//ROUTING
import { useHistory } from 'react-router';
//REDUX
import { useSelector, useDispatch} from 'react-redux';
import { selectUserPhoto, selectUserName, selectUserEmail, setUserLogin, setUserLogout } from './../../features/user/userSlice'
//FIREBASE
import { auth, provider, storage } from '../../firebase/confing';
import db from '../../firebase/confing';
//MATERIAL UI
import CloseIcon from '@material-ui/icons/Close';
//CSS
import { Container, Content, Header, SharedContent, UserInfo, ShareCreation, AttachAssets, AssetsButton, ShareComment, PostButton, CommentButton, Editor, UploadImage, UploadVideo } from './PostModal.css';
//FILES
import user from './../../assets/images/user.png';
import ico1 from './../../assets/images/post-ico1.png';
import ico2 from './../../assets/images/post-ico2.png';
import ico3 from './../../assets/images/post-dok.png';
import ico4 from './../../assets/images/post-ico3.png';
import ico5 from './../../assets/images/post-ico4.png';
import ico6 from './../../assets/images/post-ico6.png';
import ico7 from './../../assets/images/post-ico7.png';
import postComment from './../../assets/images/post-comment.png';

import ReactPlayer from 'react-player';


const PostModal = (props) => {
  const photoUser = useSelector(selectUserPhoto);
  const nameUser = useSelector(selectUserName);
  const emailUser = useSelector(selectUserEmail);

  const history = useHistory();

  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined ) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handleClick(e);
  };

  const handleAddPost = () => {
    if( emailUser ) {
      if (shareImage !== "") {
        const upload = storage.app
        .ref(`images/${shareImage.name}`)
        .put(shareImage);
        upload.on("state_changed", (snapshot) => {
          const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes)*100;
          console.log(`Progress: $(progress)%`);
          if (snapshot.state === "RUNNING"){
            console.log(`Progress: $(progress)%`)
          }

      },
      error => console.log(error.code)),
      async downloadURL = await upload.snapshot.ref.getDownloadURL();
      }
    }
  };
  console.log(nameUser);
  return (
    <>
    { props.showModal === 'open' &&
      <Container>
        <Content>
          <Header>
            <h2>Create a post</h2>
            <button>
              <CloseIcon onClick={(event) => reset(event)} />
            </button>
          </Header>
          <SharedContent>
            <UserInfo>
              { photoUser
              ?  <img src={photoUser} alt="user" />
              : <img src={user} alt="user" /> }
              <span>
                {nameUser
                ? nameUser
                : "Guest User"
                }
              </span>
            </UserInfo>
          </SharedContent>
          <Editor
            value={editorText}
            onChange={(e) => setEditorText(e.target.value)}
            placeholder="What do you want to talk about?"
            autoFocus={true}
          >
          </Editor>
          { assetArea === "image"
          ? (<UploadImage>
            <input
              type="file"
              accept='image/gif, image/jpeg, image/jpg, image/png'
              name="image"
              id="file"
              style={{display: "none"}}
              onChange={handleChange}
            />
            <p>
              <label htmlFor="file">
                Select an image to share
              </label>
            </p>
            {shareImage && <img src={URL.createObjectURL(shareImage)} />}
            </UploadImage>)
            : assetArea === "media" &&
            (<UploadVideo>
              <input
              type="text"
              placeholder="Please input a video link"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
               />
               {videoLink && (<ReactPlayer width={'100%'} url={videoLink} /> )}
            </UploadVideo>)
          }

          <ShareCreation>
            <AttachAssets>
                <AssetsButton onClick={() => switchAssetArea("image")}>
                  <img src={ico1} alt="ico1" />
                </AssetsButton>
                <AssetsButton onClick={() => switchAssetArea("media")}>
                  <img src={ico2} alt="ico1" />
                </AssetsButton>
                <AssetsButton>
                  <img src={ico3} alt="ico1" />
                </AssetsButton>
                <AssetsButton>
                  <img src={ico4} alt="ico1" />
                </AssetsButton>
                <AssetsButton>
                  <img src={ico5} alt="ico1" />
                </AssetsButton>
                <AssetsButton>
                  <img src={ico6} alt="ico1" />
                </AssetsButton>
                <AssetsButton>
                  <img src={ico7} alt="ico1" />
                </AssetsButton>
                <ShareComment>
                  <CommentButton>
                      <img src={postComment} alt="ico1" />
                  </CommentButton>
                </ShareComment>
                <PostButton disabled={!editorText ? true : false} onClick={handleAddPost}>
                  Post
                </PostButton>
            </AttachAssets>
          </ShareCreation>
        </Content>
      </Container>
    }
    </>
  )
}

export default PostModal;

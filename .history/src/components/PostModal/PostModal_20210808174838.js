import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
import { useSelector } from 'react-redux';
import { selectUserPhoto, selectUserName } from './../../features/user/userSlice'
//FIREBASE
//MATERIAL UI
import CloseIcon from '@material-ui/icons/Close';
//CSS
import { Container, Content, Header, SharedContent, UserInfo, ShareCreation, AttachAssets, AssetsButton, ShareComment} from './PostModal.css';
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


const PostModal = (post) => {
  const photoUser = useSelector(selectUserPhoto);
  const name = useSelector(selectUserName);
  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <button>
            <CloseIcon />
          </button>
        </Header>
        <SharedContent>
          <UserInfo>
            { photoUser
            ?  <img src={photoUser} alt="user" />
            : <img src={user} alt="user" /> }
            <span>
              {name
              ? name
              : "Guest User"
              }
            </span>
          </UserInfo>
        </SharedContent>
        <ShareCreation>
          <AttachAssets>
              <AssetsButton>
                <img src={ico1} alt="ico1" />
              </AssetsButton>
              <AssetsButton>
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
                <AssetsButton>
                  <img src={postComment} alt="ico1" />
                </AssetsButton>
              </ShareComment>
          </AttachAssets>
        </ShareCreation>
      </Content>
    </Container>
  )
}

export default PostModal;

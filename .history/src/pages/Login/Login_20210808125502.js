import React, { useEffect, useState } from 'react';
//COMPONENTS
//ROUTING
import { useHistory } from 'react-router';
//REDUX
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLogin, setUserLogout } from '../../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
//FIREBASE
import { providerGoogle, auth } from '../../firebase/confing';
//MATERIAL UI
//CSS
import { Container, Nav, Join, SignIn, Section, Hero, Form, Google, Email, Input, TextField, Span } from './Login.css';
//FILES
import logo from './../../assets/images/linkedIn.png';
import logoHero from './../../assets/images/linkedin-strona-startowa.png';
import logoGoogle from '../../assets/images/logo-google.png';
import logoEmail from '../../assets/images/logo-email.png';

const Login = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [picURL, setPicURL] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged(async(user) => {
      if(user) {
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }));
        history.push('/home');
      }
    })
  }, []);

  const signInWithGoogle = () => {
    auth.signInWithPopup(providerGoogle)
		.then((result) => {
			let user = result.user;
			dispatch(setUserLogin({
				name: user.displayName,
				email: user.email,
				photo: user.photoURL
			}));
			history.push('/home');
		})
  };

  const handleLoginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(result => {
      let user = result.user;
      dispatch(setUserLogin ({
        email: user.email,
        uid: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      }))
    })
    .catch((error) => alert(error));
  };


  return (
    <Container>
      <Nav>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div>
          <Join>
            Join Now
          </Join>
          <SignIn>
            Sign In
          </SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welkom to your professional community</h1>
          <img src={logoHero} alt="logo-hero" />
        </Hero>
        <Form>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
             />
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />

          <Email onClick={handleLoginToApp}>
            <img src={logoEmail} alt="logo google" />
            Sign in with Email
          </Email>
          <TextField>
            Not a member?
            <Span>Register Now</Span>
           </TextField>
            <TextField>
              <p>OR</p>
           </TextField>
          <Google onClick={signInWithGoogle}>
            <img src={logoGoogle} alt="logo google" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  )
}

export default Login

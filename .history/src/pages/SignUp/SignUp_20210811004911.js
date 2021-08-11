import React, { useEffect, useState } from 'react';
//COMPONENTS
import { Register } from './../../components';
//ROUTING
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
//REDUX
import { selectUser, setUserLogin, setUserLogout } from '../../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
//FIREBASE
import { provider, auth } from '../../firebase/confing';
//MATERIAL UI
//CSS
import { Container, Nav, Join, SignIn, Section, Hero, Form, Google, Email, Input, TextField, Span } from './SignUp.css';
//FILES
import logo from './../../assets/images/linkedIn.png';
import logoHero from './../../assets/images/linkedin-strona-startowa.png';
import logoGoogle from '../../assets/images/logo-google.png';
import logoEmail from '../../assets/images/logo-email.png';

const SignUp = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();

  const [showFormLogin, setShowFormLogin] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const showFormRegister = () => {
    setShowFormLogin(prev => !prev);
    console.log("rejestracja")
  };

  const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
		.then((result) => {
			let user = result.user;
			dispatch(setUserLogin({
				name: user.displayName,
				email: user.email,
				photo: user.photoURL
			}));
		})
    .catch((error) => alert(error));
  };

  const handleLoginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(result => {
      let user = result.user;
      dispatch(setUserLogin ({
        email: user.email,
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
            <Link to={'/signup'} className="link">
              Join Now
            </Link>
          </Join>
          <SignIn>
            <Link to={'/login'} className="link">
              Sign In
            </Link>
          </SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welkom to your professional community</h1>
          <img src={logoHero} alt="logo-hero" />
        </Hero>
        <Form>
          <Register />
        </Form>
      </Section>
    </Container>
  )
}


export default SignUp;

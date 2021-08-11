import { useEffect, useState, useContext, FunctionComponent } from "react";
import { firebase } from './confing';

const AuthContext = createContext({
  user: null,
  login: true,
  logout: () => {}
})
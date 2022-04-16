import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';
import {firebaseApp} from './service/firebase';
// import reportWebVitals from './reportWebVitals';

const authService = new AuthService(firebaseApp)
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();

const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App 
      FileInput={FileInput}
      authService={authService}   
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();

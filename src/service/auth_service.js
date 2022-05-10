import { 
  getAuth, 
  signInWithPopup,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider, 
  GithubAuthProvider } from 'firebase/auth';
// import { firebaseAuth, googleProvider } from './firebase';
// https://name-card-maker-a3009.firebaseapp.com/__/auth/handler÷


class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    console.log('yogida1');
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider)
  }
  
  logout() {
    this.firebaseAuth.signOut();
  }
  
  onAuthChange(onUserChanged) {
    this.firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }
  
  registerUser(email, password, name) {
    return createUserWithEmailAndPassword(this.firebaseAuth, email, password)
      .then(() => updateProfile(this.firebaseAuth.currentUser, {
        displayName: name,
      }))
  }

  signInUser(email, password) {
    // setLoading(true);
    // console.log(`//signInUser : ${email} / ${password}`);
    return signInWithEmailAndPassword(this.firebaseAuth, email, password)
      .then((res) => console.log(res))
      .catch((err) => alert(err))
      // .finally(() => setLoading(false));
  };

  getProvider(providerName) {
    switch(providerName) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
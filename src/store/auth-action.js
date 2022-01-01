import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db, provider } from '../services/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { commerce } from '../services/commerce';

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    const { email, password, firstName, lastName, displayName, photoURL } =
      data;
    const errorCode = {
      'auth/email-already-in-use': 'Email sudah digunakan',
      'auth/operation-not-allowed': 'Operasi tidak diizinkan',
    };

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName,
        photoURL,
      });

      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        firstName,
        lastName,
        displayName,
        photoURL,
      });

      const cart = await commerce.cart.refresh();
      const docRef = doc(db, 'cart', userCredential.user.uid);
      await setDoc(docRef, cart);

      return await sendEmailVerification(userCredential.user);
    } catch (error) {
      return rejectWithValue(errorCode[error.code] || null);
    }
  }
);

export const authWithGoogle = createAsyncThunk(
  'auth/authWithGoogle',
  async (data, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      const userRef = doc(db, 'users', user.uid);
      const userData = await getDoc(userRef);

      const cart = await commerce.cart.refresh();
      const cartRef = doc(db, 'cart', user.uid);

      if (userData.exists()) {
        return {
          token,
          user,
        };
      }

      const { photoURL } = data;

      await updateProfile(user, {
        photoURL,
      });

      await setDoc(userRef, {
        email: user.email,
        firstName: user.displayName.split(' ')[0],
        lastName: user.displayName.split(' ')[1],
        displayName: user.displayName,
        photoURL,
      });

      await setDoc(cartRef, cart);

      return {
        token,
        user,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    const { email, password } = data;
    const errorCode = {
      'auth/user-disabled': 'Akun Anda telah dinonaktifkan',
      'auth/user-not-found': 'Akun Anda tidak dapat ditemukan',
      'auth/wrong-password': 'Kata sandi yang Anda masukkan salah',
      'auth/too-many-requests':
        'Akses ke akun ini telah dinonaktifkan untuk sementara karena banyak upaya login yang gagal. Silakan coba lagi nanti',
    };
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      return rejectWithValue(errorCode[error.code] || error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'auth/getUser',
  (_, { rejectWithValue }) => {
    const result = async user => {
      try {
        if (user) return await user;
        else return null;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    };
    return onAuthStateChanged(auth, result);
  }
);

// export const getUser = createAsyncThunk('auth/getUser', () => {
//   let result;
//   onAuthStateChanged(auth, user => {
//     if (user) result = user;
//     else result = null;
//   });
//   setTimeout(() => {
//     return result;
//   }, 2000);
// });

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (data, { rejectWithValue }) => {
    const { email } = data;
    const errorCode = {
      'auth/user-not-found': 'Akun Anda tidak dapat ditemukan',
    };
    try {
      return await sendPasswordResetEmail(auth, email);
    } catch (error) {
      return rejectWithValue(errorCode[error.code] || error.message);
    }
  }
);

export const verifyPassword = createAsyncThunk(
  'auth/verifyPassword',
  async (data, { rejectWithValue }) => {
    const { code } = data;
    const errorCode = {
      'auth/invalid-verification-code': 'Kode verifikasi tidak valid',
    };
    try {
      return await verifyPasswordResetCode(auth, code);
    } catch (error) {
      return rejectWithValue(errorCode[error.code] || error.message);
    }
  }
);

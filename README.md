# firebase-docs 

Firebase docs: Super Simple Firebase documentation.

Firebase is a platform developed by Google for creating mobile and web applications.
Firebase provides Authentication, Realtime Database, Cloud Firestore, Storage, Hosting, Functions, Machine Learning Kit, Crashlytics, Test Lab, Performance Monitoring, Remote Config, and Dynamic Links services.

These docs target the Firebase JavaScript SDK, but you can use the same concepts with the Firebase iOS and Android SDKs. You can find the official documentation [here](https://firebase.google.com/docs). 

It target Firebase v9. 

<detasils>
<summary>Notes</summary>

# Notes:

This is not an official documentation, it's just a simple documentation for beginners. You can find the official documentation [here](https://firebase.google.com/docs).

I will try to update it as much as I can.

If you have any suggestions, please feel free to open an issue.

If you want to contribute, please feel free to open a pull request.

> I am [Ahmed Abdelbaset](https://github.com/A7med3bdulBaset), Frontend Developer, 20 years old, from Egypt. I am a self-taught developer, I started learning web development in 2019, and I am still learning. I am currently learning React and React Native.

I am not a native English speaker, so if you find any mistakes, please feel free to open an issue or a pull request.

> Thanks for Github Copilot for helping me write this documentation. It helped me a lot. even it is thanking for itself right now.

</detasils>

## Table of Contents:

**NOTE:** This links will not work while sections below are collapsed.

### Get started:
- [Create a Firebase project](#create-a-firebase-project)
- [Install Firebase](#install-firebase)
- [Initialize Firebase](#initialize-firebase)


### Authentication:

-  [Setup](#setup)
-  [Sign Up, In and Out](#sign-up-in-and-out)
-  [More Auth Functions](#more-auth-functions)

### Firestore:

-  [Setup](#setup)
-  [Write Data](#write-data)
-  [Read Data](#read-data)
-  [Realtime Data](#realtime-data)
-  [Offline Mode](#offline-mode)
-  [Security and Vailidation](#security-and-vailidation)

# Get started:

  <details>
  <summary>Create a Firebase project</summary>

## Create a Firebase project:

-  Go to [Firebase Console](https://console.firebase.google.com/).
-  Login with your Google account.
-  Click on `Add Project`.
-  Enter a name for your project.
-  Click on `Continue`.
-  It will ask you to enable Google Analytics for your project, you can enable it or disable it. then press continue.
-  Click on `Create Project`.
-  It will take a few seconds to create your project.
-  After creating your project, you will be redirected to the project dashboard.
-  Now, You have to start an app. From the dashboard, choose `Web` from the `Add Firebase to your web app` section. Choose a name for your app, then click on `Register App`.
-  Copy the config object. You will need it later.

### The config object looks like this:

```js
const firebaseConfig = {
	apiKey: "###############",
	authDomain: "###############",
	projectId: "###############",
	storageBucket: "###############",
	messagingSenderId: "###############",
	appId: "###############",
};
```

</details>

  <details>
  <summary>Install Firebase</summary>

## Install Firebase:

### NPM:

```bash
npm install firebase
```

    <details>
    <summary>Yarn and script tag</summary>

    ### Yarn:
    ```bash
    yarn add firebase
    ```

    ### Script tag:
    ```html
    <script src="https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js"></script>
    ...
    ```
    </details>

  </details>

  <details>
  <summary>Initialize Firebase</summary>

## Initialize Firebase app:

```js
import { initializeApp } from "firebase/app";
const app = initializeApp(firebaseConfig);
```

As you see we imported `initializeApp` from `firebase/app` and we called it with `firebaseConfig` as an argument. This will initialize our app. The `firebase` package has also `firebase/auth`, `firebase/firestore`, `firebase/storage`, `firebase/functions`, and more. You can import functions from them like this:

```js
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// ...

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// ...
```

  </details>

<br /><hr /><br />

# Authentication:

Authentication is a process of verifying the identity of a user. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.

<details>
<summary>Setup</summary>

## Setup Firebase Authentication:

### Get started:

-  Go to [Firebase Console](https://console.firebase.google.com/), then choose your project, then go to `Authentication` from the left sidebar, then choose `Sign-in method` from the top navbar. enable the authentication methods you want to use.

### Install Firebase:

```bash
npm install firebase
```

### Initialize Firebase and auth:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
```

</details>

<details>
<summary>Sign Up, In and Out</summary>

## Sign Up, In and Out:

### Sign Up:

```js
import { createUserWithEmailAndPassword } from "firebase/auth";
// ...
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
```

### Sign In:

```js
import { signInWithEmailAndPassword } from "firebase/auth";
// ...
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
```

### Sign Out:

```js
import { signOut } from "firebase/auth";
// ...
signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
```

</details>

<details>
<summary>Sign In with Providers</summary>

## Sign In with Providers:

```js
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// ...
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
```

Or you can use `signInWithRedirect` instead of `signInWithPopup`:

```js
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
// ...
const provider = new GoogleAuthProvider();
signInWithRedirect(auth, provider);
```

### Providers:

| Provider | Constructor |
| --- | --- |
| Google | `new GoogleAuthProvider()` |
| Facebook | `new FacebookAuthProvider()` |
| Twitter | `new TwitterAuthProvider()` |
| Github | `new GithubAuthProvider()` |
| More | [Firebase Docs](https://firebase.google.com/docs/auth/web/firebaseui) |

  #### Scopes:

  | Provider | Scopes |
  | --- | --- |
  | Google | `GoogleAuthProvider.addScope('https://www.googleapis.com/auth/contacts.readonly')` |
  | Facebook | `FacebookAuthProvider.addScope('user_birthday')` |
  | Twitter | `TwitterAuthProvider.addScope('https://www.googleapis.com/auth/contacts.readonly')` |
  | Github | `GithubAuthProvider.addScope('repo')` |
  | More | [Firebase Docs](https://firebase.google.com/docs/auth/web/firebaseui) |

### Phone Number Authentication:

```js
import { signInWithPhoneNumber } from "firebase/auth";
// ...
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    // ...
  })
  .catch((error) => {
    // Error; SMS not sent
    // ...
  });
```

</details>

<details>
<summary>Auth State</summary>

## Auth State:

```js
import { onAuthStateChanged } from "firebase/auth";
// ...
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
```

</details>

<details>
<summary>More Auth Functions</summary>

## More Auth Functions:

### Send Email Verification:

```js
import { sendEmailVerification } from "firebase/auth";
// ...
sendEmailVerification(user)
  .then(() => {
    // Email verification sent!
    // ...
  })
  .catch((error) => {
    // ...
  });
```

### Send Password Reset Email:

```js
import { sendPasswordResetEmail } from "firebase/auth";
// ...
sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    // ..
  });
```

### Update Email:

```js
import { updateEmail } from "firebase/auth";
// ...
updateEmail(user, newEmail)
  .then(() => {
    // Email updated!
    // ..
  })
  .catch((error) => {
    // ..
  });
```

### Update Password:

```js
import { updatePassword } from "firebase/auth";
// ...
updatePassword(user, newPassword)
  .then(() => {
    // Password updated!
    // ..
  })
  .catch((error) => {
    // ..
  });
```

### Update Profile:

```js
import { updateProfile } from "firebase/auth";
// ...
updateProfile(user, { displayName: "Jane Q. User" })
  .then(() => {
    // Profile updated!
    // ..
  })
  .catch((error) => {
    // ..
  });
```

### Delete Account:

```js
import { deleteUser } from "firebase/auth";
// ...
deleteUser(user)
  .then(() => {
    // User deleted!
    // ..
  })
  .catch((error) => {
    // ..
  });
```

### Sign Out:

```js
import { signOut } from "firebase/auth";
// ...
signOut(auth)
  .then(() => {
    // Sign-out successful.
    // ..
  })
  .catch((error) => {
    // ..
  });
```

</details>

<details>
<summary>Handling Errors</summary>

## Handling Authentication Errors:

| Error Code | Description |
| --- | --- |
| `auth/invalid-email` | The email address is not valid. |
| `auth/user-disabled` | The user account has been disabled by an administrator. |
| `auth/user-not-found` | There is no user record corresponding to this identifier. The user may have been deleted. |
| `auth/wrong-password` | The password is invalid or the user does not have a password. |
| `auth/email-already-in-use` | The email address is already in use by another account. |
| `auth/operation-not-allowed` | Password sign-in is disabled for this project. |
| `auth/weak-password` | The password must be 6 characters long or more. |
| `auth/invalid-verification-code` | The SMS verification code used to create the phone auth credential is invalid. |
| `auth/invalid-verification-id` | The SMS verification ID used to create the phone auth credential is invalid. |
| `auth/missing-verification-code` | The phone auth credential was created with an empty SMS verification code. |
| `auth/missing-verification-id` | The phone auth credential was created with an empty SMS verification ID. |
| `auth/credential-already-in-use` | This credential is already associated with a different user account. |
| `auth/invalid-credential` | The supplied auth credential is malformed or has expired. |
| `auth/operation-not-allowed` | This operation is not allowed. You must enable this service in the console. |
| `auth/user-disabled` | The user account has been disabled by an administrator. |
| `auth/user-not-found` | There is no user record corresponding to this identifier. The user may have been deleted. |
| `auth/account-exists-with-different-credential` | An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address. |
| `auth/auth-domain-config-required` | The authDomain configuration parameter is required. |
| `auth/cancelled-popup-request` | This operation has been cancelled due to another conflicting popup being opened. |
| `auth/operation-not-supported-in-this-environment` | This operation is not supported in the environment this application is running on. "location.protocol" must be http or https. |
| `auth/popup-blocked` | Unable to establish a connection with the popup. It may have been blocked by the browser. |
| `auth/popup-closed-by-user` | The popup has been closed by the user before finalizing the operation. |
| `auth/unauthorized-domain` | This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console. |

</details>

<details>
<summary>Keep learning</summary>

## Keep learning:

[Firebase Authentication Documentation](https://firebase.google.com/docs/auth)

</details>

<br /><hr /><br />

# Firestore Database:

Firestore is a NoSQL database that stores data in documents and collections. It is a real-time database that allows you to store and sync data between users in real-time.

[What is the defference between Firestore and Realtime Database?](https://firebase.google.com/docs/firestore/rtdb-vs-firestore)

<details>
<summary>Setup</summary>

## Setup Firestore:

### Get Started:

Go to [Firebase Console](https://console.firebase.google.com/), then choose your project, then go to `Firestore` from the left sidebar, then choose `Create database` from the top navbar, then choose `Start in test mode` and click `Enable`.

### Install Firebase:

`npm install firebase`

### initialize app:

```js
import { initializeApp } from "firebase/app";
const app = initializeApp({...firebaseAppConfig});
```

### initialize firestore:

```js
import { getFirestore } from "firebase/firestore";
const db = getFirestore(app);
```

</details>

<details>
<summary>References</summary>

## References:

### Collection Reference:

```js
import { collection } from "firebase/firestore";
// ...
const usersRef = collection(db, "users");
```

### Document Reference:

```js
import { doc } from "firebase/firestore";
// ...
const userRef = doc(db, "users", "alovelace");
```

### Query Reference:

```js
import { query, where } from "firebase/firestore";
// ...
const q = query(usersRef, where("age", ">", 18));
```
Go to [Queries Section](#query-methods) to see all query methods.

</details>

<details>
<summary>Write Data</summary>

## Write Data: includes `create`, `update`, `delete`

### Create:

#### Add a new document with a generated ID:

```js
import { addDoc, collection } from "firebase/firestore";
// ...
const docRef = await addDoc(collection(db, "users"), {
  first: "Ada",
  last: "Lovelace",
  born: 1815
});
```

#### Add a new document with a custom ID:

```js
import { doc, setDoc } from "firebase/firestore";
// ...
const docRef = await setDoc(doc(db, "users", auth.currentUser.uid), {
  first: "Ada",
  last: "Lovelace",
  born: 1815
});
```

`setDoc()` method can also be used to update a document. If the document does not exist, it will be created.

### Update:

```js
import { updateDoc, doc } from "firebase/firestore";
// ...
const docRef = await updateDoc(doc(db, "users", auth.currentUser.uid), {
  first: "Ada",
  last: "Lovelace",
  born: 1815
});
```

You can also update a document using [setDoc()](#add-a-new-document-with-a-custom-id) method, but it will overwrite the entire document.

### Delete:

```js
import { deleteDoc, doc } from "firebase/firestore";
// ...
await deleteDoc(doc(db, "users", auth.currentUser.uid));
```

</details>

<details>
<summary>Read Data</summary>

## Read Data: includes `get`, `list`

### Get a single document:

```js
import { getDoc, doc } from "firebase/firestore";
// ...
const docSnap = await getDoc(doc(db, "users", auth.currentUser.uid));
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
```

### Get multiple documents:

```js
import { getDocs, collection } from "firebase/firestore";
// ...
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
```

### List documents:

[See Get Realtime Updates](#get-realtime-updates)

</details>

<details>
<summary>Get Realtime Updates</summary>

## Get Realtime Updates

### Listen to a single document:

```js
import { onSnapshot, doc } from "firebase/firestore";
// ...
const unsubscribe = onSnapshot(doc(db, "users", auth.currentUser.uid), (doc) => {
  console.log("Current data: ", doc.data());
});
```

### Listen to multiple documents:

```js
import { onSnapshot, collection } from "firebase/firestore";
// ...
const unsubscribe = onSnapshot(collection(db, "users"), (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
```

To stop listening to the document, call the `unsubscribe()` function returned by the `onSnapshot()` method.

</details>

<details>
<summary>Query Methods</summary>

## Query Methods

| Method | Description | syntax |
| --- | --- | --- |
| `where()` | Filter results | `where(field, opStr, value)` |
| `orderBy()` | Order results | `orderBy(field, directionStr)` |
| `limit()` | Limit results | `limit(n)` |
| `startAt()` | Start results at a specific value | `startAt(value)` |
| `startAfter()` | Start results after a specific value | `startAfter(value)` |
| `endAt()` | End results at a specific value | `endAt(value)` |
| `endBefore()` | End results before a specific value | `endBefore(value)` |

### `where()` operator strings:

| Operator | Description |
| --- | --- |
| `"=="` | Equal to |
| `"!="` | Not equal to |
| `"<"` | Less than |
| `"<="` | Less than or equal to |
| `">"` | Greater than |
| `">="` | Greater than or equal to | 
| `"in"` | In |
| `"not-in"` | Not in |
| `"array-contains"` | Array contains |
| `"array-contains-any"` | Array contains any |


### Example:

```js
import { getDocs, query, where, collection, limit, orderBy, startAfter } from "firebase/firestore";
// ...
const q = query(collection(db, "users"), where("age", ">", 18), orderBy("age"), limit(10));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
```

</details>

<details>
<summary>Transactions</summary>

## Transactions

Transactions are useful when you want to update a document based on its current data. For example, you might want to update a counter field in a document, or perform a complex calculation based on the current data in a document.

```js
import { runTransaction, getDoc, doc } from "firebase/firestore";
// ...
const docRef = doc(db, "users", auth.currentUser.uid);
runTransaction(async (transaction) => {
  const docSnap = await transaction.get(docRef);
  if (!docSnap.exists()) {
    throw "Document does not exist!";
  }
  const newPopulation = docSnap.data().population + 1;
  transaction.update(docRef, { population: newPopulation });
});
```

</details>

<details>
<summary>Batched Writes</summary>

## Batched Writes

You can use a batch to perform multiple writes as a single atomic unit. Batches are useful when you want to update multiple documents at the same time.

```js
import { writeBatch, doc, setDoc } from "firebase/firestore";
// ...
const batch = writeBatch(db);
batch.set(doc(db, "users", auth.currentUser.uid), { age: 18 });
batch.set(doc(db, "users", auth.currentUser.uid), { age: 19 });
batch.set(doc(db, "users", auth.currentUser.uid), { age: 20 });
await batch.commit();
```

</details>

<details>
<summary>Security Rules</summary>

## Security Rules

Security rules are written in a declarative language that supports common expressions and functions. You can use security rules to control who can read and write data in your database.

To write security rules, go to the `Rules` tab in the `Firestore` section of the Firebase console.

#### Security Rules Syntax:

| Syntax | Example | Description |
| --- | --- | --- |
| `match` | `match /users/{userId}` | Matches a collection or document |
| path | `/blogs/{blog}`: target a blog in the `blogs` collection | Path |
| path | `/blogs/{blog=**}`: target all blogs in the `blogs` collection and all subcollections | Path |
| `allow` | `allow <access>: if <condition>` | Allow access |
| access | `read`, `write`, `create`, `update`, `delete` | Access type |
| `read` | - | `read` is an alias for `get` and `list` |
| `write` | - | `write` is an alias for `create`, `update`, `delete` |
| `get` | `allow get: if true` | Allow read access |
| `list` | `allow list: if true` | Allow list access |
| `create` | `allow create: if true` | Allow create access |
| `update` | `allow update: if true` | Allow update access |
| `delete` | `allow delete: if true` | Allow delete access |
| `if` | `allow <access>: if <condition>` | Condition |
| `condition` | `true`, `false`, `<expression>` | Condition |
| `expression` | `<key> <operator> <value>` | Expression |
| Operator | `==`, `!=`, `>`, `>=`, `<`, `<=`, `in`, `not-in`, `array-contains`, `array-contains-any` | Operator |
| `key` | `request`, `resourse` | Key |
| `request` | `request.auth`, `request.path`, `request.query`, `request.time`, `request.resource.data` | Request |
| `resource` | `resource.data`, `resource.data.<field>`, `resource.data.<field>.<subfield>` | Resource |
| `value` | `true`, `false`, `null`, `NaN`, `Infinity`, `-Infinity`, `0`, `1`, `1.5`, `"string"`, `["array"]`, `{object}` | Value |
| `function` | `get()`, `exists()`, `size()`, `hasOnly()` | Function |
| `get()` | `get(/databases/$(database)/documents/users/$(userId))` | Get a document |
| `exists()` | `exists(/databases/$(database)/documents/users/$(userId))` | Check if a document exists |
| `size()` | `size(/databases/$(database)/documents/users/$(userId))` | Get the size of a collection |
| `hasOnly()` | `hasOnly(/databases/$(database)/documents/users/$(userId))` | Check if a collection has only the specified documents |
| `variable` | `$(variable)` | Variable |

#### Security Rules Example:

```js
// target firebase rules version
rules_version = '2';
// target firebase database
service cloud.firestore {
  // target firebase database
  match /databases/{database}/documents {
    // target all collections
    match /{collection=**} {
      // allow read access to all collections
      allow read: if true;
    }
    // target blogs collection
    match /blogs/{blog} {
      // allow read access to all documents in the blogs collection
      allow read: if true;
      // allow create access if the user is authenticated and there is no document with the same id
      allow create: if request.auth.uid != null && !exists(/databases/$(database)/documents/blogs/$(request.resource.data.id));
      // allow update and delete access if the user is authenticated and the document is owned by the user
      allow update, delete: if request.auth.uid != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

</details>

<details>
<summary>pricing</summary>

## Pricing

Firestore is free for the first 1GB of storage and 50,000 reads and writes per day. After that, you will be charged for the amount of storage you use and the number of reads and writes you perform.

[See the pricing page](https://firebase.google.com/pricing) for more details.

</details>

<details>
<summary>Handling Errors</summary>

## Handling Firestore Errors

| Error code | Description |
| --- | --- |
| `cancelled` | The operation was cancelled (typically by the caller). |
| `unknown` | Unknown error or an error from a different error domain. |
| `invalid-argument` | Client specified an invalid argument. |
| `deadline-exceeded` | Deadline expired before operation could complete. |
| `not-found` | Some requested document was not found. |
| `already-exists` | Some document that we attempted to create already exists. |
| `permission-denied` | The caller does not have permission to execute the specified operation. |
| `resource-exhausted` | Some resource has been exhausted, perhaps a per-user quota, or perhaps the entire file system is out of space. |
| `failed-precondition` | Operation was rejected because the system is not in a state required for the operation's execution. |
| `aborted` | The operation was aborted, typically due to a concurrency issue like transaction aborts, etc. |
| `out-of-range` | Operation was attempted past the valid range. |
| `unimplemented` | Operation is not implemented or not supported/enabled in this service. |
| `internal` | Internal errors. |
| `unavailable` | The service is currently unavailable. This is a most likely a transient condition and may be corrected by retrying with a backoff. |
| `data-loss` | Unrecoverable data loss or corruption. |
| `unauthenticated` | The request does not have valid authentication credentials for the operation. |

</details>

<details>
<summary>Keep learning</summary>

## Keep learning

[Firestore Documentation](https://firebase.google.com/docs/firestore)

</details>

<br /><hr /><br />

# Storage:

<details>
<summary>Setup</summary>

## Get Started:

Go to [Firebase Console](https://console.firebase.google.com/), then choose your project, then click on `Storage` in the left menu, then click on `Get Started` button.

## Setup:

### install firebase:
`npm install firebase`

### initialize firebase:
```js
import { initializeApp } from 'firebase/app';
// ...
const app = initializeApp(firebaseConfig);
```

### initialize storage:
```js
import { getStorage } from 'firebase/storage';
// ...
const storage = getStorage(app);
```

</details>

<details>
<summary>File Reeference</summary>

## File Reference:

```js
import { ref } from 'firebase/storage';
// ...
const storageRef = ref(storage, 'images/image.jpg');
```
</details>

<details>
<summary>Upload</summary>

## Upload:

### upload file:
```js
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
// ...
const file = document.querySelector('input[type="file"]').files[0];
const storageRef = ref(storage, 'images/image.jpg');
const uploadTask = uploadBytesResumable(storageRef, file);
uploadTask.on('state_changed',
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
  },
  (error) => {
    console.log(error);
  },
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
```

### upload string:
```js
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
// ...
const storageRef = ref(storage, 'images/image.jpg');
const uploadTask = uploadString(storageRef, 'Hello World!');
uploadTask.on('state_changed',
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
  },
  (error) => {
    console.log(error);
  },
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
```

</details>

<details>
<summary>Download</summary>

## Download:

### download file:
```js
import { ref, getDownloadURL } from 'firebase/storage';
// ...
const storageRef = ref(storage, 'images/image.jpg');
getDownloadURL(storageRef).then((url) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = (event) => {
    const blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();
});
```

### download string:
```js
import { ref, getString } from 'firebase/storage';
// ...
const storageRef = ref(storage, 'images/image.jpg');
getString(storageRef).then((result) => {
  const string = result.data;
});
```

</details>

<details>
<summary>File Metadata</summary>

## File Metadata:

### get file metadata:
```js
import { ref, getMetadata } from 'firebase/storage';
// ...
const storageRef = ref(storage, 'images/image.jpg');
getMetadata(storageRef).then((metadata) => {
  console.log(metadata);
});
```

### update file metadata:
```js
import { ref, updateMetadata } from 'firebase/storage';
// ...
const storageRef = ref(storage, 'images/image.jpg');
updateMetadata(storageRef, {
  customMetadata: {
    'updated': 'true'
  }
}).then((metadata) => {
  console.log(metadata);
});
```

</details>

<details>
<summary>File Deletion</summary>

## File Deletion:

### delete file:
```js
import { ref, deleteObject } from 'firebase/storage';
// ...
const storageRef = ref(storage, 'images/image.jpg');
deleteObject(storageRef).then(() => {
  console.log('File deleted successfully');
});
```

</details>

<details>
<summary>File List</summary>

## File List:

### list files:
```js
import { ref, listAll } from 'firebase/storage';
// ...
const storageRef = ref(storage, 'images');
listAll(storageRef).then((result) => {
  result.items.forEach((itemRef) => {
    console.log(itemRef);
  });
});
```

</details>

<details>
<summary>File Data</summary>

## File Data:

| Property | Description |
| --- | --- |
| `name` | The name of the file. |
| `bucket` | The bucket containing the file. |
| `fullPath` | The full path of the file. |
| `size` | The size of the file in bytes. |
| `contentType` | The content type of the file. |
| `timeCreated` | The time the file was created. |
| `updated` | The time the file was last updated. |
| `md5Hash` | The MD5 hash of the file. |
| `generation` | The generation of the file. |
| `metageneration` | The metageneration of the file. |
| `downloadURLs` | The download URL of the file. |
| `customMetadata` | The custom metadata of the file. |

</details>

<details>
<summary>Handling Errors</summary>

## Handling Storage Errors:

The error is the parameter of the `catch` callback function.

| Code | Description |
| --- | --- |
| `storage/object-not-found` | Object does not exist at location. |
| `storage/unauthorized` | User does not have permission to access the object. |
| `storage/canceled` | User canceled the upload. |
| `storage/unknown` | Unknown error occurred, inspect the server response. |

</details>

<details>
<summary>Keep learning</summary>

## Keep learning:

- [Firebase Storage](https://firebase.google.com/docs/storage)

</details>

<br /><hr /><br />


# Realtime Database:

Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client.

[What is the defference between Firestore and Realtime Database?](https://firebase.google.com/docs/firestore/rtdb-vs-firestore)

<details>
<summary>Setup</summary>

## Get Started:

Go to [Firebase Console](https://console.firebase.google.com/), then choose your project, then click on `Realtime Database` in the left menu, then click on `Get Started` button.

## Setup:

### install firebase:
`npm install firebase`

### initialize firebase:
```js
import { initializeApp } from 'firebase/app';
// ...
const app = initializeApp(firebaseConfig);
```

### initialize realtime database:
```js
import { getDatabase } from 'firebase/database';
// ...
const db = getDatabase(app);
```

</details>

<details>
<summary>CRUD</summary>

## CRUD:

### Create:

```js
import { ref, set } from 'firebase/database';
// ...
const dbRef = ref(db);
set(dbRef, {
  title: 'Post title',
  body: 'Post body',
  userId: 1
});
```

### Read:

```js
import { ref, get } from 'firebase/database';
// ...
const dbRef = ref(db);
get(dbRef).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
```

### Update:

```js
import { ref, update } from 'firebase/database';
// ...
const dbRef = ref(db);
update(dbRef, {
  body: 'New post body'
});
```

### Delete:

```js
import { ref, remove } from 'firebase/database';
// ...
const dbRef = ref(db);
remove(dbRef);
```

</details>

<details>
<summary>Realtime Data</summary>

## Get Realtime Data:

```js
import { ref, onValue } from 'firebase/database';
// ...
const dbRef = ref(db);
onValue(dbRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
```

</details>

<details>
<summary>Security and Vailidation</summary>

## Security and Validation:

[See the security and validation](#security-and-validation)

</details>

<details>
<summary>Pricing</summary>

## Pricing:

[See the pricing](#pricing)

</details>


<details>
<summary>Handling Errors</summary>

## Handling Realtime Database Errors:

| Code | Description |
| --- | --- |
| `permission-denied` | Client doesn't have permission to access the desired data. |
| `disconnected` | The operation had to be aborted due to a network disconnect. |

</details>

<details>
<summary>Keep learning</summary>

## Keep learning:

- [Realtime Database Quickstart](https://firebase.google.com/docs/database/web/start)

</details>

<br /><hr /><br />

# Hosting:

Firebase Hosting is a fast and secure way to serve static and dynamic content to your users.

<details>
<summary>Setup</summary>

## Get Started:

Go to [Firebase Console](https://console.firebase.google.com/), then choose your project, then click on `Hosting` in the left menu, then click on `Get Started` button.

## Setup:

### install firebase:
`npm install firebase`

### initialize firebase:
```js
import { initializeApp } from 'firebase/app';
// ...
const app = initializeApp(firebaseConfig);
```

### initialize hosting:
```js
import { getFunctions } from 'firebase/functions';
// ...
const functions = getFunctions(app);
```

</details>

<details>
<summary>Deploy</summary>

## Deploy:

### install firebase-tools:

In your terminal, run:

```bash
npm install -g firebase-tools
```

### login:

```bash
firebase login
```

### init:

```bash
firebase init
```

### deploy:

```bash
firebase deploy
```

</details>

<details>
<summary>Keep learning</summary>

## Keep learning:

[Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)

</details>

<br /><hr /><br />

# Finally:

## Follow me on: 

<p align="left">
<a href="https://codepen.io/a7med3bdulbaset" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="a7med3bdulbaset" height="30" width="40" /></a>
<a href="https://twitter.com/a7med3bdulbaset" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="a7med3bdulbaset" height="30" width="40" /></a>
<a href="https://linkedin.com/in/a7med3bdulbaset" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="a7med3bdulbaset" height="30" width="40" /></a>
<a href="https://stackoverflow.com/users/a7med3bdulbaset" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="a7med3bdulbaset" height="30" width="40" /></a>
<a href="https://fb.com/a7med3bdulbaset" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="a7med3bdulbaset" height="30" width="40" /></a>
<a href="https://instagram.com/a7med3bdulbaset" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="a7med3bdulbaset" height="30" width="40" /></a>
<a href="https://medium.com/@a7med3bdulbaset" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="@a7med3bdulbaset" height="30" width="40" /></a>
<a href="https://www.youtube.com/c/a7med3bdulbaset" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="a7med3bdulbaset" height="30" width="40" /></a>
</p>
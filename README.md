# firebase-docs

Firebase docs: Super Simple Firebase documentation.

Firebase is a platform developed by Google for creating mobile and web applications.
Firebase provides Authentication, Realtime Database, Cloud Firestore, Storage, Hosting, Functions, Machine Learning Kit, Crashlytics, Test Lab, Performance Monitoring, Remote Config, and Dynamic Links services.

## Table of Contents:

### Authentication:
- [Setup](#setup)
- [Sign Up, In and Out](#sign-up-in-and-out)
- [More Auth Functions](#more-auth-functions)

### Firestore:
- [Setup](#setup)
- [Write Data](#write-data)
- [Read Data](#read-data)
- [Realtime Data](#realtime-data)
- [Offline Mode](#offline-mode)
- [Security and Vailidation](#security-and-vailidation)

# Authentication:

Authentication is a process of verifying the identity of a user. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.

<details>
<summary>Setup</summary>

## Install Firebase:

`npm install firebase`

## initialize app:

```js
import { initializeApp } from "firebase/app";
const app = initializeApp({...firebaseAppConfig});
```

## initialize auth:

```js
import { getAuth } from "firebase/auth";
const auth = getAuth(app);
```

</details>

<details>
<summary>Sign Up, In and Out</summary>

## Sign Up, In and Out:

| Function | Syntax |
| -------- | ------ |
| Sign Up with Email    | `createUserWithEmailAndPassword(auth, email, password)` |
| Sign In with Email    | `signInWithEmailAndPassword(auth, email, password)` |
| Sign In and Sign Up with Provider | `signInWithPopup(auth, provider)`, `signInWithRedirect(auth, provider)` like next |
| Google   | `signInWithPopup(auth, new GoogleAuthProvider())` |
| Facebook | `signInWithPopup(auth, new FacebookAuthProvider())` |
| Twitter  | `signInWithPopup(auth, new TwitterAuthProvider())` |
| Github   | `signInWithPopup(auth, new GithubAuthProvider())` |
| Apple | `signInWithPopup(auth, new OAuthProvider("apple.com"))` |
| Phone    | `signInWithPhoneNumber(auth, phoneNumber, appVerifier)` |
| Anonymous| `signInAnonymously(auth)` |
| Custom   | `signInWithCustomToken(auth, token)` |
| More     | [Firebase Docs](https://firebase.google.com/docs/auth/web/start) |
| Sign Out | `signOut(auth)` |

</details>

<details>
<summary>More Auth Functions</summary>

## More Auth Functions:

| Function | Syntax |
| -------- | ------ |
| On Auth State Changed | `onAuthStateChanged(auth, (user) => {})` |
| Get Current User | `auth.currentUser` |
| `auth.currentUser` | `{uid, displayName, email, emailVerified, phoneNumber, photoURL, isAnonymous, tenantId, providerData, metadata, ...}` |
| Update Profile | `updateProfile(auth.currentUser, {displayName: "new name"})` |
| Delete User | `deleteUser(auth.currentUser)` |
| Send Email Verification | `sendEmailVerification(auth.currentUser)` |
| Send Password Reset Email | `sendPasswordResetEmail(auth, email)` |
| Change Email | `updateEmail(auth.currentUser, newEmail)` |
| Change Password | `updatePassword(auth.currentUser, newPassword)` |
| Link with Email | `linkWithCredential(auth.currentUser, EmailAuthProvider.credential(email, password))` |
| Link with Provider | `linkWithPopup(auth.currentUser, provider)` |
| Unlink Provider | `unlink(auth.currentUser, providerId)` |
| Reauthenticate | `reauthenticateWithCredential(auth.currentUser, EmailAuthProvider.credential(email, password))` |
| Reauthenticate with Provider | `reauthenticateWithPopup(auth.currentUser, provider)` |
| More | [Firebase Docs](https://firebase.google.com/docs/auth/web/manage-users) |

</details>

<br />
<hr />
<br />

# Firestore:
Firestore is a NoSQL database that stores data in documents and collections. It is a real-time database that allows you to store and sync data between users in real-time.

<details>
<summary>Setup</summary>

## Install Firebase:

`npm install firebase`

## initialize app:

```
import { initializeApp } from "firebase/app";
const app = initializeApp({...firebaseAppConfig});
```

## initialize firestore:

```
import { getFirestore } from "firebase/firestore";
const db = getFirestore(app);
```

</details>

<details>
<summary>Write Data</summary>

## Write Data: includes `create`, `update`, `delete`

-  docRef: `doc(db, "users", "id"?);`

| Function        | Syntax                                        | Action                  |
| --------------- | --------------------------------------------- | ----------------------- |
| Document Ref    | `doc(db, "users", "id")`                      | --                      |
| Set Document    | `setDoc(docRef, data, options)`               | `create` or `update`    |
| Add Document    | `addDoc(colRef, data, options)`               | `create` only (auto id) |
| Update Document | `updateDoc(docRef, data, options)`            | `update` only           |
| Delete Document | `deleteDoc(docRef, options)`                  | `delete` only           |
| Options object  | `{merge: true, mergeFields: ["name", "age"]}` | `update` only           |

</details>

<details>
<summary>Read Data</summary>

## Read Data: includes `get`, `list`

| Function       | Syntax                            | Action |
| -------------- | --------------------------------- | ------ |
| Document Ref   | `doc(db, "users", "id")`          | --     |
| Collection Ref | `collection(db, "users", query?)` | --     |
| Get Document   | `getDoc(docRef)`                  | `get`  |
| Get Documents  | `getDocs(query)`                  | `list` |

### Queries:

| Function    | Syntax                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| Query       | `query(colRef, ...where?, orderBy?, limit?)`                                                                 |
| Order By    | `orderBy(..."key")`                                                                                          |
| Limit       | `limit(length)`                                                                                              |
| Start At    | `startAt(value)`                                                                                             |
| Start After | `startAfter(value)`                                                                                          |
| End At      | `endAt(value)`                                                                                               |
| End Before  | `endBefore(value)`                                                                                           |
| Where       | `where("key", oparator, "value")`                                                                            |
| Operations  | `"=="`, `"!="`, `">"`, `"<"`, `"<="`, `">="`, `"in"`, `"not-in"`, `"array-contains"`, `"array-contains-any"` |

#### Operations:

| Operation              | Syntax                                                  |
| ---------------------- | ------------------------------------------------------- |
| `"=="`                 | `where("country", "==", "EGYPT")`                       |
| `"!="`                 | `where("country", "!=", "USA")`                         |
| `">"`                  | `where("age", ">", "18")`                               |
| `"<"`                  | `where("age", "<", "18")`                               |
| `"<="`                 | `where("age", "<=", "18")`                              |
| `">="`                 | `where("age", ">=", "18")`                              |
| `"in"`                 | `where("country", "in", ["USA", "EGYPT"])`              |
| `"not-in"`             | `where("country", "not-in", ["USA", "EGYPT"])`          |
| `"array-contains"`     | `where("tags", "array-contains", "tag")`                |
| `"array-contains-any"` | `where("tags", "array-contains-any", ["tag1", "tag2"])` |

</details>

<details>
<summary>Realtime Data</summary>

## Get Realtime Data:

- `onSnapshot(colRef | query | docRef, (snapshot) => {}, (error) => {}, (complete) => {});`
- to Stop listening: call the returned function `onSnapshot()`

```
const unSubscribe = onSnapshot( colRef | query | docRef,
  (snapshot) => {// ON TRUE},
  (error) => { // ON ERROR},
  (complete) => { // ON COMPLETE }
);

// Stop listing:
unsubscribe()
```

</details>

<details>
<summary>Offline Mode</summary>

## Get Data from Cache (Offline Mode):

- `getDocFromCache(docRef | query);`
-  `enableIndexedDbPersistence(db);`
-  `enableNetwork(db);`
-  `disableNetwork(db);`

</details>

<details>
<summary>Security and Vailidation</summary>

## Security and Validation:

[See the example below](#example)

| Target                         | Code                                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------ |
| rules version:                 | `rules_version = '2';`                                                                                 |
| service:                       | `service cloud.firestore {// code here}`                                                               |
| match syntax:                  | `match <path> {// code here}`                                                                          |
| path:                          | `/databases/{database}/documents`                                                                      |
| dynamic name:                  | `{name}`                                                                                               |
| dynamic name and its children: | `{name=**}`                                                                                            |
| allow syntax                   | `allow <action> : if <condition>;`                                                                     |
| action:                        | `create`, `update`, `delete`, `get`, `list`                                                            |
| aliases:                       | `read` ==> `get, list` **\_** `write` ==> `create, update, delete`                                     |
| condition syntax:              | `if <condition>`                                                                                       |
| condition oparator:            | `==`, `!=`, `>`, `<`, `>=`, `<=`, `in`, `not-in`, `array-contains`, `array-contains-any`, `&&`, `\|\|` |
| function syntax:               | `function name() {return condition}`                                                                   |
| built in functions:            | `exists()`, `get()`                                                                                    |
| exists()                       | `exists(/databases/$(database)/documents/users/$(request.auth.uid))`                                   |
| get()                          | `get(/databases/$(database)/documents/users/$(request.auth.uid)).data.admin == true`                   |
| built in variables:            | `request`, `resource` ...and more                                                                      |
| request:                       | `request.auth`, `request.path`, `request.resourse`, `request.time`, `request.method`                   |
| resource:                      | `resource.data`, `resource.id`, `resource._name_`                                                      |
| dynamic variables:             | `$(variable)`                                                                                          |
| dynamic path:                  | `/databases/$(database)/documents/users/$(request.auth.uid)`                                           |

### Example:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  	match /blogs/{blog} {
    	allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null
      		&& resource.data.auther.uid == request.auth.uid;
    }
  }
}
```

</details>

<details>
<summary>Pricing</summary>

## Pricing:

For free, you can use 1GB of storage and 50,000 reads and writes per day. For more, you can upgrade to a paid plan.

Paid plans start at $0.18 per GB per month, and you only pay for what you use. You can also add a lot of other features, such as authentication, hosting, and more.

</details>


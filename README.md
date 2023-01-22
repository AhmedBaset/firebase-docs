# firebase-docs
Firebase docs: Super Simple Firebase documentation.

Firebase is a set of hosting services for any type of application (Android, iOS, Javascript, Node.js, Java, Unity, PHP, C++ ...). It offers NoSQL and real-time hosting of databases, content, social authentication (Google, Facebook, Twitter and Github), and notifications, or services, such as a real-time communication server.

# Firestore:

## Get Data:

  - ### Functions:
    - #### getDoc(docRef) => `.exists()`, `.data()`
    - #### getDocs(query) => `.docs.map(doc => doc.data())`

  - ### References
    - #### doc(db, "users", "id")
    - #### collection(db, "users", queiry)

  - ### Queries:
    - #### query(colRef, ...where?, orderBy?, limit?)
    - #### orderBy(..."key")
    - #### limit(length)
    - #### startAt(value), startAfter(value), endAt(value), endBefore(value)
    - #### where("key", oparator, "value")
      ##### operations:
        - `"=="` ==> `where("country", "==", "EGYPT")`
        - `"!="` ==> `where("country", "!=", "USA")`
        - `">"` ==> `where("age", ">", "18")`
        - `"<"` ==> `where("age", "<", "18")`
        - `"<="` ==> `where("age", "<=", "18")`
        - `">="` ==> `where("age", ">=", "18")`
        - `"in"` ==> `where("country", "in", ["USA", "EGYPT"])`
        - `"not-in"` ==> `where("country", "not-in", ["CHINA", "JAPAN"])`
        - `"array-contains"` ==> `where("hobbies", "array-contains", ["running", "conding", "swimming"])`
        - `"array-contains-any"` ==> `where("hobbies", "array-contains-any", ["running", "conding", "swimming"])`


## Get Realtime Data:
```
const unSubscribe = onSnapshot( colRef | query | docRef,
  (snapshot) => {// ON TRUE},
  (error) => { // ON ERROR},
  (complete) => { // ON COMPLETE }
);

// Stop listing: 
unsubscribe()
```

## Offline Mode:
  - `enableIndexedDbPersistence(db);`
  - `enableNetwork(db);`
  - `disableNetwork(db);`

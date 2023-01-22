# firebase-docs
Firebase docs: Super Simple Firebase documentation, includes Firestore docs, ...etc

# Firestore:

## Get Data:

  - ### Functions:
    - #### getDoc(docRef) => `.exists()`, `.data()`
    - #### getDocs(query) => `.docs.map(doc => doc.data())`

  - ### References
    - #### doc(db, "users", "id")
    - #### collection(db, "users", queiry)

  - ### Queries:
    - #### query(colRef, where?)
    - #### where("key", oparator, "value")
    - #### operations:
      - `"=="`
      - `"!="`
      - `">"`
      - `"<"`
      - `"<="`
      - `">="`
      - `"in"`
      - `"not-in"`
      - `"array-containsa"`
      - `"array-contains-any"`


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

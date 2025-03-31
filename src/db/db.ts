// import { openDB } from "idb";

// async function createStoreInDB() {
//   // Returns a promise, which makes `idb` usable with async-await.
//   const dbPromise = await openDB("JiraCloneData", 1, {
//     upgrade(db: any) {
//       console.log("Creating a new object store...");

//       // Checks if the object store exists:
//       if (!db.objectStoreNames.contains("User")) {
//         // If the object store does not exist, create it:
//         db.createObjectStore("User");
//       }
//     },
//   });
//   console.log(dbPromise);
// }

// createStoreInDB();

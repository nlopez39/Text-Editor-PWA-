import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("PUT to the database");
  //create connection the db and what version we want to use
  const jateDb = await openDB("jate", 1);
  //create a new transaction and sepcify the db and data privlidges
  const tx = jateDb.transaction("jate", "readwrite");
  //open up the desired object store
  const store = tx.objectStore("jate");
  //use .put() method to update data in the db
  //text editor consists of one field of info that is repeatedly retrived and updated
  const request = store.put({ id: 1, value: content });
  //get confirmation of the request
  const result = await request;
  console.log("result.value", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET all from the database");
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result);
  return result;

  // console.error("getDb not implemented");
};
initdb();

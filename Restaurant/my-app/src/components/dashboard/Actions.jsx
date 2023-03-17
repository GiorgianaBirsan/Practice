import React from "react";
import {collection, collectionGroup, getDocs} from "firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../../firebase";
import {async} from "@firebase/util";

export default function Actions() {
  // //GET ALL DOCS FROM RESTAURANTS COLLECTION
  // const querySnapshot =  getDocs(collection(database, "RESTAURANTS"));
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data());
  // });

  //GET A DOC FROM RESTAURANTS COLLECTION
  const get = async () => {
    const docRef = doc(database, "RESTAURANTS", doc.id);
    const docSnap = getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
}

import { useState} from "react";

import {
  doc,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
 getFirestore
} from "firebase/firestore";

function usedscns() {
  const db = getFirestore();
  const ref = collection(db, "chatdiscussion");
  const createddscns= (dscns) => addDoc(ref, dscns);
  const getdscns = () => getDocs(ref);

  const getDiscussionCommentsSnap = (discussionID, callback) => {
    const ref = collection(db, "chatdiscussion", discussionID, "messages");
    const q = query(ref, orderBy("time"));
    return onSnapshot(q, callback);
  };

  const createDiscussionComment = (discussionID, comment) => {
    const ref = collection(db, "chatdiscussion", discussionID, "messages");
    return addDoc(ref, comment);
  };

  const getDiscussionComments = (discussioID) => {
    const ref = collection(db, "chatdiscussion", discussioID, "messages");
    return getDocs(ref);
  };


  return {getdscns, createddscns,createDiscussionComment,getDiscussionComments,getDiscussionCommentsSnap}
}

export default usedscns;

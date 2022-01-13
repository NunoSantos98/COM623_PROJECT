import { useState} from "react";

import {
  doc,
  addDoc,
  collection,
  getDocs,
 getFirestore
} from "firebase/firestore";

function usedeadlns() {
  const db = getFirestore();
  const ref = collection(db, "deadlns");
  const createdeadlns= (deadlns) => addDoc(ref, deadlns);
  const getdeadlns = () => getDocs(ref);

  return {getdeadlns, createdeadlns}
}

export default usedeadlns;

import React, { useEffect, useState } from "react";
import {
  Firestore,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  function sortArrayOfObjectsDescending(arr, variable) {
    // Check if the array is not empty and contains objects
    if (arr.length === 0 || typeof arr[0][variable] === "undefined") {
      // Return a copy of the original array to avoid modification
      return [...arr];
    }

    // Use the Array.sort() method with a custom comparator function
    const sortedArray = arr.slice().sort((a, b) => {
      // Compare the values of the specified variable in descending order
      return b[variable] - a[variable];
    });

    return sortedArray;
  }

  const [datajson, setDataJson] = useState([]);

  useEffect(() => {
    const getJson = async () => {
      try {
        const db = getFirestore();
        const datafromdb = collection(db, "images");
        const snapshot = await getDocs(datafromdb);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const sortedData = sortArrayOfObjectsDescending(data, "rating");

        setDataJson(sortedData);
      } catch (err) {
        console.log(err);
      }
    };

    getJson();
  }, []);
//   const deleteimage = (id) => {
//     const db = getFirestore();
//     const docref = doc(db, "images", id);
//     deleteDoc(docref).then(() => {
//       console.log("image deleted");
//     });
//   };

  return (
    <>
      <nav className="w-full h-[50px] bg-red-600 relative">
        <Link to={"/"}>
          <div className="w-[30px] h-[30px] rounded-full bg-white text-red-500 text-[20pt] flex items-center justify-center absolute top-[50%] -translate-y-[50%] left-3">
            <i className="bx bx-chevron-left"></i>
          </div>
        </Link>
        <ul className="w-full flex items-center justify-center">
          <li className="text-white text-[20pt] text-center">Facesmash</li>
        </ul>
      </nav>

      <div className="mt-[20px] w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1">
        {datajson.map((data, index) => (
          <div
            className="h-[330px] bg-gray-300 w-full col-span-1 relative flex justify-center items-center"
            key={data.id}
        //    onClick={() =>{
        //     deleteimage(data.id)
        //    }}
          >
            <div className="w-[50px] h-[50px] rounded-full bg-white absolute left-2 top-2 flex justify-center items-center text-red-600 font-bold">
              {`#${index + 1}`}
            </div>
            <img src={data.imgurl} className="h-full object-cover" alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Leaderboard;

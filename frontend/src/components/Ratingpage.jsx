import React, { useEffect, useState } from "react";
import axios from "axios";
import { storage } from "../firebase";
import App from "../App";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import {
  Firestore,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
const Ratingpage = () => {
  // const [imageData, setImageData] = useState([]);
  // const [clickedImageId, setClickedImageId] = useState(1);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetchImageData();
  // }, []);

  // // Fetching JSON
  // const fetchImageData = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("http://192.168.18.123:3000/getimages");
  //     const data = await response.json();

  //     if (data && data.data && Array.isArray(data.data)) {
  //       setImageData(data.data);

  //       console.log("fetched", imageData);
  //     } else {
  //       console.error("Invalid JSON structure from the server");
  //     }
  //   } catch (err) {
  //     console.error("Error fetching data:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // // Image handler
  // const handleImageChange = (e) => {
  //   setSelectedImage(e.target.files[0]);
  // };

  // // Image uploading function
  // const handleUpload = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("image", selectedImage);

  //   try {
  //     const response = await fetch("http://192.168.18.123:3000/upload", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       console.log("Image uploaded");
  //       // Fetch new data after uploading the image
  //       await fetchImageData();
  //     } else {
  //       console.error("Uploading failed");
  //     }
  //   } catch (err) {
  //     console.error("Uploading failed:", err);
  //   }
  // };

  // // Update rating function with debouncing
  // const updateRating = async (id) => {
  //   setClickedImageId(id);
  //   console.log("clicked");
  //   await fetchImageData();
  //   try {
  //     await axios.post("http://192.168.18.123:3000/updaterating", { id: id });
  //   } catch (error) {
  //     console.error("Error updating rating:", error);
  //   }
  // };
  const [datajson, setDatajson] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null);

  //this function returns the new rating of the player
  function calculateEloRating(playerRating, opponentRating, outcome) {
    // Constants
    const kFactor = 32; // Adjust this value based on desired sensitivity

    // Expected probability of winning for the player
    const expectedOutcome =
      1 / (1 + Math.pow(10, (opponentRating - playerRating) / 400));

    // Update the player's rating based on the outcome
    const newRating = playerRating + kFactor * (outcome - expectedOutcome);

    return Math.round(newRating);
  }

  //this function gets two random index
  function generateRandomNumbers(endingValue) {
    if (endingValue <= 0) {
      throw new Error("Ending value must be greater than 0");
    }

    let randomNumber1 = Math.floor(Math.random() * (endingValue + 1));
    let randomNumber2;

    // Ensure the second random number is different from the first one
    do {
      randomNumber2 = Math.floor(Math.random() * (endingValue + 1));
    } while (randomNumber2 === randomNumber1);

    return [randomNumber1, randomNumber2];
  }

  const uploadimage = () => {
    if (selectedImage == null) return;
    const imageref = ref(storage, `images/${selectedImage.name + v4()}`);
    const db = getFirestore();
    const colref = collection(db, "images");
    uploadBytes(imageref, selectedImage).then(() => {
      alert("image uploaded");
      getDownloadURL(imageref)
        .then((url) => {
          addDoc(colref, {
            imgurl: url,
            rating: 3000,
            probability: 0.5,
          });
        })
        .catch((er) => {
          console.log(er);
        });
    });
  };

  const fetchDoc = async () => {
    try {
      const db = getFirestore();
      const datafromdb = collection(db, "images");
      const snapshot = await getDocs(datafromdb);

      const randomindex = generateRandomNumbers(snapshot.size - 1);
      console.log(randomindex);
      const newData = [
        {
          ...snapshot.docs[randomindex[0]].data(),
          id: snapshot.docs[randomindex[0]].id,
        },
        {
          ...snapshot.docs[randomindex[1]].data(),
          id: snapshot.docs[randomindex[1]].id,
        },
      ];

      setDatajson(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchDoc();
  }, []);
  const setimage = (file) => {
    setSelectedImage(file);
  };

  return (
    <>
      <nav className="w-full h-[50px] bg-red-600">
        <ul className="w-full flex items-center justify-center">
          <li className="text-white text-[20pt] text-center">Facesmash</li>
        </ul>
      </nav>
      <div className="h-[100%-50px] w-full bg-[rgb(255,255,255)]">
        <div className="h-full py-[50px] w-full  flex flex-col  justify-center items-center">
          <div className="w-full flex flex-col gap-2 justify-center items-center mb-3">
            <p className="text-[10pt] w-[150px] text-center leading-[10pt]">
              Wanna see who rules the heart.
            </p>
            <Link to={"/leaderboard"}>
              <button className="text-[10pt] px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 duration-300">
                Leaderboard
              </button>
            </Link>
          </div>
          <p className="text-[30pt] flex leading-[30pt]">Who's pretty?</p>
          <p>Click to choose</p>
          <div className="w-[400px] flex justify-end items-center mb-3">
            <button
              className="px-3 py-[1px] shadow-lg rounded-md bg-white border "
              onClick={() => {
                fetchDoc();
              }}
            >
              skip
            </button>
          </div>
          <div className="flex gap-2 ">
            {datajson.map((data) => (
              <div
                className="w-[170px] h-[300px] sm:w-[200px] sm:h-[300px]  bg-slate-200 overflow-hidden flex justify-center items-center"
                key={data.id}
                onClick={() => {
                  let clickedimagerating;
                  clickedimagerating = data.rating;
                  console.log(clickedimagerating);
                  const imagelostdata = datajson.filter(
                    (doc) => doc.id !== data.id
                  );
                  let lostimagerating = imagelostdata[0].rating;

                  console.log(
                    "initial clicked image ration:",
                    clickedimagerating
                  );
                  console.log("Initial lost image rating:", lostimagerating);
                  clickedimagerating = calculateEloRating(
                    clickedimagerating,
                    lostimagerating,
                    1
                  );
                  lostimagerating = calculateEloRating(
                    lostimagerating,
                    clickedimagerating,
                    0
                  );
                  console.log(
                    "updated clicked image ration:",
                    clickedimagerating
                  );
                  console.log("updated lost image rating:", lostimagerating);
                  const db = getFirestore();
                  console.log(imagelostdata);
                  const imagewon = doc(db, "images", data.id);
                  const imagelost = doc(db, "images", imagelostdata[0].id);

                  updateDoc(imagewon, {
                    rating: clickedimagerating,
                  }).then(() => {
                    console.log("updated the value", clickedimagerating);
                  });
                  updateDoc(imagelost, {
                    rating: lostimagerating,
                  }).then(() => {
                    fetchDoc();
                  });
                }}
              >
                <img src={data.imgurl} className="object-cover h-full" alt="" />
              </div>
            ))}
          </div>

          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            className="mt-3"
            onChange={(e) => {
              setimage(e.target.files[0]);
            }}
          />
          <button
            className="text-white rounded-lg bg-blue-600 px-5 py-1 mt-3"
            onClick={(e) => {
              uploadimage();
            }}
          >
            upload
          </button>
          <p className="w-[250px] text-center text-[10pt] mt-2 leading-[10pt]">
            try uploading your images,chose the file and click upload.
          </p>
          <p className="w-[200px] text-center leading-[10pt] text-[10pt] mt-4 ">
            this project is purely for educational purposes only and made by
            vishal❤️
            <br />
            <a
              href="https://www.instagram.com/vishalt7822/"
              className="underline text-pink-600"
            >
              instagram
            </a>{" "}
            <a
              href="https://twitter.com/vishalToo5"
              className="underline text-black"
            >
              X
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Ratingpage;

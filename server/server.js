const express = require("express");
const multer = require("multer");
const app = express();
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const { send } = require("process");
const imagesDirectory = path.join(__dirname, "Images");

let img;
let msg = "";
let olddata = [];

app.use(cors());
app.use(express.json());


const writejson = (data) => {
  fs.readFile("./data.js", "utf-8", (err, jsonstring) => {
    if (err) {
      console.error(err);
      return;
    }

    olddata = JSON.parse(jsonstring);

    if (!olddata.data || !Array.isArray(olddata.data)) {
      olddata.data = [];
    }

    console.log("data", olddata);

    olddata.data.push(data);

    console.log("new", olddata);

    fs.writeFile("./data.js", JSON.stringify(olddata, null, 2), (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
};

fs.readdir("Images", (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  img = files.length;
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    fs.readdir("Images", (err, files) => {
      if (err) {
        console.error(err);
        return;
      }
      img = files.length;
    });
    const filename = `${img + 1}` + path.extname(file.originalname);
    cb(null, filename);
    writejson({
      id: img + 1,
      imgurl: `/image/${filename}`,
      rating: 1000,
      winning: 0.5,
    });
    img = 0;
  },
});

const upload = multer({ storage: storage });

app.use(express.static("public"));

app.get("/getdata", (req, res) => {
  res.json(olddata);
});

app.get("/", (req, res) => {
  fs.readFile("./data.js", "utf-8", (err, jsonstring) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    res.send(JSON.parse(jsonstring));
  });
});

app.get("/image/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(imagesDirectory, imageName);
  res.sendFile(imagePath);
});

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Perform actions with the uploaded file

  msg = "file uploaded";
  res.send("File is uploaded");
});

//this function sends two images in random
app.get("/getimages", (req, res) => {
  try {
    const jsonstring = fs.readFileSync("./data.js", "utf-8");

    let olddata = JSON.parse(jsonstring);

    if (!olddata.data || !Array.isArray(olddata.data)) {
      olddata.data = [];
    }

    // Generates random index
    function getRandomIndexes(array) {
      if (!Array.isArray(array) || array.length < 2) {
        console.error("Input should be an array with at least two elements.");
        return null;
      }

      const index1 = Math.floor(Math.random() * array.length);
      let index2 = Math.floor(Math.random() * array.length);

      // Ensure that index2 is different from index1
      while (index2 === index1) {
        index2 = Math.floor(Math.random() * array.length);
      }

      return [array[index1], array[index2]];
    }

    let tworandomimgs = getRandomIndexes(olddata.data);

    let data = {
      data: tworandomimgs
    };

    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//updates the rating of the image
app.post("/updaterating",(req,res)=>{
  let data = req.body;
  console.log(data);
  
})


const port = 3000;
app.listen(port,'192.168.18.123', () => {
  console.log(`The server is running on the port ${port}`);
});

//this will extract song data and image data we get from frontend
//This will extract the file from the api request and it will provide its path
import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname); //when we store any file on the storage,file name will be orignalname instead random
  },
});

const upload = multer({ storage });

export default upload;

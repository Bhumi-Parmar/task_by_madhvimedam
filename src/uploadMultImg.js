const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
  
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload/images');
    },
  
    filename: function(req, file, cb) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
          } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
}});
  
var upload = multer({ storage: storage })
  
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index1.html');
});
  
router.post('/', upload.array('multi-files'), (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        imageURL: req.file.path
      });
      user.save().then(result => {
        res.status(201).json({
          message: "User registered successfully!",
        })  
  res.redirect('/');
})});
export default router;

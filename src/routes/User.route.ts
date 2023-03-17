
import {
  getUser
} from '../controllers/User.controllers'
const userRoute = require('express')


userRoute.get('/user', getUser);
userRoute.post('/adduser', getUser);

module.exports = userRoute;

// app.post('/upload', upload.single('image'), (req: Request, res: Response) => {
//   // Mengambil informasi file dari req.file
//   const { filename, mimetype, size } = req.file;

//   // Menampilkan informasi file yang diunggah
//   res.json({
//     filename: filename,
//     mimetype: mimetype,
//     size: size,
//   });
// });
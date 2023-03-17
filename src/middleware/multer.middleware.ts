import { NextFunction, Request, Response } from "express";
import multer from "multer";

// Inisialisasi multer storage engine
const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: Function) => {
    cb(null, "./src/upload");
  },
  filename: (req: Request, file: Express.Multer.File, cb: Function) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
  
});

// Inisialisasi multer upload middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB
  fileFilter: (req: Request, file: Express.Multer.File, cb: Function) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      console.log("filter true");
      cb(null, true);
    } else {
      console.log("else");
      cb(new Error('File type not supported'), false);
    }
    console.log(file);
  },
});
export default upload;
// Middleware untuk menangani upload file
// const handleUpload = (req: Request, res: Response, next: NextFunction) => {
//   upload.single('image')(req, res, (err: any) => {
//     if (err instanceof multer.MulterError) {
//       res.status(400).json({ message: 'File too large' });
//     } else if (err) {
//       res.status(403).json({ message: err.message });
//     } else {
//       next();
//     }
//   });
// };

// export default handleUpload;
// const uploadFile = (imageFile: any) => {

//   const storage = multer.diskStorage({
//     destination: (req: Request, file: Express.Multer.File, cb) => {
//       cb(null, './upload')
//     },
//     filename: (req: Request, file: Express.Multer.File, cb) => {
//       cb(null, Date.now() + '-' + file.originalname)
//     }
//   })

//   const fileFilterr = (req: Request, file: Express.Multer.File, cb: any) => {
//     if (file.filename == imageFile) {
//       if (!file.originalname.match(/\.(jpg|JPG\png|PNG|)$/)) {
//         //req.fileValidationError = {nsg: 'sefjef'}
//         console.log('error file filter');
//         return cb(new Error("only image file are allowed"), false)
//       }
//     }
//     cb(null, true)
//   }
  
//   const maxSize = 1024 * 1024 * 5
//   const upload = multer({
//     storage: storage,
//     fileFilter: fileFilterr,
//     limits: {
//       fileSize: maxSize
//     }
//   }).single(imageFile)
// }  
// export default uploadFile

// const storage = multer.diskStorage({
//   destination: (req: Request, file: Express.Multer.File, cb) => {
//     cb(null, '/upload')
//   },
//   filename: (req: Request, file: Express.Multer.File, cb) => {
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// });

// const fileFilter = (req: Request, file: Express.Multer.File, cb:any) => {
//   if (file.mimetype == 'imge/jpg' || file.mimetype == 'image/png') {
//     cb(null, true)
//   } else {
//     cb(new Error('file type not accept'), false)
//   }
// };
// console.log('sfehjsfe');

// const upload = multer({
  
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5
//   },
//   fileFilter: fileFilter,
// });

// export default upload;
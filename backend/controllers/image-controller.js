import File from '../models/file.js';

export const uploadImage = async ( req, res ) => {
    console.log(req); 
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    }

    try {
        const file = await File.create(fileObj);
        res.status(201).json({path: `http://localhost:8000/file/${file._id}`});
    } catch (error) {
        console.error("upload failed with error " + error);
    }
};

export const  getImage = async ( req, res ) => {
    //console.log(req);
    try {
        const file = await File.findById(req.params.fileId);
        file.downloadCount++;
        await file.save();

        res.download(file.path,file.name);
    } catch (error) {
        console.error("upload failed with error " + error);
    }
};
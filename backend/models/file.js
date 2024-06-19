import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
    path:{
        type: String,
        require: true
    },

    name:{
        type: String,
        require: true
    },

    downloadCount:{
        type: Number,
        default:0
    }
});

const File = mongoose.model('file', FileSchema);
export default File;
import { useState, useEffect, useRef } from 'react'
import "./App.css"
import { uploadFile } from './services/api';

function App() {

  const [file, setFile] = useState('');
  console.log(file);
  const fileInputRef = useRef();
  
  useEffect(()=>{
     const getImage = async ()=>{
        if(file){
           const data = new FormData();
           data.append('name',file.name);
           data.append('file',file);

           const response = await uploadFile(data);
           console.log(response);
        }
     };
     getImage();
  }, [file]);


  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='main-wrapper'>
      <div className='container'>
        <div className='wrapper'>

          <h1>FileDrop</h1>

          <p>Upload your file and Share the download link to your Mates!</p>

          <button onClick={() => onUploadClick()}> Upload </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

        </div>
      </div>
    </div>
  )
}

export default App

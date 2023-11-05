// ImageUpload.js
import React, { useEffect, useState } from "react";
import { storage } from "./firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Button, Drawer, Modal, Upload, notification } from "antd";
import { v4 } from "uuid";
import axios from "axios";
import Swiper from "./components/swiper";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {get} from "lodash"

const ImageUpload = () => {
  const [imageList, setImageList] = useState("");
  const [open, setOpen] = useState(false);
  const [dummy,setDummy]=useState(false)
  const [data, setData] = useState([]);

  const uploadImage = async (imagename) => {
    if (imagename == null) return;

    const imageRef = ref(
      storage,
      `images/${v4()}-${imagename && imagename.name}`
    );

    uploadBytes(imageRef, imagename).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => {
        setImageList(url);
      });
      alert("image uploaded");
    });   
  };

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:8080/get");
      setData(get(result,"data.message"))
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

useEffect(()=>{
  if(imageList!==""){
    console.log(imageList,"truhew")
    try {
       axios.post("http://localhost:8080/create", { imageList });
       setOpen(!open)
       setImageList("");
      notification.success({message:"Image added successfully"})
    } catch (err) {
      console.log(err);
    }
  }
  setTimeout(()=>{
    fetchData();
  },1000)
},[imageList,dummy])

  return (
    <>
      <div className="bg-red-500 w-screen py-2 flex px-2 justify-between md:px-20 text-white">
        <p>logo</p>
        <Button onClick={()=>{setOpen(!open)}} className="!text-white">Add Image here<AddOutlinedIcon/></Button>
      </div>

      <Modal
        open={open}
        onCancel={() => {
          setOpen(!open);
        }}
        footer={false}
        width={400}
      >
        <Upload
          listType="picture-card"
          onRemove={(e) => {
            setImageList("");
          }}
          fileList={
            imageList !== ""
              ? [
                  {
                    url: imageList,
                  },
                ]
              : []
          }
          maxCount={1}
          onChange={(e) => uploadImage(e.file.originFileObj)}
        >
          <div>
            <AddOutlinedIcon />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Modal>
      <Swiper data={data}/>
    </>
  );
};

export default ImageUpload;

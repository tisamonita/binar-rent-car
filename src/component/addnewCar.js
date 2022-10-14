import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import axios from "axios";

export default function AddNewCar() {
    const [name, setName] = React.useState();
    const [category, setCategory] = React.useState();
    const [price, setPrice] = React.useState();
    const [status, setStatus] = React.useState();
    const [file, setFile] = React.useState();

    const handleSubmit=()=>{
        const user = JSON.parse(localStorage.getItem("user"))
        return axios.post(`https://bootcamp-rent-cars.herokuapp.com/admin/car`, {
            name,
            category,
            price,
            status,
            image :file,
        },  {
            headers: {
                "Content-Type": "multipart/form-data",
                 access_token: user.access_token,
            },
          })
    }

       

  return (
    <>
      <Container>
      <MyUploader />
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Nama Mobil</Label>
            <Input
              id="exampleEmail"
              name="text"
              placeholder="with a placeholder"
              type="email"
              onChange={(e) => {
                setName(e.target.value);
               }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Kategori</Label>
            <Input
              id="exampleEmail"
              name="text"
              placeholder="with a placeholder"
              type="kategori"
              onChange={(e) => {
                setCategory(e.target.value);
               }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Harga</Label>
            <Input
              id="exampleEmail"
              name="text"
              placeholder="harga"
              type="harga"
              onChange={(e) => {
                setPrice(parseInt(e.target.value));
               }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Status</Label>
            <Input id="exampleSelect" name="select" type="select"
             onChange={(e) => {
               setStatus(e.target.value);
              }}
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Image</Label>
            <Input id="upload"  type="file" multiple={false} accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            onClick={(event)=> { 
                    event.target.value = null
            }}
            />
            <FormText>
              This is some placeholder block-level help text for the above
              input. It‘s a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>
          <Button onClick={handleSubmit} >Submit</Button>
        </Form>
      </Container>
    </>
  );
}


const MyUploader = () => {
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
    }
  
    return (
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*,audio/*,video/*"
      />
    )
  }
  

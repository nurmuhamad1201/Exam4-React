import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import FileBase64 from 'react-filebase64';

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(5, "Too Short!")
    .max(12, "Too Long!")
    .required("Required Name"),
  Description: Yup.string()
    .min(10, "Too Short!")
    .max(20, "Too Long!")
    .required("Required Description"),
});

const GetbyId = () => {
  const Api = "http://65.108.148.136:8080/ToDo";
  const ImageApi = "http://65.108.148.136:8080/images";
  const [deleteId, setDeleteId] = useState(null);
  const [addId, setAddId] = useState(null);
  const [base64, setBase64] = useState(null);
  const [open, setOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openAddImageDialog, setOpenAddImageDialog] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();

  async function getById(id) {
    try {
      const response = await axios.get(`${Api}/get-to-do-by-id?id=${id}`);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteImage = async () => {
    try {
      await axios.delete(`${Api}/delete-to-do-image?imageId=${deleteId}`);
      getById(id);
      setOpenDeleteDialog(false);
    } catch (error) {
      console.error(error);
    }
  };

  const addImage = async () => {
    const formData = new FormData();
    formData.append("Images", base64);
    formData.append("ToDoId", addId);
    try {
      await axios.post(`${Api}/add-to-do-images`, formData);
      getById(id);
      setOpenAddImageDialog(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (idx) => {
    try {
      await axios.delete(`${Api}/delete-to-do?id=${idx}`);
      window.location.href = "/Contact";
    } catch (error) {
      console.error(error);
    }
  };

  const editUser = async (values) => {
    try {
      await axios.put(`${Api}/update-to-do`, { id, ...values });
      getById(id);
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getById(id);
  }, [id]);

  if (!data) {
    return <p className="text-red-500">No data available</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {data.images?.map((item, i) => (
          <img
            onClick={() => {
              setDeleteId(item.id);
              setOpenDeleteDialog(true);
            }}
            src={`${ImageApi}/${item.imageName}`}
            key={i}
            alt={`Image ${i}`}
            className="w-full h-auto m-auto object-cover rounded cursor-pointer"
          />
        ))}
        <Button
          onClick={() => setOpenAddImageDialog(true)}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Image
        </Button>
      </div>
      <div className="mt-4">
        <p className="text-xl font-bold">{data.name}</p>
        <p className="text-gray-700">{data.description}</p>
        <div className="flex space-x-4 mt-4">
          <Link to="/Contact">
            <Button
              onClick={() => deleteUser(id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Delete
            </Button>
          </Link>
          <Button
            onClick={() => setOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit
          </Button>
        </div>
      </div>

      
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit To-Do</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please update the necessary fields.
          </DialogContentText>
          <Formik
            initialValues={{
              Name: data.name || "",
              Description: data.description || "",
            }}
            validationSchema={SignupSchema}
            onSubmit={editUser}
          >
            {({ errors, touched }) => (
              <Form className="grid gap-4">
                <div>
                  <label htmlFor="Name">Name</label>
                  <Field
                    name="Name"
                    id="Name"
                    placeholder="Name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.Name && touched.Name ? (
                    <div className="text-red-600">{errors.Name}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="Description">Description</label>
                  <Field
                    name="Description"
                    id="Description"
                    placeholder="Description"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.Description && touched.Description ? (
                    <div className="text-red-600">{errors.Description}</div>
                  ) : null}
                </div>
                <DialogActions>
                  <Button onClick={() => setOpen(false)} color="primary">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Save
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>

      {/* Delete Image Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete Image
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this image?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)}>Disagree</Button>
          <Button onClick={deleteImage} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Image Dialog */}
      <Dialog
        open={openAddImageDialog}
        onClose={() => setOpenAddImageDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Add Image
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <FileBase64
              multiple={false}
              onDone={({ base64 }) => setBase64(base64)}
            />
            {base64 && (
              <img
                src={base64}
                alt="Selected"
                className="mt-2 w-full h-auto object-cover rounded"
              />
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddImageDialog(false)}>Disagree</Button>
          <Button onClick={addImage} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GetbyId;

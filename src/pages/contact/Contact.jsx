import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FileBase64 from "react-filebase64";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Input } from "@mui/material";

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

const Contact = () => {
  const Api = "http://65.108.148.136:8080/ToDo";
  const ImageApi = "http://65.108.148.136:8080/images";

  const [data, setData] = useState([]);
  const [img, setImage] = useState(null);
  const [base64, setBase64] = useState(null);
  const [search, setSearch] = useState("");

  const Gettodo = async () => {
    try {
      const response = await axios.get(`${Api}/get-to-dos`);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeImg = (event) => {
    setImage(event.file);
    setBase64(event.base64);
  };

  const addTodo = async (values, { resetForm }) => {
    let formData = new FormData();
    for (let name in values) {
      formData.append(name, values[name]);
    }
    formData.append("Images", img);
    try {
      await axios.post(`${Api}/add-to-do`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Gettodo();
      resetForm();
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Gettodo();
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <Input
        type="search"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Formik
        initialValues={{
          Name: "",
          Description: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={addTodo}
      >
        {({ errors, touched }) => (
          <Form className="dark:text-black p-6 border border-green-300 mt-[10px] rounded-lg shadow-lg bg-white">
            <div className="mb-4">
              <label htmlFor="Name" className="block font-semibold mb-2">
                Name
              </label>
              <Field
                name="Name"
                id="Name"
                placeholder="Enter name"
                className="mt-1 p-2 border rounded w-full"
              />
              {errors.Name && touched.Name ? (
                <div className="text-red-500 text-sm">{errors.Name}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="Description" className="block font-semibold mb-2">
                Description
              </label>
              <Field
                name="Description"
                id="Description"
                placeholder="Enter description"
                className="mt-1 p-2 border rounded w-full"
              />
              {errors.Description && touched.Description ? (
                <div className="text-red-500 text-sm">{errors.Description}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="Image" className="block font-semibold mb-2">
                Image
              </label>
              <FileBase64 onDone={handleChangeImg} className="mt-1" />
              {base64 && (
                <img
                  src={base64}
                  alt="Selected"
                  className="mt-2 w-full h-auto object-cover rounded"
                />
              )}
            </div>
            <button
              className="border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 w-full"
              type="submit"
            >
              Add
            </button>
          </Form>
        )}
      </Formik>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {filteredData.map((item) => (
          <div className="p-6 border rounded-lg shadow-lg bg-white" key={item.id}>
            <h1 className="text-xl font-bold mb-2">{item.name}</h1>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <button className="mb-4 text-blue-500 underline">
              <Link to={`/contact/todo/${item.id}`}>About</Link>
            </button>
            <div className="grid grid-cols-2 gap-4">
              {item.images.map((el) => (
                <img
                  key={el.id}
                  src={`${ImageApi}/${el.imageName}`}
                  alt={`Image ${el.id}`}
                  className="w-full h-auto object-cover rounded"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import AdminMenu from "../../components/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { Modal } from "antd";

function CreateCategory() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [auth, setAuth] = useAuth();
  const [visible, setVisible] = useState(false);

  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  // handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5050/api/v1/category/create-category",
        {
          name,
        },

        {
          headers: {
            authorization: auth?.token,
            "content-type": "application/json",
          },
        }
      );

      if (res.data.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log({ galti: error });

      toast.error("Something went wrong in input form ");
    }
  };

  // got all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5050/api/v1/category/get-category"
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in gettting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //UPDATE***********************************
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:5050/api/v1/category/update-category/${selected._id}`,
        { name: updatedName },
        {
          headers: {
            authorization: auth?.token,
            "content-type": "application/json",
          },
        }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // ***********DELETE *******************
  const handleDelete = async (pid,pname) => {
  
    try {
      const { data } = await axios.delete(
        `http://localhost:5050/api/v1/category/delete-category/${pid}`,
        
        {
          headers: {
            authorization: auth?.token,
            "content-type": "application/json",
          },
        }
      );
      if (data.success) {
        toast.success(`${pname} is deleted`);
        
      
        
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error)
    }
  };
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu></AdminMenu>
          </div>
          <div className="col-md-9">
            <h1 className="text-2xl">manage Category</h1>

            <div className="p-3">
              {/* <CategoryForm
               value={name}
               setValue={setName}
               handleSubmit={handleSubmit}
               ></CategoryForm> */}
              <form>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={name}
                    type="text"
                    placeholder="Enter new Category"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((c) => (
                    <>
                      <tr>
                        <td key={c._id}>{c.name}</td>
                        <td>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                          >
                            Edit
                          </button>

                          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded ml-2"
                             onClick={()=>handleDelete(c._id,c.name)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <form>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={updatedName}
                    type="text"
                    placeholder="Enter new Category"
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                </div>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  onClick={handleUpdate}
                >
                  Submit
                </button>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateCategory;

import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import AdminMenu from "../../components/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;


function CreateProduct() {
  const navigate=useNavigate();
  const [auth,setAuth]=useAuth()

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  // GET ALL CATEGORY******************

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5050/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in gettting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  

  // Create product function
 
  const handleCreate=async(e)=>{
             e.preventDefault()

            
            try{
             
              const productData=new FormData();

              productData.append("name",name);
              productData.append("description",description);
              productData.append("price",price);
              productData.append("quantity",quantity);
              productData.append("photo",photo);
              productData.append("category",category);
              
              const {data}=await axios.post("http://localhost:5050/api/v1/product/create-product",
               productData,
              {
                headers: {
                  authorization: auth?.token,
                   "content-type": "application/json",
                  // "Content-Type": "multipart/form-data",
                }
              }
              )
               
           
              if(data?.success){
                toast.success('product created successfully')
                navigate('/dashboard/admin/products')
              }else{
                 toast.error(data?.message)
                 console.log('errror')
                 
              
              }

            }catch(error){
                console.log(error);
                toast.error('something went wrong')
            }

  }


  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu></AdminMenu>
          </div>
          <div className="col-md-9">
            <h1>All Product</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3 ">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input type="text"
                 value={name}
                 name="name"
                 placeholder="write a name"
                 className="form-control"
                 onChange={(e)=>setName(e.target.value)}
                 />
              </div>
              <div className="mb-3">
                <input type="text"
                 value={description}
                 name="des"
                 placeholder="write a description"
                 className="form-control"
                 onChange={(e)=>setDescription(e.target.value)}
                 />
              </div>
              <div className="mb-3">
                <input type="number"
                 value={price}
                 name="price"
                 placeholder="write a price"
                 className="form-control"
                 onChange={(e)=>setPrice(e.target.value)}
                 />
              </div>
              <div className="mb-3">
                <input type="number"
                 value={quantity}
                 name="quan"
                 placeholder="write a quantity"
                 className="form-control"
                 onChange={(e)=>setQuantity(e.target.value)}
                 />
              </div>
              <div className="mb-3">
                <Select
                     bordered={false}
                     placeholder="select Shipping"
                     size="large"
                     showSearch
                     className="form-select mb-3"
                     onChange={(value)=>{
                      setShipping(value);

                     }}
                     
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                 

                </Select>
              
              </div>
              <div className="mb-3">
                   <button
                  className="btn btn-primary "
                  onClick={handleCreate}
                   >
                    CREATE PRODUCT
                   </button>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateProduct;

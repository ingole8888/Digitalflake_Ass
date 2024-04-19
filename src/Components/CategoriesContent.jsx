import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineAppstore, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";
import { getallcomplain, addcomplain } from "../redux/appreducer/action";

const CategoriesContent = () => {
  const [ComplaintCategory, setComplaintCategory] = useState("")
  const [showAddForm, setShowAddForm] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [description, setDesciption] = useState("")
  const [status, setStatus] = useState("")

  useEffect(() => {
    handdleCallApi();
  }, [ComplaintCategory]);
  const dispatch = useDispatch();

  function handdleCallApi() {
    dispatch(getallcomplain(ComplaintCategory));
  }
  const { allcomplains } = useSelector((state) => state.Appreducer);
  console.log(allcomplains)

  const handleSearchChange = (e) => {
    setComplaintCategory(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handdleCallApi();
  };

  const handleAddCategory = () => {
    setShowAddForm(true);
  };

  const handleBack = () => {
    setShowAddForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addcomplain({ categoryName, description, status })).then((message) => {
      console.log("Message from signupuser action:", message);
      if (message === "Category added successfully") {
        alert("Category added successfully.");
      }
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://apv2.onrender.com/category/delete/${id}`);
      alert("Category deleted successfully")
      handdleCallApi();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div>
      {!showAddForm ? (
        <div>

          <div className="flex items-center mb-8 p-4">
            <div className="flex mr-2"><AiOutlineAppstore className="w-4 h-auto mr-4" />Categories</div>
            <div className="relative flex-1">
              <button type="button" onClick={handleSearchSubmit} className="absolute inset-y-0 left-0 text-gray rounded-r px-3 py-2 flex items-center justify-center">
                <FaSearch className="w-4 h-4" />
              </button>
              <input
                type="text"
                value={ComplaintCategory}
                onChange={handleSearchChange}
                className="border border-gray-300 rounded-l py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 w-full pr-10"
              />
            </div>
            <button onClick={handleAddCategory} className="bg-purple-900 text-white px-3 py-2 rounded-lg ml-2">
              Add New
            </button>
          </div>

          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-yellow-200">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-100 divide-y divide-white-200">
              {allcomplains.data?.map((category, index) => (
                <tr key={category._id} className='mb-2' style={{ marginBottom: '0.5rem' }}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{category.categoryName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{category.description}</td>
                  <td className={`px-6 py-4 whitespace-nowrap ${category.status === 'Inactive' ? 'text-red-600' : 'text-green-600'}`}>
                    {category.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button 
                    //onClick={() => handleEdit(category.id)}
                     className="text-blue-500 hover:text-blue-800">
                      <AiOutlineEdit className='w-4' />
                    </button>
                    <button 
                    onClick={() => handleDelete(category._id)}
                     className="text-red-500 hover:text-red-800">
                      <AiOutlineDelete className='w-4' />
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>
        </div>
      ) : (
        <div>
          <div className="flex items-center mb-8 p-4">
            <button onClick={handleBack} className="text-purple-900 flex px-3 py-2 rounded-lg">
              <FaArrowLeft className="w-4 h-4 mr-6" />
              <p>Add Category</p>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="bg-white px-8 pt-6 pb-8 mb-4">
            <div className="mx-auto">
              <div className='flex justify-between'>
                <div className="mb-8 relative">
                  <label className="absolute -top-3 left-2 bg-white px-1 text-gray-600 text-xs">
                    Category Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-8 relative">
                  <label className="absolute -top-3 left-2 bg-white px-1 text-gray-600 text-xs">Description</label>
                  <input
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline pr-10"
                    id="password"
                    value={description}
                    onChange={(e) => setDesciption(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-8 relative">
                  <label className="absolute -top-3 left-2 bg-white px-1 text-gray-600 text-xs">Status</label>
                  <select
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline pr-10"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  >
                    <option value="">select</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>


                </div>
              </div>
              <div className="flex justify-end pt-80">
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-black-500 hover:underline rounded-full border border-black-500 mr-6"
                >
                  Cancel
                </button>
                <button
                  className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 p-2 rounded-full focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>


            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CategoriesContent;

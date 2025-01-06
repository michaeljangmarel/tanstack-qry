import React, { useState } from 'react'
import { useAddProduct } from '../query/ProductQuery';
import {  useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [title , setTitle] = useState('');
  const [price ,setPrice] = useState(0);
  const [description ,setDesc] = useState('');
  const [image ,setImg] = useState('');
  const [category ,setCate] = useState("");  


  const navigator = useNavigate()
  const addProduct = useAddProduct();
  
  const add = (e) => {
    e.preventDefault() ;
    const data = {title , price , description , image , category}
     addProduct.mutate(data);
      navigator("/")
  }

  return (
    < >AddProduct
     <div className="container">
      <div className="row">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
              <h3>Product Form </h3>
            </div>
            <form>
            <div className="card-body p-3">
                <div className="">
                 <input type="text" className='form-control'    value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="">
                 <input type="number" className='form-control mt-3'   value={price}  onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="">
                 <input type="text" className='form-control mt-3' value={description}   onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className="">
                 <input type="text" className='form-control mt-3'  placeholder='img' value={image}  onChange={(e) => setImg(e.target.value)} />
                </div>
                <div className="">
                 <input type="text" className='form-control mt-3' pattern='category'  value={category}   onChange={(e) => setCate(e.target.value)}/>
                </div>
             
                <div className="">
                  <button onClick={add} type='submit' className='btn btn-success'>Save</button>
                </div>
            </div>
            </form>
          </div>
        </div>
      </div>
     </div>
    </>
    
  )
}

export default AddProduct
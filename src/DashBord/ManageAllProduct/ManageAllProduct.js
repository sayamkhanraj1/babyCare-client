import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';



const ManageAllProduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://calm-mountain-67432.herokuapp.com/products')
       .then(res => res.json())
       .then(result => setAllProducts(result));
     }, [allProducts]);


    const handleDelete = id =>{
        const confirm = window.confirm('Are you sure to delete Order?');
        if(confirm){
            fetch(`https://calm-mountain-67432.herokuapp.com/products/${id}`, {
               method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                   alert('Order deleted!')
                   const remaining =products.filter(order => order._id !== id);
                   setProducts(remaining);
                }
            })
        }
    }

    return (
        <div className="mb-5 mx-auto">
            <h4>Manage All Product</h4>
            <hr className="bg-success w-25 mx-auto"/>
            <div className="shadow p-2  mb-5 w-75 mx-auto">
                <div>
                <Table responsive className="mb-3  striped bordered hover">
                    <thead className="">
                        <tr className="text-success">
                            <th className="header-text fw-bold" scope="col">Image</th>
                            <th className="header-text fw-bold" scope="col">Product Name</th>
                            <th className="header-text fw-bold" scope="col">Price</th>
                            <th className="header-text fw-bold" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        allProducts.map(pd=>
                            <tr key={pd._id}>
                                <td><img style={{width: '100px', height: '100px'}} src={pd.img} alt="" /></td>
                                <td>{pd.name}</td>
                                <td>{pd.price}</td>
                                <td>
                                   <button onClick={()=>handleDelete(pd?._id)} className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                    
                </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllProduct;
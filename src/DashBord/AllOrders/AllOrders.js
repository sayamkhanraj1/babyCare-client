import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';


const AllOrders = () => {
    const [order,setOrder] = useState([]);
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch('https://calm-mountain-67432.herokuapp.com/ordersInfo')
       .then(res => res.json())
       .then(result => setOrder(result));
     }, [order]);


    const handleUpdate = id =>{
        fetch(`https://calm-mountain-67432.herokuapp.com/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                alert('Status Updated!');
            }
        })
    }


    const handleDelete = id =>{
        const confirm = window.confirm('Are you sure to delete Order?');
        if(confirm){
            fetch(`https://calm-mountain-67432.herokuapp.com/ordersInfo/${id}`, {
               method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                   alert('Order deleted!')
                   const remaining =orders.filter(order => order._id !== id);
                   setOrders(remaining);
                }
            })
        }
    }

    return (
        <div className="mt-4 mb-5 mx-auto">
            <h4>Manage All Booking</h4>
            <hr className="bg-success w-25 mx-auto"/>
            <div className="shadow p-2 mt-5 mb-5 w-75 mx-auto">
                <div>
                <Table responsive className="mb-3  striped bordered hover">
                    <thead className="">
                        <tr className="text-success">
                            <th className="header-text fw-bold" scope="col">Name</th>
                            <th className="header-text fw-bold" scope="col">Product Title</th>
                            <th className="header-text fw-bold" scope="col">Email</th>
                            <th className="header-text fw-bold" scope="col">Status</th>
                            <th className="header-text fw-bold" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        order.map(pd=>
                            <tr key={pd._id}>
                                <td>{pd.name}</td>
                                <td>{pd.title}</td>
                                <td>{pd.email}</td>
                                <td>
                                    {
                                        pd?.status==="Pending"?
                                        <button onClick={()=>handleUpdate(pd._id)} className="btn btn-warning">Pending</button>
                                        :
                                        <button className="btn btn-success">Shipped</button>
                                    }
                                </td>
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

export default AllOrders;
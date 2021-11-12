import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';


const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const {user} = useAuth({});

    useEffect(() => {
       fetch(`http://localhost:5000/ordersInfo/${user?.email}`)
      .then(res => res.json())
      .then(result => setMyOrders(result));
    }, [user.email]);

    const handleDelete = id=>{
        const confirm = window.confirm('Are you sure to delete booking?');
        if(confirm){
            fetch(`http://localhost:5000/ordersInfo/${id}`, {
               method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                const remaining =myOrders.filter(orders=>orders._id !== id);
                setMyOrders(remaining);
            })
        }

    }

    return (
        <div className="mt-4 mb-5">
            <h4>My Orders</h4>
            <hr className="bg-success w-25 mx-auto"/>
            <div className="shadow p-2 mt-5 mb-5 w-75 mx-auto">
                <div>
                <Table responsive className="mb-3  striped bordered hover">
                    <thead className="">
                        <tr>
                            <th className="header-text fw-bold" scope="col">Name</th>
                            <th className="header-text fw-bold" scope="col">Product Title</th>
                            <th className="header-text fw-bold" scope="col">Email</th>
                            <th className="header-text fw-bold" scope="col">Status</th>
                            <th className="header-text fw-bold" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        myOrders.map(orders=>
                            <tr key={orders._id}>
                                <td>{orders.name}</td>
                                <td>{orders.title}</td>
                                <td>{orders.email}</td>
                                <td>
                                    {
                                        orders?.status==="Pending"?
                                        <button className="btn btn-warning">Pending</button>
                                        :
                                        <button className="btn btn-success">Shipped</button>
                                    }
                                </td>
                                <td>
                                   <button onClick={()=>handleDelete(orders?._id)} className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
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

export default MyOrder;
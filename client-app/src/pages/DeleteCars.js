import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import Search from '../components/Search';

export default function DeleteCars() {
    const [cars, setCars] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    const [search,setSearch]=useState('');

    useEffect(() => {
        const getCars = async () => {
            const { data } = await axios.get(`/api/Cars/getForPerson?id=${id}`);
            setCars(data);
        }
        getCars();
    })

    const onYesClick = async () => {
        await axios.post("/api/Cars/Delete", { id });
        history.push('/');
    }

    return (
        <>
         <Search onTextChange={(e)=>{ setSearch(e.target.value) }}
                        placeholder="Search Cars"
                        search={search}
                        onCancelClick={()=>{setSearch('')}}/>  
            <div className="row">
            </div>
            <div className="row mt-5">
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.filter(c => c.make.toLowerCase().includes(search) || c.model.toLowerCase().includes(search))
                        .map(c => {
                            return (
                                <tr>
                                    <td>{c.make}</td>
                                    <td>{c.model}</td>
                                    <td>{c.year}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Are you sure you want to delete all the cars?</h3>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary btn-block" onClick={() => { history.push('/') }}>No</button>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-danger btn-block" onClick={onYesClick}>Yes</button>
                </div>
            </div>
        </>
    )
}



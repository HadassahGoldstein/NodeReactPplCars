import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

export default function AddCars() {
    const [car, setCar] = useState({});
    const [person, setPerson] = useState({});
    const params = useParams();
    const { id } = params;
    const history = useHistory();
    useEffect(() => {
        const getPersonById = async () => {
            const { data } = await axios.get(`/api/people/getById?id=${id}`);
            setPerson(data);
            setCar({ personId: id });
        }
        getPersonById();

    }, [])
    const onTextChange = e => {
        setCar({
            ...car,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitClick = async () => {
        await axios.post("/api/cars/addCar", car);
        history.push('/');
    }


    const { firstName, lastName } = person;
    const { make, model, year } = car;
    return (
        <div className="col-md-6 offset-md-3">
            <div className="jumbotron">
                <h2>Add a new car for {firstName} {lastName}</h2>
                <input type="text" placeholder="Make" value={make} name="make" className="form-control" onChange={onTextChange} />
                <br />
                <input type="text" placeholder="Model" value={model} name="model" className="form-control" onChange={onTextChange} />
                <br />
                <input type="text" placeholder="Year" value={year} name="year" className=" form-control" onChange={onTextChange} />
                <br />
                <button className="btn btn-block btn-primary" onClick={onSubmitClick} >Submit</button>
            </div>
        </div>
    )

}

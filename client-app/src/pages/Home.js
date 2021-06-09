import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PersonRow from '../components/PersonRow';
import Search from '../components/Search';


function Home() {
    const[people,setPeople]=useState([]);
    const [search,setSearch]=useState('');
    useEffect(()=>{
        refreshPeople();
    },[])
    
    const refreshPeople = async () => {
        const { data } = await axios.get('/api/people/');
        setPeople(data);
    }
  
        return (
            <>
              <Search onTextChange={(e)=>{ setSearch(e.target.value) }}
                        placeholder="Search People"
                        search={search}
                        onCancelClick={()=>{setSearch('')}}/>  
                <div className="row">
                    <div className="col-md-12">
                        <Link to={'/addPerson'}>
                            <button className="btn btn-success btn-block mt-2">Add Person</button>
                        </Link>
                    </div>
                </div>
                <table className="table table-hover table-striped table-bordered mt-2">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Cars!</th>
                        </tr>
                    </thead>

                    <tbody>
                        {people.filter(p => p.firstName.toLowerCase().includes(search) || p.lastName.toLowerCase().includes(search))
                        .map(p => <PersonRow key={p.id} person={p} />)}
                                                   
                    </tbody>
                </table>
            </>
        )
    
}
export default Home;
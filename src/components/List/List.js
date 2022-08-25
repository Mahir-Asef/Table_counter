import React, {useEffect, useState} from 'react';
import './List.css';
import SingleInformation from "../SingleInformation/SingleInformation";
const List = () => {
    const [fields,setFields]=useState([]);
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=20')
            .then(res=>res.json())
            .then(data=>setFields(data.results))
    },[])


    return (
        <div className='container'>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">name</th>
                    <th scope="col">age</th>
                    <th scope="col">email</th>
                    <th scope="col">gender</th>
                    <th scope="col">phone</th>
                </tr>
                </thead>
                <tbody>
                {
                    // fields.map(value=><SingleInformation
                    //     key={value.email}
                    //     value={value}
                    // ></SingleInformation>)
                    fields.map((value,index)=>
                    <tr key={value.email}>
                        <td>{value.name.title+" "+value.name.first+" "+value.name.last}</td>
                        <td>{value.registered.age}</td>
                        <td>{value.email}</td>
                        <td>{value.gender}</td>
                        <td>{value.phone}</td>
                    </tr>
                    )}

                </tbody>
            </table>
        </div>
    );
};

export default List;
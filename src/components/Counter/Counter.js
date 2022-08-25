import React, {useState} from 'react';
import './Counter.css'
import Swal from "sweetalert2";
const Counter = () => {
    const [value,setValue]=useState(0);
    const handleIncrease=()=>{
        if(value>=0 && value<10){
            setValue (value+1)
        }
        else{
            Swal.fire({
                title: 'No more than 10',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            setValue(0)
        }
    }
    const handleDecrease=()=>{
        if(value>0 && value<10){
            setValue (value-1)
        }else{
            Swal.fire({
                title: 'NO less than 0',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            setValue(0);
        }
    }
    const handleReset=()=>{
       if(value>0){
           Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, Reset it!'
           }).then((result) => {
               if (result.isConfirmed) {
                   Swal.fire(
                       'Reset done!',
                       'Field has been reset.',
                       'success'
                   )
               }
           })
           setValue(0)
       }
    }
    return (
        <div>
            <h1 className="text-center">This is Counter.</h1>
            <div className="text-center">
                <button onClick={handleIncrease} type="button" className="btn btn-warning">Increase</button>
                <p className="p-3 v">{value}</p>
                <button onClick={handleDecrease} type="button" className="btn btn-primary">Decrease</button><br/>
                <button onClick={handleReset} type="button" className="btn btn-danger w-25 mt-2">Reset</button>
            </div>
        </div>
    );
};

export default Counter;
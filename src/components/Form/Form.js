import React, {useState} from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
const Form = () => {
    const [info,setInfo]=useState([]);
    // const { register, formState: { errors }, handleSubmit } = useForm();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
      if(  info.find(userMail=>userMail.Email.toLowerCase()==data.Email.toLowerCase())){
          return Swal.fire({
              title: 'Use an unique Email',
              showClass: {
                  popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
              }
          });
      }else{
          setInfo(prevState => [...prevState, data]);
      }
    };
    console.log(info);
    return (
        <div className="d-flex justify-content-center mt-5">
            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*    <input  placeholder="Name" {...register("firstName", { required: true })} /><br/>*/}
            {/*    {errors.firstName?.type === 'required' && "First name is required"}*/}
            {/*    <br/><br/>*/}
            {/*    <input type="tel" placeholder="phone number"  {...register("phoneNumber", { required: true })} /><br/>*/}
            {/*    {errors.phoneNumber && <p>Last name is required</p>}*/}
            {/*    <br/>*/}
            {/*    <input type="email"  placeholder="Email" {...register("mail", { required: "Email Address is required" })} />*/}
            {/*    <p>{errors.mail?.message}</p><br/>*/}
            {/*    <select {...register("gender")}>*/}
            {/*        <option value="female">female</option>*/}
            {/*        <option value="male">male</option>*/}
            {/*        <option value="other">other</option>*/}
            {/*    </select><br/><br/>*/}
            {/*    <input className='mx-auto' type="submit" />*/}
            {/*</form>*/}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  placeholder="Name" type="text" placeholder="Name" {...register("First name", {required: true, maxLength: 80})} />
                <br/><br/>
                <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                <br/><br/>
                <select className="select" {...register("Gender", { required: true })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
                <br/><br/>
                <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
                <br/><br/>
                <input className="sub-btn" type="submit" />
            </form>
        </div>
    );
};

export default Form;
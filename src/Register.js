import React,{useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Register(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

async function register(){

if(!name || !email || !password){
alert("Fill all fields");
return;
}

try{

await axios.post(
"http://localhost:5000/register",
{
name,
email,
password
}
);

alert("Registration Successful");

window.location="/login";

}
catch(error){
console.log(error);
alert("Registration Failed");
}

}


return(
<div
style={{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
backgroundImage:
"url(https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600)",
backgroundSize:"cover",
backgroundPosition:"center"
}}
>

<div
style={{
width:"430px",
padding:"45px",
borderRadius:"25px",
background:"rgba(0,0,0,.75)",
backdropFilter:"blur(10px)",
color:"white",
boxShadow:"0 10px 30px rgba(0,0,0,.5)"
}}
>

<h1 style={{textAlign:"center"}}>
🎬 CineBook
</h1>

<h3
style={{
textAlign:"center",
marginBottom:"25px"
}}
>
Create Account
</h3>

<p
style={{
textAlign:"center",
color:"#ccc"
}}
>
Join and book movies instantly
</p>


<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="form-control mb-3"
style={{
padding:"14px",
borderRadius:"12px"
}}
/>


<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="form-control mb-3"
style={{
padding:"14px",
borderRadius:"12px"
}}
/>


<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="form-control mb-3"
style={{
padding:"14px",
borderRadius:"12px"
}}
/>


<button
onClick={register}
className="btn btn-danger w-100"
style={{
padding:"14px",
fontSize:"18px",
borderRadius:"12px"
}}
>
Create Account
</button>



<div
style={{
textAlign:"center",
marginTop:"20px"
}}
>
Already have account?{" "}

<Link
to="/login"
style={{
color:"#ff5757",
textDecoration:"none"
}}
>
Login Here
</Link>

</div>



<hr style={{margin:"30px 0"}}/>


<button className="btn btn-light w-100 mb-2">
Continue with Google
</button>

<button className="btn btn-primary w-100 mb-2">
Continue with Facebook
</button>

<button className="btn btn-dark w-100">
Continue with Apple
</button>


<p
style={{
textAlign:"center",
marginTop:"25px",
color:"#ccc"
}}
>
Trusted by movie lovers 🍿
</p>


</div>

</div>
)

}

export default Register;
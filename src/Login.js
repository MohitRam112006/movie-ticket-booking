import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const banners=[
"https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600",
"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600",
"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600"
];

function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [slide,setSlide]=useState(0);


useEffect(()=>{

const interval=setInterval(()=>{
setSlide((prev)=>(prev+1)%banners.length);
},4000);

return ()=>clearInterval(interval);

},[]);



async function login(){

if(!email || !password){
alert("Enter email and password");
return;
}

try{

const res=await axios.post(
"http://localhost:5000/login",
{
email:email,
password:password
}
);


if(res.data.token){

localStorage.setItem(
"token",
res.data.token
);

alert("Login Successful");

window.location="/home";

}

}
catch(error){

console.log(error);
alert("Invalid Login");

}

}



return(

<div
style={{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
backgroundImage:`url(${banners[slide]})`,
backgroundSize:"cover",
backgroundPosition:"center"
}}
>


<div
style={{
width:"420px",
padding:"45px",
borderRadius:"25px",
background:"rgba(0,0,0,.75)",
backdropFilter:"blur(10px)",
color:"white",
boxShadow:"0 10px 30px rgba(0,0,0,.5)"
}}
>

<h1
style={{
textAlign:"center"
}}
>
🎬 CineBook
</h1>


<h3
style={{
textAlign:"center",
marginBottom:"30px"
}}
>
Welcome Back
</h3>


<p
style={{
textAlign:"center",
color:"#ccc"
}}
>
Book Movies, Events & Shows Instantly
</p>



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



<div
style={{
textAlign:"right",
marginBottom:"20px"
}}
>

<a
href="/"
onClick={(e)=>e.preventDefault()}
style={{
color:"#ff8080",
textDecoration:"none"
}}
>
Forgot Password?
</a>

</div>



<button
onClick={login}
className="btn btn-danger w-100"
style={{
padding:"14px",
borderRadius:"12px",
fontSize:"18px"
}}
>
Login
</button>




<div
style={{
textAlign:"center",
marginTop:"20px"
}}
>
New User?{" "}

<Link
to="/register"
style={{
color:"#ff5757",
textDecoration:"none"
}}
>
Register Here
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

);

}

export default Login;
import React,{useState} from "react";
import {Link,useNavigate} from "react-router-dom";

function Login(){

const navigate=useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const loginUser=()=>{

const user=JSON.parse(
localStorage.getItem("registeredUser")
);

if(!email || !password){
alert("Fill all fields");
return;
}

if(
user &&
email===user.email &&
password===user.password
){
alert("Login Successful");
navigate("/home");
}
else{
alert("Invalid Login");
}

};


return(

<div
style={{
minHeight:"100vh",
backgroundImage:"url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1800&auto=format&fit=crop)",
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
justifyContent:"center",
alignItems:"center",
padding:"20px"
}}
>

<style>
{`

.overlay{
position:fixed;
inset:0;
background:linear-gradient(rgba(10,10,20,.45),rgba(20,0,20,.55));
}

.loginCard{
position:relative;
z-index:2;
width:430px;
background:rgba(15,0,25,.74);
backdrop-filter:blur(20px);
border-radius:30px;
padding:42px;
box-shadow:0 25px 70px rgba(0,0,0,.45);
animation:float 4s ease-in-out infinite;
}

@keyframes float{
50%{transform:translateY(-6px)}
}

.field{
width:100%;
padding:16px;
border:none;
border-radius:14px;
margin-top:12px;
font-size:16px;
outline:none;
}

.loginBtn{
width:100%;
padding:16px;
border:none;
border-radius:14px;
background:linear-gradient(90deg,#d61f26,#ff4657);
color:white;
font-size:22px;
font-weight:700;
margin-top:24px;
cursor:pointer;
transition:.3s;
}

.loginBtn:hover{
transform:translateY(-2px);
box-shadow:0 12px 30px rgba(255,60,80,.35);
}

.social{
width:100%;
padding:14px;
border:none;
border-radius:12px;
font-size:18px;
margin-top:12px;
cursor:pointer;
}

`}
</style>

<div className="overlay"></div>


<div className="loginCard">

<div style={{textAlign:"center"}}>

<h1 style={{
color:"white",
fontSize:"60px",
marginBottom:"10px"
}}>
🎬
</h1>

<h1 style={{
color:"white",
fontWeight:"800"
}}>
CineBook
</h1>

<h2 style={{
color:"white",
marginTop:"10px"
}}>
Welcome Back
</h2>

<p style={{
color:"#ddd",
marginTop:"15px"
}}>
Book Movies, Events & Shows Instantly
</p>

</div>



<input
className="field"
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>


<input
className="field"
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>


<div style={{
display:"flex",
justifyContent:"flex-end",
marginTop:"14px"
}}>
<span style={{
color:"#ff7b7b",
cursor:"pointer"
}}>
Forgot Password?
</span>
</div>



<button
onClick={loginUser}
className="loginBtn"
>
Login
</button>



<div style={{
textAlign:"center",
color:"white",
marginTop:"26px"
}}>
New User?{" "}
<Link
to="/register"
style={{
color:"#ff5d6c",
fontWeight:"bold",
textDecoration:"none"
}}
>
Register Here
</Link>
</div>



<hr style={{
marginTop:"30px",
borderColor:"rgba(255,255,255,.1)"
}}/>


<button
className="social"
style={{
background:"white"
}}
>
Continue with Google
</button>


<button
className="social"
style={{
background:"#1877f2",
color:"white"
}}
>
Continue with Facebook
</button>


<button
className="social"
style={{
background:"#111",
color:"white"
}}
>
Continue with Apple
</button>


<div style={{
textAlign:"center",
marginTop:"28px",
color:"#ddd"
}}>
Trusted by movie lovers 🍿
</div>


</div>

</div>

);

}

export default Login;
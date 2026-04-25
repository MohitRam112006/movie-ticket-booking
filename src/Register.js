import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

const navigate = useNavigate();

const [user, setUser] = useState({
name: "",
email: "",
password: ""
});

const [showPassword, setShowPassword] = useState(false);

const handleChange = (e) => {
setUser({
...user,
[e.target.name]: e.target.value
});
};

const handleRegister = (e) => {
e.preventDefault();

if (!user.name || !user.email || !user.password) {
alert("Please fill all fields");
return;
}

localStorage.setItem(
"registeredUser",
JSON.stringify(user)
);

alert("Registration Successful!");
navigate("/login");
};

const inputStyle = {
width: "100%",
padding: "12px",
marginBottom: "15px",
borderRadius: "10px",
border: "1px solid #ddd",
outline: "none",
fontSize: "14px"
};

return (
<div
style={{
minHeight: "100vh",
background: "linear-gradient(135deg,#141e30,#243b55)",
display: "flex",
justifyContent: "center",
alignItems: "center",
padding: "20px"
}}
>

<div
style={{
width: "400px",
background: "rgba(255,255,255,0.95)",
backdropFilter: "blur(10px)",
padding: "35px",
borderRadius: "18px",
boxShadow: "0 25px 60px rgba(0,0,0,0.35)"
}}
>

{/* HEADER */}
<div style={{ textAlign: "center", marginBottom: "25px" }}>
<h2 style={{ margin: 0 }}>🎬 Register</h2>
<p style={{ color: "gray", fontSize: "14px" }}>
Create your account to book movie tickets
</p>
</div>

{/* FORM */}
<form onSubmit={handleRegister}>

<input
type="text"
name="name"
value={user.name}
onChange={handleChange}
placeholder="Full Name"
style={inputStyle}
/>

<input
type="email"
name="email"
value={user.email}
onChange={handleChange}
placeholder="Email Address"
style={inputStyle}
/>

<input
type={showPassword ? "text" : "password"}
name="password"
value={user.password}
onChange={handleChange}
placeholder="Password"
style={inputStyle}
/>

{/* SHOW PASSWORD */}
<label style={{ fontSize: "14px", color: "#333" }}>
<input
type="checkbox"
onChange={() => setShowPassword(!showPassword)}
/>{" "}
Show Password
</label>

{/* BUTTON */}
<button
type="submit"
style={{
width: "100%",
marginTop: "20px",
padding: "12px",
border: "none",
borderRadius: "10px",
background: "#d61f26",
color: "white",
fontSize: "16px",
cursor: "pointer"
}}
>
Register
</button>

</form>

{/* LOGIN LINK */}
<div style={{ textAlign: "center", marginTop: "20px" }}>
Already have an account?{" "}
<Link
to="/login"
style={{
color: "#d61f26",
fontWeight: "bold",
textDecoration: "none"
}}
>
Login
</Link>
</div>

</div>
</div>
);
}

export default Register;
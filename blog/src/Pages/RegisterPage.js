import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
    const[username, setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[email,setEmail] = useState('');
    const[redirect,setRedirect] = useState(false);

async function register(ev) {
    ev.preventDefault();
    try {
        const response = await fetch('https://codapi.onrender.com/register', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        // Check if the response status is OK
        if (response.ok) {
            // Registration successful, you might want to redirect or display a success message
            alert('registeration Successful');
            
            setRedirect(true);
        } else {
            // Handle the case where the response status is not OK
            console.error('Registration failed:', response.statusText);
            alert('registeration Unsuccessful')
        }
    } catch (error) {
        // Handle network or other fetch-related errors
        console.error('Fetch error:', error);
    }
}

if(redirect){
    return <Navigate to ={'/login'}/> 
   }
  return (

<div className = "container">
	< div className="screen">
		<div className="screen__content">
			<form className="login"  onSubmit={register}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="User name"
                     value={username} onChange={ev =>setUsername(ev.target.value)}/>
				</div>
                <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="Email@example.com"
                    value={email} onChange={ev =>setEmail(ev.target.value)}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password"
                     value={password} onChange={ev =>setPassword(ev.target.value)}/>
				</div>
				<button className="button login__submit">
					<span className="button__text">Register Here</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>

		</div> 
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>

    </div>
</div> 

)
}

export default RegisterPage;

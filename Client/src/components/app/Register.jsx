import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    phone: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!form.firstname || !form.lastname || !form.email || !form.password || !form.age || !form.gender || !form.phone) {
      setError("Please enter all fields");
      return;
    }
    if (form.age < 18) {
      setError("Age must be at least 18");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (form.firstname.length < 4 || form.lastname.length < 4) {
      setError("First name and last name must be at least 4 characters");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Invalid email format");
      return;
    }
    if (!form.phone) {
      setError("Please enter a phone number");
      return;
    }
    if (!form.gender) {
      setError("Please select a gender");
      return;
    }

    if (form.firstname && form.lastname && form.email && form.password && form.age && form.gender && form.phone) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          await response.json();
          navigate("/login");
        } else {
          const errorData = await response.json();
          setError(errorData.message || "An error occurred during registration");
        }
      } catch (error) {
        setError("Error submitting registration");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please enter all fields");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm(({ ...form, [name]: value }));
  };

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register </p>
        <p className="message">Register now and get full access to our app. </p>
        {error && <p className="error">{error}</p>}
        <div className="flex">
          <label>
            <input required placeholder type="text" className="input" name="firstname" onChange={handleInputChange} />
            <span>Firstname</span>
          </label>
          <label>
            <input required placeholder type="text" className="input" name="lastname" onChange={handleInputChange} />
            <span>Lastname</span>
          </label>
        </div>
        <div className="flex">
          <label>
            <input required placeholder type="text" className="input" name="age" onChange={handleInputChange} />
            <span> your Age</span>
          </label>
          <label>
            <input required placeholder type="text" className="input" name="gender" onChange={handleInputChange} />
            <span> Gender</span>
          </label>
        </div>
        <label>
          <input required placeholder type="email" className="input" name="email" onChange={handleInputChange} />
          <span>Email</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" name="password" onChange={handleInputChange} />
          <span>Password</span>
        </label>

        <label>
          <input required placeholder type="text" className="input" name="phone" onChange={handleInputChange} />
          <span>Phone Number</span>
        </label>
        <button type="submit" className="submit">{loading ? "Loading..." : "Register"}</button>
        <p className="signin">Already have an acount ? <a href="/login">Login</a> </p>
      </form>
    </StyledWrapper>
  )
}

export default Register


const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
  }

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,.title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message, .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
  }

  .error {
    color: red;
    font-size: 14px;
    text-align: center;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;


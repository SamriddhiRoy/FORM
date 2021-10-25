import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Get</h1>

        <div className="form-inputs">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Phone no</label>
          <input
            className="form-input"
            type="number"
            placeholder="Enter your phone no"
            value={values.phoneno}
            onChange={handleChange}
          />
          {errors.number && <p>{errors.number}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Matrimonal status </label>
          <input
            className="form-input"
            type="text"
            name="matrimonal status"
            placeholder="Enter your matrimonal status"
            value={values.matrimonalstatus}
            onChange={handleChange}
          />
          {errors.matrimonalstatus && <p>{errors.matrimonalstatus}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Address</label>
          <input
            className="form-input"
            type="text"
            name="Address"
            placeholder="Enter your address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Type of employee</label>
          <input
            className="form-input"
            type="text"
            name="employee type"
            placeholder="Enter your employee type"
            value={values.employeetype}
            onChange={handleChange}
          />
          {errors.employeetype && <p>{errors.employeetype}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Coordinate of address</label>
          <input
            className="form-input"
            type="number"
            placeholder="Enter longitude"
            value={values.longitude}
            onChange={handleChange}
          />
          {errors.longitude && <p>{errors.longitude}</p>}

          <input
            className="form-input"
            type="number"
            placeholder="Enter your latitude"
            value={values.latitude}
            onChange={handleChange}
          />
          {errors.latitude && <p>{errors.latitude}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Age </label>
          <input
            className="form-input"
            type="number"
            name="age"
            placeholder="Enter your age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Religion</label>
          <input
            className="form-input"
            type="text"
            name="religion"
            placeholder="Enter religion"
            value={values.religion}
            onChange={handleChange}
          />
          {errors.religion && <p>{errors.religion}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default FormSignup;

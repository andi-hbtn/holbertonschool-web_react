/* eslint-disable */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import "./Login.css";

export function Login({ formData, handleChangeEmail, handleChangePassword, handleLoginSubmit }) {

    return (
        <div>
            <p>Login to access the full dashboard</p>

            <label htmlFor="email">Email: </label>
            <input type="email" value={formData.email} id="email" name="email" onChange={handleChangeEmail} />

            <label htmlFor="password">Password: </label>
            <input type="password" value={formData.password} id="password" name="password" onChange={handleChangePassword} />

            <button type="button" onClick={handleLoginSubmit}>
                OK
            </button>
        </div>
    );
}
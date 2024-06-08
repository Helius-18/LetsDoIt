import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { apiRoutes } from "../../apiRoutes";
import config from "../../appSettings.json";
import { AppContext } from "../../AppContext";

const Login = () => {
  const { triggerToaster, setLoading } = useContext(AppContext);

  const [otpSent, setOtpSent] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});

  const sendOtp = async () => {
    if (!email || email === "") {
      triggerToaster("success", "Enter a Valid Email");
    }
    try {
      const data = { email: email };

      setLoading(true);
      const response = await axios.post(
        `${config.apiUrl}${apiRoutes.sendOtp}`,
        data
      );

      if (response.status === 200) {
        setOtpSent(true);
        triggerToaster("success", response?.data?.message);
      }
    } catch (error) {
      triggerToaster("danger", "Failed to send Otp");
    }
    setLoading(false);
  };

  const verifyOtp = async () => {
    try {
      const data = { email: email, otp: otp };

      setLoading(true);
      const response = await axios.post(
        `${config.apiUrl}${apiRoutes.verifyOtp}`,
        data
      );

      if (response.status === 200) {
        setOtpSent(true);
        setUser(response.data?.user);
        if (!response.data?.user?.isNew) {
          triggerToaster(
            "success",
            `Welcome back ${response.data?.user?.username}😁`
          );
          setIsAuth(true);
        }
      }
    } catch (error) {
      triggerToaster("danger", "Invalid Otp");
    }
    setLoading(false);
  };

  const saveUsername = async () => {
    try {
      const data = { email: email, username: username };

      setLoading(true);
      const response = await axios.post(
        `${config.apiUrl}${apiRoutes.updateUsername}`,
        data
      );

      if (response.status === 200) {
        triggerToaster("success", `Welcome ${username}😁`);
        setIsAuth(true);
      }
    } catch (error) {
      triggerToaster("danger", error);
    }
    setLoading(false);
  };

  return isAuth ? (
    <Navigate to="/dashboard" replace={true} />
  ) : (
    <div style={{ height: "100vh" }}>
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="col-11 col-md-2">
          <div className="mb-3">
            <h4>Lets Do It</h4>
            {!user?.isNew ? (
              <p>Verify your email to login or signup</p>
            ) : (
              <p>Enter a username</p>
            )}
          </div>
          {!user?.isNew ? (
            <div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    setEmail(e?.target?.value);
                  }}
                />
              </div>
              {otpSent ? (
                <div>
                  <div className="mb-3">
                    <label htmlFor="inputotp" className="form-label">
                      Enter OTP
                    </label>
                    <input
                      type="password"
                      id="inputotp"
                      className="form-control"
                      placeholder="Enter OTP"
                      onChange={(e) => {
                        setOtp(e?.target?.value);
                      }}
                    />
                  </div>
                  <div className="mb-3 d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={verifyOtp}
                    >
                      Verify
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={sendOtp}
                    >
                      Resend
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mb-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={sendOtp}
                  >
                    Send OTP
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter a username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e?.target?.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={saveUsername}
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

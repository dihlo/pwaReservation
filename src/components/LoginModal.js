import React, { useState } from "react";

function LoginModal({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "mytona" && password === "web2024") {
      onClose();
    } else {
      alert("Доступ запрещен");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={"modalModalBackground"}>
      <div className={"modalModalContainer"}>
        <form onSubmit={handleLogin}>
          <label className={"modalLabel"}>
            Login:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={"modalInput"}
              autoComplete="on"
            />
          </label>
          <label className={"modalLabel"}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={"modalInput"}
              autoComplete="current-password"
            />
          </label>
          <div>
            <button type="submit" className={`${"modalButton"}`}>
              Enter
            </button>
            <button
              onClick={onClose}
              type="button"
              className={`${"modalButton"} ${"modalButtonClose"}`}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;

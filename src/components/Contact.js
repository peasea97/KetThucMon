import React from "react";

const sectionStyle = {
  padding: "2rem",
  textAlign: "center",
  background: "#f4f4f4",
};

const formStyle = {
  margin: "0 auto",
  maxWidth: "500px",
  textAlign: "left",
};

const labelStyle = {
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  marginBottom: "1rem",
  border: "1px solid #ddd",
  borderRadius: "4px",
};

const buttonStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

function Contact() {
  return (
    <section id="contact" style={sectionStyle}>
      <h2>Liên Hệ Với Chúng Tôi</h2>
      <form style={formStyle}>
        <label style={labelStyle} htmlFor="name">
          Họ và Tên:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          style={inputStyle}
          placeholder="Nhập họ và tên"
        />
        <label style={labelStyle} htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          style={inputStyle}
          placeholder="Nhập email"
        />
        <label style={labelStyle} htmlFor="message">
          Lời Nhắn:
        </label>
        <textarea
          id="message"
          name="message"
          style={{ ...inputStyle, height: "100px" }}
          placeholder="Nhập lời nhắn"
        ></textarea>
        <button type="submit" style={buttonStyle}>
          Gửi
        </button>
      </form>
    </section>
  );
}

export default Contact;

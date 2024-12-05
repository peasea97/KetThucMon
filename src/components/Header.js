import React from "react";

const headerStyle = {
  position: "relative",
  color: "#fff",
  padding: "0.5rem 1rem", // Giảm padding trên và dưới
  display: "flex",
  justifyContent: "center", // Đảm bảo nội dung nằm chính giữa
  alignItems: "flex-start", // Điều chỉnh phần tử theo chiều dọc
  backgroundImage:
    "url('https://dochihome.vn/wp-content/uploads/2023/10/anh-nthat-phong-cach-1.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "200px",
  zIndex: 1,
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Lớp phủ tối mờ
  zIndex: 0,
};

const contentStyle = {
  position: "relative",
  zIndex: 2, // Đảm bảo nội dung nằm trên lớp phủ
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  paddingTop: "10px", // Di chuyển phần nội dung lên một chút
};

const logoStyle = {
  marginTop: "-20px", // Đẩy chữ logo lên một chút
};

const navLinkStyle = {
  color: "#fff",
  marginLeft: "1rem",
  textDecoration: "none",
};

function Header() {
  return (
    <header style={headerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={logoStyle}>Nội Thất ATrí</h1>
        <nav>
          <a href="#products" style={navLinkStyle}>
            Sản Phẩm
          </a>
          <a href="#contact" style={navLinkStyle}>
            Liên Hệ
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

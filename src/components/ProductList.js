import React, { useState } from "react";

const sectionStyle = {
  padding: "3rem 1rem", // Thêm khoảng cách cho phần trên và dưới
  textAlign: "center",
  backgroundColor: "#f9f9f9", // Màu nền nhẹ cho phần sản phẩm
};

const productListStyle = {
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "2rem", // Khoảng cách phía trên cho phần sản phẩm
};

const productItemStyle = {
  border: "1px solid #ddd",
  padding: "1rem",
  borderRadius: "10px", // Bo tròn các góc để mềm mại hơn
  width: "300px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Thêm bóng đổ nhẹ cho sản phẩm
  backgroundColor: "#fff", // Đảm bảo nền sáng
  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Hiệu ứng khi hover
  cursor: "pointer",
};

const productImageStyle = {
  width: "100%",
  height: "200px", // Đặt chiều cao cố định cho ảnh
  objectFit: "cover", // Đảm bảo ảnh không bị biến dạng
  borderRadius: "10px", // Bo tròn các góc của ảnh
};

const priceStyle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#e74c3c", // Màu đỏ cho giá
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "1rem", // Khoảng cách giữa nút và thông tin sản phẩm
  transition: "background-color 0.3s", // Hiệu ứng chuyển màu khi hover
};

const expandedDetailsStyle = {
  marginTop: "1rem",
  textAlign: "left",
  padding: "0.5rem",
  borderTop: "1px solid #ddd",
  backgroundColor: "#f7f7f7",
  borderRadius: "5px",
};

const headingStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "1rem",
};

const products = [
  {
    id: 1,
    name: "Bàn Gỗ Tự Nhiên",
    description: "Bàn thiết kế sang trọng",
    price: "5.000.000 VND",
    details: "Kích thước: 120x60x75 cm, chất liệu gỗ tự nhiên 100%.",
    image:
      "https://noithathoangchi.com/upload/images/phong-khach/sofago/mau-ban-ghe-sofa-go-hien-dai-sfg001.jpg",
  },
  {
    id: 2,
    name: "Ghế Sofa Hiện Đại",
    description: "Ghế mềm mại và thoải mái",
    price: "10.000.000 VND",
    details: "Chất liệu vải cao cấp, kích thước: 200x90x80 cm.",
    image:
      "https://sofahoangduc.com/wp-content/uploads/2023/07/ghe-sofa-goc-ni-dep-sf70.1.jpg",
  },
  {
    id: 3,
    name: "Tủ Kệ Đa Năng",
    description: "Tiện dụng cho mọi không gian",
    price: "7.000.000 VND",
    details: "Chất liệu gỗ MDF, kích thước: 180x50x200 cm.",
    image:
      "https://netdecor.com.vn/wp-content/uploads/2022/08/giuong-da-nang-lien-tu-thong-minh-dep-nhat-2022-gg-25-1.jpg",
  },
  {
    id: 4,
    name: "Giường Ngủ Cao Cấp",
    description: "Giường gỗ thiết kế hiện đại",
    price: "15.000.000 VND",
    details: "Chất liệu gỗ tự nhiên, kích thước 200x180 cm.",
    image:
      "https://bizweb.dktcdn.net/100/358/409/files/o1cn01d80giu1gfrtvamuuu-2211842134169-0-cib.jpg?v=1642670254834",
  },
  {
    id: 5,
    name: "Bàn Làm Việc Gỗ",
    description: "Bàn làm việc đơn giản và tiện lợi",
    price: "4.500.000 VND",
    details: "Kích thước: 120x60x75 cm, chất liệu gỗ công nghiệp.",
    image: "https://noithat190.com/wp-content/uploads/2016/05/BG01B-1.jpg",
  },
  {
    id: 6,
    name: "Ghế Văn Phòng Ergonomic",
    description: "Ghế hỗ trợ lưng và cổ, cực kỳ thoải mái",
    price: "3.500.000 VND",
    details: "Thiết kế công thái học, điều chỉnh độ cao linh hoạt.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGjKH6ilzmDk5zT0WaaJ7UGoC18-FU95Dog&s",
  },
  {
    id: 7,
    name: "Tủ Giày Thông Minh",
    description: "Tủ giày gọn nhẹ, đa năng",
    price: "2.800.000 VND",
    details: "Sức chứa 20 đôi giày, chất liệu gỗ MDF chống nước.",
    image: "https://noithatnhaxanh.vn/wp-content/uploads/2023/04/3-1.jpg",
  },
  {
    id: 8,
    name: "Đèn Bàn LED Hiện Đại",
    description: "Đèn LED tiết kiệm điện năng",
    price: "1.200.000 VND",
    details: "Công suất 10W, có thể điều chỉnh độ sáng.",
    image:
      "https://lh4.googleusercontent.com/proxy/K3EmcEuulzf3JwbiQz4WhLD4jHWbw8H_m0pGHzBKRPjK_L4akoIq0L4Hx-_FsPoSQ4y6FYAnevf3CwtkEQjXN_xsMxtnXerUcT5Ly2bZ9Omf6pGQXvuntka7btnS4VMwNlleyLOr5ndjVCwHCVsuOvAJKJMSEmUTvaK05hcnCWWZzNUMgumltFshaHbuUpM4KAVMcnrY64AQvS67msrDaaUhpjmnK3e3v0vtYa6Hg-NilsY",
  },
];

function ProductList() {
  const [expandedProductId, setExpandedProductId] = useState(null);

  const toggleDetails = (id) => {
    setExpandedProductId(expandedProductId === id ? null : id);
  };

  return (
    <section id="products" style={sectionStyle}>
      <h2 style={headingStyle}>Sản Phẩm Nổi Bật</h2>
      <div style={productListStyle}>
        {products.map((product) => (
          <div
            key={product.id}
            style={productItemStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={product.image}
              alt={product.name}
              style={productImageStyle}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p style={priceStyle}>{product.price}</p>
            <button
              onClick={() => toggleDetails(product.id)}
              style={buttonStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#007bff")
              }
            >
              {expandedProductId === product.id
                ? "Ẩn chi tiết"
                : "Xem chi tiết"}
            </button>
            {expandedProductId === product.id && (
              <div style={expandedDetailsStyle}>
                <p>{product.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;

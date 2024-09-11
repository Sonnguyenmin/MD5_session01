import React from "react";

export default function Information() {
  const users = {
    name: "Nguyễn Văn A",
    gender: "Nam",
    dateOfBirth: "06/03/2024",
    email: "nva@gmail.com",
    address: "Thanh Xuân, Hà Nội",
  };

  const { name, address, dateOfBirth, email, gender } = users;
  return (
    <>
      <div style={{ margin: 10 }}>
        <h1>Thông Tin Cá Nhân</h1>
        <li>Họ tên: {users.name}</li>
        <li>Giới tính: {users.gender}</li>
        <li>Ngày sinh: {users.dateOfBirth}</li>
        <li>Email: {users.email}</li>
        <li>Địa chỉ: {users.email}</li>
      </div>
    </>
  );
}

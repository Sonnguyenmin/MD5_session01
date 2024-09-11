import React from 'react'

export default function FormatName() {
    const user = {
        firstName: "Nguyễn Văn",
        lastName: "Nam",
      };    
  return (
    <div>Họ Tên: {user.firstName} {user.lastName}</div>
  )
}

import React from 'react'

export default function ListCourse() {
  //Mảng khóa học được lấy ra từ database
  const courses = [
    {
      id: 1,
      name: "HTML"
    },
    {
      id: 2,
      name: "CSS"
    },
    {
      id: 3,
      name: "PHP"
    },
    {
      id: 4,
      name: "JAVASCRIPT"
    },
    {
      id: 5,
      name: "JAVA"
    }
  ]

  return (
    <>
    <h1>Danh sách khóa học</h1>
      <ol style={{fontSize: 15, color: "#4F75FF"}}>
        {
          courses.map((course, index) => {
            return <li key={course.id}>{course.name}</li>
          })
        }
      </ol>
    </>
  )
}

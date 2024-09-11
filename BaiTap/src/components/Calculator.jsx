import React from "react";

export default function Calculator() {
  const numbers = [10];
  const results = numbers.map((num) => ({
    number: num,
    addition: num + 10,
    subtraction: num - 10,
    multiplication: num * 10,
    division: num / 10,
  }));
  return (
    <>
      <h1>Danh sách Kết quả</h1>
      <ul style={{ fontSize: 18, color: "#CB80AB" }}>
        {results.map((result) => (
          <>
            <li key={result.id}>{result.addition}</li>
            <li key={result.id}>{result.subtraction}</li>
            <li key={result.id}>{result.multiplication}</li>
            <li key={result.id}>{result.division}</li>
          </>
        ))}
      </ul>
    </>
  );
}

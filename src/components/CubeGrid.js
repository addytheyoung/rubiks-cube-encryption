import React from "react";

export default function CubeGrid({ cube, size }) {
  const tr = [];
  for (let i = 0; i < 3 * size; i++) {
    const td = [];
    for (let j = 0; j < 4 * size; j++) {
      td.push(
        <td
          key={`${i},${j}`}
          bgcolor={cube[i][j].color}
          // align="char"
          // width="200"
        >
          {cube[i][j].character}
        </td>
      );
    }
    tr.push(<tr key={i}>{td}</tr>);
  }
  return (
    <table style={{ margin: 25 }}>
      <tbody>{tr}</tbody>
    </table>
  );
}

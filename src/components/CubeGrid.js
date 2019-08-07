import React from "react";

export default function CubeGrid({ cube, size }) {
  console.log(cube);
  const tr = [];
  for (let i = 0; i < 3 * size; i++) {
    const td = [];
    for (let j = 0; j < 4 * size; j++) {
      td.push(
        <td key={`${i},${j}`} bgcolor={cube[i][j].color}>
          {cube[i][j].character}
        </td>
      );
    }
    tr.push(<tr key={i}>{td}</tr>);
  }

  return (
    <table>
      <tbody>{tr}</tbody>
    </table>
  );
}

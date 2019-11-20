import React from "react";
import Cube from "./components/Cube";
// import { generateArrayKey } from "../math/Key";

function App() {
  // console.log(stringKey);
  const size = Math.ceil(Math.sqrt(message.length / 6.0));
  // const key = generateArrayKey(size);
  return (
    <div>
      <Cube message={message} />
    </div>
  );
}

// const stringKey = 12113435820345205272529873052092738565389756345632646797354525797876512633356432;

const message =
  "It is a cliché, of course, to claim that a presidential election is the most important in living memory. But we arrived at that point in the 2016 campaign many months ago, when both sides declared their opponent unqualified for office. Unfortunately, this time the cliché is true, and one side is actually right. A choice this stark proves that there is something wrong with our political system. Hillary Clinton is a terribly flawed candidate for the presidency, and this has allowed millions of otherwise sane Americans to imagine that she is less fit for office than Donald Trump is.Much depends on a majority of the electorate seeing through this moral and political illusion in the weeks ahead. It is a cliché, of course, to claim that a presidential election is the most important in living memory. But we arrived at that point in the 2016 campaign many months ago, when both sides declared their opponent unqualified for office. Unfortunately, this time the cliché is true, and one side is actually right. A choice this stark proves that there is something wrong with our political system. Hillary Clinton is a terribly flawed candidate for the presidency, and this has allowed millions of otherwise sane Americans to imagine that she is less fit for office than Donald Trump is.Much depends on a majority of the electorate seeing through this moral and political illusion in the weeks ahead. It is a cliché, of course, to claim that a presidential election is the most important in living memory. But we arrived at that point in the 2016 campaign many months ago, when both sides declared their opponent unqualified for office. Unfortunately, this time the cliché is true, and one side is actually right. A choice this stark proves that there is something wrong with our political system. Hillary Clinton is a terribly flawed candidate for the presidency, and this has allowed millions of otherwise sane Americans to imagine that she is less fit for office than Donald Trump is.Much depends on a majority of the electorate seeing through this moral and political illusion in the weeks ahead.It is a cliché, of course, to claim that a presidential election is the most important in living memory. But we arrived at that point in the 2016 campaign many months ago, when both sides declared their opponent unqualified for office. Unfortunately, this time the cliché is true, and one side is actually right. A choice this stark proves that there is something wrong with our political system. Hillary Clinton is a terribly flawed candidate for the presidency, and this has allowed millions of otherwise sane Americans to imagine that she is less fit for office than Donald Trump is.Much depends on a majority of the electorate seeing through this moral and political illusion in the weeks ahead. It is a cliché, of course, to claim that a presidential election is the most important in living memory. ";

export default App;

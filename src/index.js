import "./styles.css";

const main = () => {
  let board = document.getElementById("board");

  document.querySelectorAll("td").forEach((e, i) => {
    e.onclick = () => {handleClick()};
  });
}

const handleClick = () => {
  document.querySelectorAll("td").forEach((e, i) => {
    e.innerHTML = e.innerHTML === "x" ? "o" : "x";
  });
}

export default main;

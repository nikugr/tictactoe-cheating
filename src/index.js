import "./styles.css";

var clickCount = 0;

const main = () => {
  let board = document.getElementById("board");

  document.querySelectorAll("td").forEach((e, i) => {
    e.onclick = () => {handleClick(e)};
  });
}

const handleClick = (e) => {
  //document.querySelectorAll("td").forEach((e, i) => {
    e.innerHTML = 0 === clickCount % 2 ? "x" : "o";
  //});
  clickCount++;
  if(clickCount === 9) {
    alert("Player 1 won!");
  }
  else if(clickCount === 10) {
    alert("Player 2 won!");
  }
}

export default main;

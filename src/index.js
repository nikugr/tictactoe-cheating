import "./styles.css";

var clickCount = 0;
var counts = [12, 10, 15];
var mainCount = -1;

const main = () => {
  mainCount++;
  let board = document.getElementById("board");

  document.querySelectorAll("td").forEach((e, i) => {
    e.onclick = () => {handleClick(e)};
  });
}

const handleClick = (e) => {
  //document.querySelectorAll("td").forEach((e, i) => {
    if(e.innerHTML === "" && clickCount <= counts[mainCount]) {
      e.innerHTML = clickCount % 2 === 0 ? "x" : "o";
    }
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

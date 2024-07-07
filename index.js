// Write your code here!
const node = document.getElementById("main");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = 'Sara is the champion';
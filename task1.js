// function random_item(items)
// {
// return items[Math.floor(Math.random()*items.length)];  
// }
// var items = [254, 45, 212, 365, 2543];
// console.log(random_item(items));

let names = ['Thanh Tung', 'Nguyen Viet', 'Ngoc Duy', 'Hoai Nam', 'Phan Chuong']
let para = document.querySelector('p');
function chooseName() {
  let randomNumber = Math.floor(Math.random() * names.length);
  let choice = names[randomNumber];
  para.textContent = choice
}

chooseName()


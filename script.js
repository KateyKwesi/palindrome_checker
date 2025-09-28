let input = document.getElementById(`text-input`);
let btn = document.getElementById(`check-btn`);
let result = document.getElementById(`result`);

btn.addEventListener(`click`, () => {
  input.value === `` ? alert(`Please input a value`) : null;
  let filterRegex = /[\W|_]/gi;
  let str = input.value;
  let replace = str.replace(filterRegex, ``).toLowerCase();
  let reversed = replace.split(``).reverse().join(``);

  replace === reversed
    ? (result.textContent = `${input.value} is a palindrome`)
    : (result.textContent = `${input.value} is not a palindrome`);
});

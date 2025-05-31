document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value;
  const result = document.getElementById("result");

  if (input.trim() === "") {
    alert("Please input a value");
    return;
  }

  const cleanText = input.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reversed = cleanText.split('').reverse().join('');

  if (cleanText === reversed) {
    result.textContent = `${input} is a palindrome.`;
  } else {
    result.textContent = `${input} is not a palindrome.`;
  }
});

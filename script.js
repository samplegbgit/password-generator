const len = document.getElementById("length"),
  out = document.getElementById("output"),
  btn = document.getElementById("generate");
const copy = document.createElement("button");
copy.textContent = "Copy";
document.querySelector(".box").appendChild(copy);
function gen(l) {
  const c =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let p = "";
  for (let i = 0; i < l; i++) p += c[Math.floor(Math.random() * c.length)];
  return p;
}
function strength(p) {
  return p.length > 12 ? "Strong" : p.length > 8 ? "Medium" : "Weak";
}
btn.onclick = () => {
  const pw = gen(len.value || 12);
  out.value = pw;
  out.style.borderColor =
    strength(pw) === "Strong"
      ? "green"
      : strength(pw) === "Medium"
      ? "orange"
      : "red";
};
copy.onclick = () => navigator.clipboard.writeText(out.value);

const toLowerCaseBtn = document.querySelector(".toLowercase");
const toUpperCaseBtn = document.querySelector(".toUppercase");
const sourceText = document.querySelector("#sourceText");
const targetText = document.querySelector("#targetText");
const clearSourceTextBtn = document.querySelector(".clearSourceText");
const clearTargetTextBtn = document.querySelector(".clearTargetText");
const locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
const state = {
  "text": "",
  "case": "",
};

toUpperCaseBtn.addEventListener("click", (e) => {
  if (sourceText.value) {
    const tmpStr = sourceText.value.replaceAll("\n", " ");
    targetText.innerText = tmpStr.toLocaleUpperCase(locales);
  }
});

sourceText.addEventListener("input", (e) => {
  console.log("first")
  state.text = e.target.value;
  const tmpStr = state.text.replaceAll("\n", " ");
  targetText.innerText = state.text.toLocaleLowerCase(locales);
})

toLowerCaseBtn.addEventListener("click", (e) => {
  if (sourceText.value) {
    const tmpStr = sourceText.value.replaceAll("\n", " ");
    targetText.innerText = tmpStr.toLocaleLowerCase(locales);
  }
})

clearSourceTextBtn.addEventListener("click", (e) => {
  sourceText.textContent = "";
  sourceText.value = "";
  state.text;
})

clearTargetTextBtn.addEventListener("click", (e) => {
  targetText.textContent = "";
  state.text;
})
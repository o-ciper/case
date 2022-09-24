const sourceText = document.querySelector("#sourceText");
const targetText = document.querySelector("#targetText");
const clearSourceTextBtn = document.querySelector(".clearSourceText");
const clearTargetTextBtn = document.querySelector(".clearTargetText");
const selectCase = document.querySelector("#selectCase");

const locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];

const state = {
  "text": "",
  "case": "lowercase",
};

const updateText = (currCase, ctx) => {
  if (typeof ctx === "object") {
    state.text = ctx.target.value.replaceAll("\n", " ");
  } else if (typeof ctx === "string") {
    state.text = state.text;
  } else {
    state.text = "";
  }

  switch (currCase) {
    case "lowercase":
      targetText.innerText = state.text.toLocaleLowerCase(locales);
      break;
  
    case "uppercase":
      targetText.innerText = state.text.toLocaleUpperCase(locales);
      break;
    default:
      break;
  }
}

selectCase.addEventListener("change", (e) => {
  state.case = e.target.value;
  updateText(state.case, state.text);
})

sourceText.addEventListener("input", (e) => {
  updateText(state.case, e);
})

clearSourceTextBtn.addEventListener("click", (e) => {
  sourceText.textContent = "";
  sourceText.value = "";
  state.text;
});

clearTargetTextBtn.addEventListener("click", (e) => {
  targetText.textContent = "";
  state.text;
})
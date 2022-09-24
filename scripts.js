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
    state.text = ctx;
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

    case "capitalize":
      const temp = state.text.toLocaleLowerCase(locales).split(" ");
      // let text = "";
      // if (state.text.length > 0) {
      //   const temp = state.text.toLocaleLowerCase(locales).split(" ");
      //   targetText.innerText = temp.map((word) => { 
      //     if (word[0])
      //       return word[0].toLocaleUpperCase(locales) + word.substring(1); 
      //   }).join(" ");
      // }
      if (state.text.length > 0) {
        for (let i = 0; i < temp.length; i++) {
          if (temp[i][0])
            temp[i] = temp[i][0].toLocaleUpperCase(locales) + temp[i].substr(1);
        }
      }
      targetText.innerText = temp.join(" ");
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
  updateText(state.case, "");
});

clearTargetTextBtn.addEventListener("click", (e) => {
  targetText.textContent = "";
})
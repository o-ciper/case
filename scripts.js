const sourceText = document.querySelector("#sourceText");
const targetText = document.querySelector("#targetText");
const clearSourceTextBtn = document.querySelector(".clearSourceText");
const clearTargetTextBtn = document.querySelector(".clearTargetText");
const selectCase = document.querySelector("#selectCase");

const locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];

const charMap = {
  "Ş": "S",
  "ş": "s",
  "Ü": "U",
  "ü": "u",
  "Ö": "O",
  "ö": "o",
  "İ": "I",
  "ı": "i",
  "Ğ": "G",
  "ğ": "g",
  "Ç": "C",
  "ç": "c",
}

function turkishToEnglish(text, charMap) {
  if (!(typeof text == "string" && typeof charMap == "object")) return;
  for (var i = 0; i < text.length; i++) {
    if (charMap.hasOwnProperty(text[i])) {
      text = text.replaceAll(text[i], charMap[text[i]]).toLocaleLowerCase(locales);
    }
  }
  targetText.innerText = text;
}

const state = {
  "text": "",
  "case": "lowercase",
};

let text = "";

const updateText = (currCase, ctx) => {
  if (!(currCase == "tr-to-eng-lower")) {
    if (typeof ctx === "object") {
      state.text = ctx.target.value.replaceAll("\n", " ");
    } else if (typeof ctx === "string") {
      state.text = ctx;
    } else {
      state.text = "";
    }
  }

  switch (currCase) {
    case "lowercase":
      targetText.innerText = state.text.toLocaleLowerCase(locales);
      break;
  
    case "uppercase":
      targetText.innerText = state.text.toLocaleUpperCase(locales);
      break;

    case "capitalize":
      const exceptions = ["ve", "A.Ş.", "AŞ.", "AŞ", "A.Ş"];
      const temp = state.text.split(" ");
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
          if (exceptions.includes(temp[i]))
            continue;
          if ((temp[i] === "Ve") || (temp[i] === "VE")) {
            temp[i] = temp[i].toLocaleLowerCase(locales);
            continue;
          }
          if (temp[i][0])
            temp[i] = temp[i][0].toLocaleUpperCase(locales) + temp[i].substring(1).toLocaleLowerCase(locales);
        }
      }
      targetText.innerText = temp.join(" ");
      break;

    default:
      break;
  }
}

selectCase.addEventListener("change", (e) => {
  if (e.target.value === "tr-to-eng-lower") {
    state.case = "tr-to-eng-lower";
  } else {
    state.case = e.target.value;
    updateText(state.case, state.text);
  }
})

sourceText.addEventListener("input", (e) => {
  text = e.target.value;
  if (state.case === "tr-to-eng-lower") {
    turkishToEnglish(text, charMap);
  } else {
    updateText(state.case, e);
  }
})

clearSourceTextBtn.addEventListener("click", (e) => {
  sourceText.textContent = "";
  sourceText.value = "";
});

clearTargetTextBtn.addEventListener("click", (e) => {
  targetText.textContent = "";
})
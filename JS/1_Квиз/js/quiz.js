const cards = document.querySelectorAll(".plate");
let currentIndex = 0;
let currentCards = 0;

cards.forEach(function (item) {
  item.classList.add("none");
});

cards[currentIndex].classList.remove("none");
cards[currentIndex].classList.add("visible");

// когда мы описываем селектор по атрибутам мы используем [] скобки
cards[0].querySelector("[data-nav='prev']").remove();

window.addEventListener("click", function (e) {
  
  // для кнопки вперед
  if (e.target.closest('[data-nav="next"]')) {
    if (currentIndex === cards.length - 1) {
      return;
    }

    const result = checkOnAnswer(cards[currentIndex]);
    const answerWrapper = cards[currentIndex].querySelector("[data-answers]");

    if (result) {
      updateProgressBar("next");
      setTimeout(function () {
        cards[currentIndex].classList.remove("visible"); // Скрываем текущую с аниманицей

        setTimeout(function () {
          cards[currentIndex].classList.add("none"); // Скрываем всё

          currentIndex++;           // Показываем следующую, готовим к анимации
          cards[currentIndex].classList.remove("none"); // убираем класс none 
          setTimeout(function () {
            cards[currentIndex].classList.add("visible");
          }, 200);
        }, 400);
        // cards[currentIndex].classList.add("visible");

        answerWrapper.classList.remove("required");
      }, 400);
    } else {
      console.error("Выберите ответ!!!");
      answerWrapper.classList.add("required");

      return;
    }
  }

  // для кнопки назад
  if (e.target.closest('[data-nav="prev"]')) {
    updateProgressBar("prev");
    setTimeout(function () {
      cards[currentIndex].classList.remove("visible"); //Перемещение между карточками
      setTimeout(function () {
        cards[currentIndex].classList.add("none");

        currentIndex--;
        cards[currentIndex].classList.remove("none");
        setTimeout(function () {
          cards[currentIndex].classList.add("visible");
        }, 200);
      }, 400);
    }, 400);
  }
});

function checkOnAnswer(card) {
  // Проверки на радиокнопки
  const radioBtns = card.querySelectorAll("input[type='radio']");
  if (radioBtns.length > 0) {
    for (let radio of radioBtns) if (radio.checked) return true;
  }

  // Проверки на чекбоксы
  const checkBoxes = card.querySelectorAll("input[type='checkbox']");
  if (checkBoxes.length > 0) {
    for (let checkBox of checkBoxes) if (checkBox.checked) return true;
  }
}

function updateProgressBar(direction = "start") {
  if (direction === "next") {
    currentCards++;
  }
  if (direction === "prev") {
    currentCards--;
  }

  const progressValue = document.querySelectorAll(".progress__label strong");
  console.log(progressValue);
  const progressBar = document.querySelectorAll(".progress__line-bar");
  console.log(progressBar);

  const countableCards = document.querySelectorAll("[data-progress]").length;
  console.log(countableCards);
  const progress = Math.round((currentCards * 100) / countableCards);
  console.log(progress);

  progressValue.forEach(function (item) {
    item.innerText = progress + "%";
  });
  progressBar.forEach(function (item) {
    item.style.width = progress + "%";
  });
}

mask("#tel");
const submitForm = document.querySelector("#submitForm");
const inpPhone = document.querySelector("#tel");

submitForm.onclick = function () {
  if (inpPhone.value === "+" || inpPhone.value.length < 6) {
    inpPhone.value = "";
  }
};

const checkBoxPolicy = document.querySelector("#policy");
checkBoxPolicy.addEventListener("focus", function (e) {
  console.log("focuuus");
  this.closest("label").classList.add("hovered");
});
checkBoxPolicy.addEventListener("blur", function () {
  // Прослушка выхода - blur
  console.log("blur");
  checkBoxPolicy.closest("label").classList.remove("hovered");
});

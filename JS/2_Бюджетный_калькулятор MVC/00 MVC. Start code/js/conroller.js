import * as model from "./model.js";
import * as view from "./view.js";

// Functions
view.renderTestData(model.getTestData());
view.renderMonth(model.displayMonth());
view.renderBudget(model.calcBudget()); // Посчитать бюджет

// Добавление
view.elements.form.addEventListener("submit", function (e) {
  e.preventDefault();

  const checkResult = view.checkEmptyFields();
  if (checkResult === false) return; // проверка условий функции проверки
  //   if (!view.checkEmptyFields()) return; // проверка условий функции проверки
  const formData = view.getFormData();
  console.log("formData", formData)
  const record = model.createRecord(formData);
  console.log("record", record)

  view.renderRecord(record);

  view.renderBudget(model.calcBudget()); // Посчитать бюджет

  view.clearForm();
  view.renderTestData(model.getTestData());
});

// Удаление
document.body.addEventListener("click", function (e) {
  // Кнопка удалить
  if (e.target.closest("button.item__remove")) {
    const id = view.removeRecord(e);
    model.deleteRecord(id);
    view.renderBudget(model.calcBudget()); // Посчитать бюджет
  }
});

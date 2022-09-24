import React from "react";
import Checkbox from "/src/components/ui/checkbox/checkbox";
import { Ul, Li } from "/src/components/styled";


function CheckboxList ({
  selectValues, // массив выбранных значений
  labelComponent, // Компонент для отображения label
  options, // массив с объектами для выбора {title: заголовок, value: значение}
  name, // имя
  onChange, // событие при изменении
  isGridList,
  onClickLabel = () => {}
})
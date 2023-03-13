import { createSlice } from "@reduxjs/toolkit";
import internalData from "../data/data.json";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    // [{number: "123456", name: "Aleksei", text: "Hohoho"}, 
    //  {number: "654321", name: "Fillip", text: "Hahaha"}]
    value: [],
    locations: []
  },
  reducers: {
    addNewElement: (state, action) => {
      const number = action.payload;
      const nameAndText = internalData[number];

      if (nameAndText !== undefined) {
        // если данные существуют
        const newItem = {
          number: number,
          name: nameAndText.name,
          text: nameAndText.text,
        };

        state.value.unshift(newItem);
      } else {
        //если таких данных нет
        const newItem = {
          number: number,
          text: "Вы не узнаете ничего примечательного",
        };

        state.value.unshift(newItem);
      }

      let uniqueLocations = new Set(state.locations);
      uniqueLocations.add(number);
      state.locations = Array.from(uniqueLocations);
    },
  },
});

export const { addNewElement } = dataSlice.actions;
export const selectCount = (store) => store.data.locations.length;
export const selectData = (store) => store.data.value;
export default dataSlice.reducer;

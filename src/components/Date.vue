<template>
  <div class="date__container">
    <hr />
    <div>
      <input type="date" v-model="date" id="" @change="fetchData" />
      <select
        @change="Select(this.selected)"
        v-model="selected"
        class="selected"
      >
        <option v-for="item in country" :key="item.index" :value="item">
          {{ item }}
        </option>
      </select>
      <br />
      <br />
      <span>날짜: {{ date }}</span>
      <br />
      <span>국가: {{ selected }}</span>
      <br />
      <span>환율: {{ rate }}</span>
    </div>
  </div>
</template>

<script>
import { date } from "../api";

export default {
  data() {
    return {
      date: "",
      rates: {},
      country: [],
      rate: "",
      selected: "",
    };
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await date(`${this.date}`);
        let rates = data.rates;
        this.rates = rates;
        this.rate = rates;
        let countries = Object.keys(rates);
        countries.unshift("All Countries");
        this.country = countries;
        this.selected = "All Countries";
      } catch (error) {
        return error;
      }
    },
    Select(country) {
      const rates = this.rates;
      if (country === "All Countries") {
        this.rate = rates;
      } else {
        const selectedValue = rates[country];
        this.rate = selectedValue;
      }
    },
  },
};
</script>

<style>
.date__container {
  margin: 30px 0;
}
.selected {
  margin: 0 10px;
  padding: 2px;
  width: 100px;
}
</style>

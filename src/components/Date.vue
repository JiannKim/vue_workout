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
      console.log("fetchData");
      try {
        console.log("try");
        const { data } = await date(`${this.date}`);
        console.log(data);
        let rates = data.rates;
        this.rates = rates;
        this.rate = rates;
        console.log("this.rates ==>", this.rates);
        let countries = Object.keys(rates);
        countries.unshift("All Countries");
        console.log("countries ==>", countries);
        this.country = countries;
        console.log("this.country ==>", this.country);
        this.selected = "All Countries";
        console.log("this.selected ==>", this.selected);
      } catch (error) {
        return error;
      }
    },
    Select(country) {
      console.log("Select()");
      console.log("this.selected ==>", this.selected);
      const rates = this.rates;
      console.log("let rates ==>", rates);
      if (country === "All Countries") {
        console.log("if country", country);
        this.rate = rates;
      } else {
        const selectedValue = rates[country];
        this.rate = selectedValue;
        console.log("else this.rates(selectedValue) ==>", this.rate);
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

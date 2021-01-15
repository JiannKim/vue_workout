<template>
  <div>
    <select
      id=""
      @change="Select(this.selected)"
      class="selected"
      v-model="selected"
    >
      <option
        v-for="country in countries"
        :key="country.index"
        :value="country"
      >
        {{ country }}
      </option>
    </select>
    <br />
    <br />
    <span>국가: {{ selected }}</span>
    <br />
    <span>최신 환율: {{ this.rate }}</span>
  </div>
</template>

<script>
import { latest } from "../api";

export default {
  data() {
    return {
      selected: "All Countries",
      countries: [],
      rates: {},
      rate: "",
    };
  },
  methods: {
    async fetch() {
      try {
        const { data } = await latest();
        const rates = data.rates;
        this.rates = rates;
        let countries = Object.keys(rates);
        countries.unshift("All Countries");
        this.countries = countries;
      } catch (error) {
        return;
      }
    },
    Select(country) {
      let rates = this.rates;
      if (country === "All Countries") {
        this.rate = rates;
      } else {
        const selectedValue = rates[country];
        this.rate = selectedValue;
      }
    },
  },
  async created() {
    await this.fetch();
    this.Select("All Countries");
  },
};
</script>

<style>
.selected {
  width: 100px;
}
</style>

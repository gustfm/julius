<template>
  <div class="summary-container">
    <div class="cards">
      <div class="card">
        <small class="font-normal context-title">Total incoming</small>
        <div class="flex">
          <small class="mr-1">R$</small>
          <p class="font-medium text-3xl main-value">2.700,00</p>
        </div>

        <div></div>
      </div>
      <div class="card">a</div>
      <div class="card">a</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Summary extends Vue {}
</script>

<style lang="scss" scoped>
.summary-container {
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 20px;

    .card {
      background-color: #242424;
      border-radius: 4px;
      padding: 12px;
      color: #f8f8f8;

      .main-value {
        line-height: 1;
      }
      .context-title {
        color: #cecdcd;
        font-size: 9pt;
      }
    }
  }
}
</style>

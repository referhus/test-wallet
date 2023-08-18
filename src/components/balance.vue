<template>
  <div :class="['balance', { _fill: $root.isMobile }]">
    <div class="balance__text text">Ваш баланс:</div>
    <div class="balance__sum __tenge">200.00</div>
    <img class="balance__icon" src="/images/wallet.svg" alt="" />
    <div class="balance__btns">
      <button class="btn btn_bg">Пополнить</button>
      <button class="btn btn_border">Вывести</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "balance-cmp",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.balance {
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
  padding: 25px;
  display: grid;
  grid-template-areas: "text-area icon-area" "sum-area icon-area" "btns-area btns-area";
  height: max-content;

  @media screen and (max-width: 1280px) {
    padding: 20px;
    gap: 10px;
  }

  @media screen and (max-width: 1024px) {
    gap: 12px;
  }

  &__text {
    grid-area: text-area;
    @media screen and (max-width: 1280px) {
      font-size: 12px;
    }
  }
  &__sum {
    grid-area: sum-area;
    font-size: 25px;
    font-weight: 700;

    @media screen and (max-width: 1280px) {
      font-size: 18px;
    }
    @media screen and (max-width: 767px) {
      font-size: 15px;
    }
  }
  &__icon {
    grid-area: icon-area;
    margin-left: auto;
    @media screen and (max-width: 1280px) {
      width: 40px;
    }
  }
  &__btns {
    margin-top: 68px;
    grid-area: btns-area;
    display: flex;
    justify-content: space-between;

    & .btn {
      width: calc(50% - 8px);
    }
    @media screen and (max-width: 1280px) {
      margin-top: 40px;
      flex-direction: column;
      gap: 15px;

      & .btn {
        width: 100%;
      }
    }

    @media screen and (max-width: 1024px) {
      margin-top: 25px;
    }

    @media screen and (max-width: 767px) {
      flex-direction: row;
      margin-top: 7px;

      & .btn {
        width: calc(50% - 8px);
      }
    }
  }
}
</style>

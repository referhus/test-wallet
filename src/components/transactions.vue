<template>
  <table :class="['transactions', { _fill: $root.isMobile }]">
    <thead v-if="!$root.isMobile">
      <tr class="transactions__head">
        <td></td>
        <td v-for="(item, key) in head" :key="key" class="text_small">
          {{ item }}
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, key) in results"
        :key="'trans-' + key"
        class="transactions__row"
      >
        <row-desktop
          v-if="!$root.isMobile"
          :item="item"
          @set-icon="icons"
        ></row-desktop>
        <row-mobile v-else :item="item"></row-mobile>
      </tr>
    </tbody>
  </table>
</template>
<script>
import rowDesktop from "./row-desktop.vue";
import rowMobile from "./row-mobile.vue";

import { mapState } from "vuex";
export default {
  name: "transactions-cmp",
  data: () => {
    return {
      head: ["#", "Дата", "Описание", "Статус", "Сумма"],
    };
  },
  computed: {
    ...mapState(["results"]),
  },
  components: {
    rowDesktop,
    rowMobile,
  },
};
</script>

<style lang="scss">
.transactions {
  border-spacing: 0 10px;
  height: max-content;
  &__head {
    color: #7d7781;
  }
  &__row {
    & > td {
      backdrop-filter: blur(5px);
      background: rgba(255, 255, 255, 0.03);
      border-top: 1px solid rgba(255, 255, 255, 0.07);
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05),
        30px 25px 48px 8px rgba(6, 3, 9, 0.1);
      padding-top: 10px;
      padding-bottom: 10px;
    }
    & > td:first-child {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding-left: 10px;
    }

    & > td:last-child {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      padding-right: 10px;
    }
    @media screen and (max-width: 1024px) {
      & > td {
        font-size: 12px;
        line-height: normal;
      }
    }
  }
  &__icon {
    padding: 14px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05),
      30px 25px 48px 8px rgba(6, 3, 9, 0.1);
    backdrop-filter: blur(5px);
    width: max-content;
    height: 44px;

    @media screen and (max-width: 1024px) {
      padding: 10px;
      height: 35px;
    }
  }
  &__td {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & .waiting {
    color: #ffce4f;
  }
  & .done {
    color: #29c226;
  }
  & .canceled {
    color: #fa3939;
  }
  & .__kzt {
    color: #7d7781;
    font-size: 12px;
  }
}
</style>

<template>
  <div :class="['filters', { _fill: $root.isTablet || $root.isMobile }]">
    <select-cmp
      v-show="visible"
      class="filters__dropdown"
      ref="select"
      v-for="(item, key) in filters"
      :key="key"
      :id="item.id"
      :active="item.active"
      :items="item.items"
      :label="item.label"
    >
    </select-cmp>
    <div v-if="$root.isMobile" class="filters__button" @click="toggle">
      <span class="text_small">{{ textBtn }}</span>
      <span
        :class="[
          'filters__button-arrow material-icons __arrow',
          { _open: visible },
        ]"
      >
        expand_more
      </span>
    </div>
  </div>
</template>

<script>
import selectCmp from "@/components/select.vue";
import { toggle } from "@/utils/mixins/toggle";

import { mapState, mapMutations } from "vuex";

export default {
  name: "filters-cmp",
  data: () => {
    return {};
  },
  mixins: [toggle],
  computed: {
    ...mapState(["transactions", "filters"]),
    textBtn() {
      return this.visible ? "Свернуть фильтры" : "Развернуть фильтры";
    },
  },
  components: {
    selectCmp,
  },
  methods: {
    ...mapMutations(["setResult"]),
  },
  created() {
    this.show();
    window.addEventListener("resize", () => {
      !this.$root.isMobile && this.show();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.filters {
  display: flex;
  gap: 15px;
  position: relative;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding-top: 20px;
  }

  &__dropdown {
    width: calc((100% - 15px * 2) / 3);
    @media screen and (max-width: 1024px) {
      width: 202px;
    }

    @media screen and (max-width: 767px) {
      width: 100%;

      &:last-child {
        margin-bottom: 20px;
      }
    }
  }

  &__button {
    @media screen and (max-width: 767px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ff9839;
      width: 155px;
      position: absolute;
      top: -28px;
      right: 0;

      &-arrow {
        color: #ff9839;
      }
    }
  }
}
</style>

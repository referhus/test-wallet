<template>
  <main class="container container_grid">
    <h1 class="title"> Кошелек </h1>
    <filters></filters>
    <div class="content _fill">
      <balance></balance>
      <transactions v-if="results.length"></transactions>
      <div class="text_empty" v-else>У вас ещё не было операций с кошельком.</div>
    </div>
  </main>
</template>

<script>
import { mapMutations, mapState  } from 'vuex';

import filters from './components/filters.vue'
import balance from './components/balance.vue'
import transactions from './components/transactions.vue'
export default {
  name: 'App',
  data: () => {
    return {
      isMobile: false,
      isTablet: false
    }
  },
  components: {
    filters,
    balance,
    transactions,
  },
  computed: {
    ...mapState(['results', 'transactions'])
  },
  methods: {
    ...mapMutations(['setResults']),
    setIsMobile() {
      this.isMobile = window.innerWidth < 768;
    },
    setIsTablet() {
      this.isTablet = window.innerWidth < 1024 && window.innerWidth >= 768;
    },
  },
  created() {
    this.setResults()
    this.setIsMobile()
    this.setIsTablet()
    window.addEventListener('resize', () => this.setIsMobile());
    window.addEventListener('resize', () => this.setIsTablet());
  }

}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: transparent;
  outline: none;
  border: none;
  font-family: Montserrat, sans-serif;
}

body {
  background:#120C17;
  color: #fff;
}

.container {
  padding: 127px 20px 20px;
  max-width: 1700px;
  width: 100%;
  margin: 0 auto;
  &_grid {
    display: grid;
    grid-template-columns: 1fr 1.7fr;
    align-items: center;
  }

  @media screen and (max-width: 1280px) {
    max-width: 1034px;
    padding-top: 117px;

    &_grid {
      grid-template-columns: 1fr 3fr;
      gap: 23px;
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 778px;
    padding-top: 98px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 145px 25px 25px;

    &_grid {
      gap: 0;
    }
  }
}

.content {
  margin-top: 30px;
  padding-top: 40px;
  border-top: 1px solid rgba(125,119,129, .2);
  display: grid;
  grid-template-columns: 393px 1fr;
  gap: 60px;

  @media screen and (max-width: 1280px) {
    grid-template-columns: 234px 1fr;
    padding-top: 20px;
    gap: 20px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 170px 1fr;
    margin-top: 0;
    gap: 20px;
  }
}
  ._fill {
    grid-column: 1/3;
  }

.title {
  font-size: 30px;
  line-height: 35px;
  font-weight: 700;

  @media screen and (max-width: 1280px) {
    font-size: 25px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
}

.text {
  font-size: 16px;
  line-height: 19.5px;
  font-weight: 500;

  @media screen and (max-width: 1280px) {
    font-size: 14px;
    line-height: normal; 
  }
}

.text_small {
  font-size: 14px;
  line-height: 17.07px;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    line-height: normal; 
  }

}

.text_bold {
  font-weight: 600;
}

.text_empty {
  font-size: 18px;
  font-weight: 700; 
}

.btn {
  padding: 15px 40px;
  border-radius: 15px;
  text-align: center;
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1024px) {
    padding: 12px;
    font-size: 12px;
  }
}

.btn_bg {
  background: linear-gradient(to right top, rgba(255, 174, 71, 1), rgba(250, 57, 57, 1));
}

.btn_border {
  border: 1px solid rgba(250, 57, 57, 0.80);
  backdrop-filter: blur(5px); 
}

.__tenge {
    white-space: nowrap;
    &:after {
        display: inline-block;
        margin-left: 0.18em;
        content: '\20B8';
        font-family: 'Montserrat', sans-serif;
    }
}

table, tr {
  width: 100%;
}

.__arrow {
  white-space: nowrap;
  font-size: 20px;
  font-weight: 500;
  line-height: 100%;     
  color: #7D7781;
  transition: .3s;
  &._open {
    transform: rotate(-180deg);
  }
}
    
</style>

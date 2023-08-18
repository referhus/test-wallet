import { createStore } from "vuex";
import { dateFormat } from "@/utils/dateFormat";

export default createStore({
  state: {
    transactions: [
      {
        icon: "add",
        number: "# 1229",
        date: 1692291041203,
        operation: {
          id: "1",
          text: "Пополнение баланса",
        },
        status: {
          id: "canceled",
          text: "Отменено",
        },
        sum: 400,
      },
      {
        icon: "add",
        number: "# 1229",
        date: 1692291841203,
        operation: {
          id: "1",
          text: "Пополнение баланса",
        },
        status: {
          id: "waiting",
          text: "Ожидание",
        },
        sum: 400,
      },
      {
        icon: "withdrawal",
        number: "# 1329",
        date: 1689342039253,
        operation: {
          id: "2",
          text: "Вывод средств",
        },
        status: {
          id: "done",
          text: "Выполнен",
        },
        sum: 400,
      },
      {
        icon: "withdrawal",
        number: "# 1339",
        date: 1689342039253,
        operation: {
          id: "2",
          text: "Вывод средств",
        },
        status: {
          id: "canceled",
          text: "Отменено",
        },
        sum: 400,
      },
      {
        icon: "withdrawal",
        number: "# 1559",
        date: 1690827226354,
        operation: {
          id: "2",
          text: "Вывод средств",
        },
        status: {
          id: "waiting",
          text: "Ожидание",
        },
        sum: 400,
      },
      {
        icon: "return",
        number: "# 1249",
        date: 1689342039253,
        operation: {
          id: "3",
          text: "Возврат",
        },
        status: {
          id: "canceled",
          text: "Отменено",
        },
        sum: 400,
      },
    ],
    filters: [
      {
        label: "Время",
        id: "time",
        active: {
          id: "all",
          text: "За все время",
        },
        items: [
          {
            id: "all",
            text: "За все время",
          },
          {
            id: "day",
            text: "За день",
          },
          {
            id: "week",
            text: "За последние 7 дней",
          },
          {
            id: "month",
            text: "За последний месяц",
          },
        ],
      },
      {
        label: "Операция",
        id: "operation",
        active: {
          id: "all",
          text: "Все",
        },

        items: [
          {
            id: "all",
            text: "Все",
          },
          {
            id: "1",
            text: "Пополнение баланса",
          },
          {
            id: "2",
            text: "Вывод средств",
          },
          {
            id: "3",
            text: "Возврат",
          },
          {
            id: "4",
            text: "Выполнение заказа/входящий платеж",
          },
        ],
      },
      {
        label: "Статус",
        id: "status",
        active: {
          id: "all",
          text: "Все",
        },
        items: [
          {
            id: "all",
            text: "Все",
          },
          {
            id: "done",
            text: "Выполнен",
          },
          {
            id: "canceled",
            text: "Отменено",
          },
          {
            id: "waiting",
            text: "Ожидание",
          },
        ],
      },
    ],
    results: [],
  },
  getters: {},
  mutations: {
    setResults(state) {
      // собираем условия
      const conditions = (x) => {
        // ищем по операции
        const operations =
          state.filters[1].active.id !== "all"
            ? x.operation.id.includes(state.filters[1].active.id)
            : x;
        // ищем по статусу
        const status =
          state.filters[2].active.id !== "all"
            ? x.status.id.includes(state.filters[2].active.id)
            : x;

        // ищем по времени
        const time =
          state.filters[0].active.id !== "all"
            ? setTimeFilter(x, state.filters[0].active.id)
            : x;
        return operations && status && time;
      };

      // фильтруем по времени
      function setTimeFilter(x, i) {
        const date = new Date();
        switch (i) {
          case "day":
            return (
              dateFormat(x.date).date.getFullYear() == date.getFullYear() &&
              dateFormat(x.date).date.getMonth() == date.getMonth() &&
              dateFormat(x.date).date.getDate() == date.getDate()
            );
          case "week":
            return date.getTime() - x.date <= 604800000;
          case "month":
            return (
              dateFormat(x.date).date.getFullYear() == date.getFullYear() &&
              dateFormat(x.date).date.getMonth() == date.getMonth()
            );
        }
      }
      state.results = state.transactions.filter((x) => conditions(x));
    },
    setFilters(state, data) {
      const index = state.filters.map((el) => el.id).indexOf(data.id);
      state.filters[index].active = data.el;
    },
  },
  actions: {},
  modules: {},
});

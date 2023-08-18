<template>
    <td v-if="item.icon" class="text"> 
        <div class="transactions__icon">
        <component :is="icons(item.icon)"></component>
        </div>
    </td>
    <td>
        <div>
            {{ item.number }}
        </div>
            <div class="transactions__td">
            <component :is="icons(item.status.id)"></component>
            <span :class="item.status.id"> {{ item.status.text }} </span>
        </div>
    </td>
    <td v-if="item.date">
        {{ dateFormat(item.date).fullDate }}
    </td>
    <td class="text"> 
        <div class="transactions__td">
            <span> {{ item.operation.text }} </span>
        </div>
        <div>
            {{ item.sum }} 
            <span class="__kzt">KZT</span>
        </div>
    </td>
</template>

<script>
import { dateFormat } from '@/utils/dateFormat';
import addIcon from '@/components/icons/add-icon.vue'
import orderIcon from '@/components/icons/order-icon.vue'
import returnIcon from '@/components/icons/return-icon.vue'
import withdrawalIcon from '@/components/icons/withdrawal-icon.vue'
import redIcon from './icons/red-icon.vue'
import greenIcon from './icons/green-icon.vue'
import yellowIcon from './icons/yellow-icon.vue'

export default {
    name: 'row-desktop',
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        dateFormat,
        icons(iconType) {
            switch (iconType) {
                case "add":
                    return addIcon
                case "return":
                    return returnIcon
                case "order":
                    return orderIcon
                case "withdrawal":
                    return withdrawalIcon
                case "canceled":
                    return redIcon
                case "done":
                    return greenIcon
                case "waiting":
                    return yellowIcon
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.transactions {
  &__row {
    & > td:first-child {
      @media screen and (max-width: 767px) {
        width: 58px;
      }
    }

    & > td:nth-child(3) {
      @media screen and (max-width: 767px) {
        width: 21%;
      }
    }

    & > td:last-child {
      @media screen and (max-width: 767px) {
        width: 40%;
      }
    }
  }
  &__td {
    gap: 0;
  }
}
</style>
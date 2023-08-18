<template>
    <div
        @click="show"
        class="dropdown"
    >
        <span class="dropdown__label text_small">{{ label }}</span>
        <button class="text dropdown__button">
            <span class="dropdown__button-text"> {{ active.text }}  </span>    
             <span 
                :class="[
                    'dropdown__button-arrow material-icons __arrow',
                    {_open: visible}
                ]"
            >arrow_drop_down</span> 
        </button>
        <div
            v-show="visible"
            @click.stop
            class="dropdown__list"
        >
            <template v-if="items.length">
                <div
                    v-for="(el, key) in items"
                    :key="key"
                    class="dropdown__item"
                    @click="setElem(el)"
                >
                    {{ el.text }}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { toggle } from '@/utils/mixins/toggle';
import { mapMutations } from 'vuex';

export default {
    name: 'dropdown-search',
    mixins: [toggle],
    props: {
        items: {
            type: Array,
            default: () => ([]),
        },
        id: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        active: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
        };
    },

    watch: {
        active() {
            this.setResults()
        }
    },

    methods: {
        ...mapMutations(['setFilters', 'setResults']),
        setElem(el) {
            this.setFilters({el: el, id: this.id})
            this.hide();
        },
    },
    mounted() {
    }
};
</script>


<style lang="scss" scoped>
.dropdown {
    width: 100%;
    position: relative;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
    backdrop-filter: blur(5px); 
    color: #fff;
    padding: 20px 17px;
    z-index: 10;
    @media screen and (max-width: 1280px) {
        padding: 15px 20px;
    }

    @media screen and (max-width: 1024px) {
        padding: 12px 20px;
    }

    &__label {
        position: absolute;
        top: -10px;

        @media screen and (max-width: 1280px) {
            font-size: 12px;
        }

    }
    &__list {
        position: absolute;
        top: 115%;
        left: 0;
        width: 100%;
        z-index: 1;
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 0 1px rgba(16, 14, 28, 0.04), 0 2px 16px rgba(16, 14, 28, 0.06);
        backdrop-filter: blur(8px);
        border-radius: 16px;
    }
    &__item {
        cursor: pointer;
        padding: 10px;
        color: #120C17;
    }

    &__button {
        width: 100%;
        height: 100%;
        text-align: start;
        color: #fff;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;

        &-text {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: calc(100% - 25px);

            @media screen and (max-width: 1280px) {
                font-size: 12px;
            }

        }

        &-arrow {
            color: #7D7781;
        }
    }
}

</style>
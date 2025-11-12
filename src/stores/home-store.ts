import {defineStore} from 'pinia'

export const useHomeStore = defineStore('home', {
    state: () => ({
        name: '张三', age: 18, blog: "https://www.baidu.com", hobby: ['吃饭', '睡觉', '打豆豆']
    }),

    actions: {
        add() {
            this.age++
        }
    }
})

import Vue from "vue"
import TodoComponent from "./components/TodoComponent.vue"

let v = new Vue({
    el: "#app",
    template: '<TodoComponent></TodoComponent>',
    data: {},
    components: {
        TodoComponent
    }
})

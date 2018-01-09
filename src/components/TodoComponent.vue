<template>
    <div>
        <div class="header">
            <h1>Alex's ToDo list</h1>
            <input placeholder="Title..." v-model="title"/>
            <span class="add-todo" v-on:click="addTodo">Add</span>
        </div>

        <ul>
            <li v-for="(todo, index) in allTodos">
                {{todo.title}}
                <span class="close" v-on:click="deleteTodo(index)">x</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import { Todo } from "../models/todo"

    @Component
    export default class TodoComponent extends Vue {
        public title: string = ""
        public todo: Todo = new Todo()
        public allTodos: Todo[] = []

        //component lifecycle hook ngoninit
        mounted() {

        }

        //computed getters and setters

        //methods
        public addTodo(): void {
            this.todo = {
                title: this.title,
                completed: false
            }

            this.title = ''
            this.allTodos.push(this.todo)
        }

        public deleteTodo(todoIndex: number): void {
            this.allTodos.splice(todoIndex, 1)
        }
    }
</script>

<style scoped>
    /* Include the padding and border in an element's total width and height */
    * {
        box-sizing: border-box;
    }

    /* Remove margins and padding from the list */
    ul {
        margin: 0;
        padding: 0;
    }

    /* Style the list items */
    ul li {
        cursor: pointer;
        position: relative;
        padding: 12px 8px 12px 40px;
        background: #4dc791;
        font-size: 18px;
        transition: 0.2s;
        color: #313131;
        border-bottom: #707070 solid thin;

        /* make the list items unselectable */
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Darker background-color on hover */
    ul li:hover {
        background: #edf9ee;
    }

    /* When clicked on, add a background color and strike out text */
    ul li.checked {
        background: #888;
        color: #fff;
        text-decoration: line-through;
    }

    /* Add a "checked" mark when clicked on */
    ul li.checked::before {
        content: '';
        position: absolute;
        border-color: #fff;
        border-style: solid;
        border-width: 0 2px 2px 0;
        top: 10px;
        left: 16px;
        transform: rotate(45deg);
        height: 15px;
        width: 7px;
    }

    /* Style the close button */
    .close {
        position: absolute;
        right: 0;
        top: 0;
        padding: 12px 16px 12px 16px;
    }

    .close:hover {
        background-color: #e04d41;
        color: white;
    }

    /* Style the header */
    .header {
        background-color: #707070;
        padding: 30px 40px;
        color: white;
        text-align: center;
    }

    /* Clear floats after the header */
    .header:after {
        content: "";
        display: table;
        clear: both;
    }

    /* Style the input */
    input {
        border: none;
        width: 75%;
        padding: 10px;
        float: left;
        font-size: 16px;
    }

    /* Style the "Add" button */
    .add-todo {
        padding: 10px;
        width: 25%;
        background: #4dc791;
        color: #ffffff;
        float: left;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        transition: 0.3s;
    }

    .add-todo:hover {
        background-color: #bbb;
    }
</style>
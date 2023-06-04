<template>
    <h1 class="titolo">Wheather App</h1>
    <div>
        <img src="" alt="" id="image_box">
    </div>
    <div class="searchBox">
        <input type="text" placeholder="Search Your City" id="input">
        <button class="bottone" v-on:click="store.getCity()"><svg style="color: rgb(0, 0, 0);"
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    fill="#000000"></path>
            </svg>Search</button>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    setup() {


        return {}
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.searchBox {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        height: 45px;
        border: 1px solid aqua;
        outline: none;
        border-radius: 50px;
        padding-left: 10px;
    }

    input::placeholder {
        font-weight: bold;
        opacity: 0.5;
        padding: 5px;
        color: rgb(150, 149, 149);
    }
}

#image_box {
    min-height: 64px;
}

.titolo {
    margin-top: 50px;
    font-weight: bolder;
    font-size: 30px;
}

.bottone {
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: space-around;
    background-color: aqua;
    padding: 10px;
    border-radius: 50px;
    margin-left: 50px;

    &:hover {
        box-shadow: 7px 14px 9px -3px rgba(0, 0, 0, 0.1);
    }
}
</style>
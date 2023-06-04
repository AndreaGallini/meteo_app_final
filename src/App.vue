<template>
  <div class="main">
    <SearchComponent></SearchComponent>
    <div class="flower-spinner" v-if="store.loader == true">
      <div class="dots-container">
        <div class="bigger-dot">
          <div class="smaller-dot"></div>
        </div>
      </div>
    </div>
    <div v-else></div>
    <p id="errore"></p>
    <div class="box" v-if="store.resCity != null">
      <div class="upperbox">
        <img v-bind:src="`${store.immagine}`" alt="">
        <p class="titolo_main">{{ store.resCity.data.name }}</p>
        <p class="base">{{ store.resCity.data.weather[0].description }}</p>
      </div>
      <div class="innerbox">
        <div class="temp">
          <div>
            <p class="titolo_main">Temperature</p>
            <p>{{ store.resCity.data.main.temp }} °C</p>
          </div>
          <div>
            <p class="titolo_main">Feels like</p>
            <p>{{ store.resCity.data.main.feels_like }} °C</p>
          </div>
        </div>
        <div class="temp">
          <div>
            <p class="titolo_main">Wind</p>
            <p> Speed :{{ store.resCity.data.wind.speed }}m/s </p>
            <p>Deg :{{ store.resCity.data.wind.deg }}°</p>
          </div>
          <div>
            <p class="titolo_main">Rain</p>
            <p id="pioggia" v-if="(store.resCity.data.weather[0].description).includes('rain')">{{
              store.resCity.data.weather[0].description }}</p>
            <p v-else>No Rain</p>
          </div>
        </div>


      </div>
    </div>
    <div v-else>
      <h1 id="cerca">Cerca una città</h1>
    </div>
    <p class="visite">Visite al sito : {{ count }}</p>
  </div>
</template>

<script>
import SearchComponent from './components/SearchComponent.vue';
import { store } from './store';
import { onMounted } from 'vue';
export default {
  data() {
    return {
      store,
      count: null,

    };
  },
  methods: {
    counter() { // you should probably use a better name here
      const previousCount = Number(localStorage.getItem("incCount")) || 0;
      this.count = previousCount + 1;
      localStorage.setItem("incCount", this.count);
      localStorage.getItem(this.count)
      console.log(this.count);
    }
  },
  setup() {
    return {};
  },
  mounted() {
    store.getImg()
    this.counter()
  },
  components: { SearchComponent }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.visite {
  position: absolute;
  bottom: 0;

}

.titolo_main {
  font-weight: bolder;
}

#cerca {
  margin-top: 100px;
}

.del {
  display: none;
}

.box {
  width: 80%;
  box-shadow: 0px 28px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 100px;
}

.base {
  text-transform: capitalize;
}

.upperbox {
  position: absolute;
  top: -120px;
  text-align: center;
}

.temp {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  div {
    flex-basis: 50%;
    text-align: center;

  }
}

.innerbox {
  width: 100%;
  margin-top: 50px;
}

.flower-spinner,
.flower-spinner * {
  box-sizing: border-box;
}

.flower-spinner {
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.flower-spinner .dots-container {
  height: calc(70px / 7);
  width: calc(70px / 7);
}

.flower-spinner .smaller-dot {
  background: #ff1d5e;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  animation: flower-spinner-smaller-dot-animation 2.5s 0s infinite both;

}

.flower-spinner .bigger-dot {
  background: #ff1d5e;
  height: 100%;
  width: 100%;
  padding: 10%;
  border-radius: 50%;
  animation: flower-spinner-bigger-dot-animation 2.5s 0s infinite both;
}

@keyframes flower-spinner-bigger-dot-animation {

  0%,
  100% {
    box-shadow: rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px;
  }

  50% {
    transform: rotate(180deg);
  }

  25%,
  75% {
    box-shadow: rgb(255, 29, 94) 26px 0px 0px,
      rgb(255, 29, 94) -26px 0px 0px,
      rgb(255, 29, 94) 0px 26px 0px,
      rgb(255, 29, 94) 0px -26px 0px,
      rgb(255, 29, 94) 19px -19px 0px,
      rgb(255, 29, 94) 19px 19px 0px,
      rgb(255, 29, 94) -19px -19px 0px,
      rgb(255, 29, 94) -19px 19px 0px;
  }

  100% {
    transform: rotate(360deg);
    box-shadow: rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px;
  }
}

@keyframes flower-spinner-smaller-dot-animation {

  0%,
  100% {
    box-shadow: rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px;
  }

  25%,
  75% {
    box-shadow: rgb(255, 29, 94) 14px 0px 0px,
      rgb(255, 29, 94) -14px 0px 0px,
      rgb(255, 29, 94) 0px 14px 0px,
      rgb(255, 29, 94) 0px -14px 0px,
      rgb(255, 29, 94) 10px -10px 0px,
      rgb(255, 29, 94) 10px 10px 0px,
      rgb(255, 29, 94) -10px -10px 0px,
      rgb(255, 29, 94) -10px 10px 0px;
  }

  100% {
    box-shadow: rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px;
  }
}
</style>
import axios from "axios";
import { reactive } from "vue";
export const store = reactive({
    Apikey: '&appid=41981b7ebd614d19ab0487f3f2b453f6',
    ApiBaseUrl: 'https://api.openweathermap.org/data/2.5/weather?',
    lat: '',
    loader:false,
    long: '',
    immagine:null,
    ReverseApiBaseUrl: 'http://api.openweathermap.org/geo/1.0/direct?q=',
    resCity: null,
    rain: 'rain',
    norain: 'No rain',
    immagini: [
        {
            sorgente:'/img/weather/64x64/day/113.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/371.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/326.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/230.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/182.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/200.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/176.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/116.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/266.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/329.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/305.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/395.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/392.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/365.png'
        },
        {
            sorgente:'../src/img/weather/64x64/day/350.png'
        },

    ],
    getCity() {
        store.loader = true;
        let city = document.getElementById('input').value
        let errore = document.getElementById('errore')
        let cerca = document.getElementById('cerca')
        let pioggia = document.getElementById('pioggia')
        axios.get(`${this.ReverseApiBaseUrl}${city}${this.Apikey}`).then((res) => {
            console.log(res)
        store.lat = res.data[0].lat;
        store.long = res.data[0].lon;
            console.log(store.lat, store.long);
            axios
            .get(
                `${store.ApiBaseUrl}lat=${store.lat}&lon=${store.long}&${store.Apikey}&units=metric`
            )
            .then((res) => {
            //     console.log(res);
            this.resCity = res;
            this.nomecitta = this.resCity.data.name;
            console.log(this.resCity);
            
            console.log(this.nomecitta);
            axios.get(
            `${store.ApiBaseUrl}lat=${store.lat}&lon=${store.long}${store.Apikey}&units=metric`).then((res) => {
                console.log(res);
                this.resCity = res;
                store.loader = false;
                store.resCity.data.weather[0].icon 
                store.immagine = `https://openweathermap.org/img/wn/${store.resCity.data.weather[0].icon}@2x.png`
                console.log(store.immagine);
                let lunghezza = store.resCity.data.weather.length;
                console.log(lunghezza);
            });
            });
        }).catch(function (error) {
            if (error.name == 'AxiosError') {
                console.log(error.name);
                cerca.classList.add('del')
                errore.innerHTML = 'Error the page will reload'
                setTimeout(() => {
                    location.reload();
                },2000)
                }
            })
            
    },
    getImg() {
        let immagine_sfondo = document.getElementById('image_box');
        setInterval(() => {
            
            var item = store.immagini[Math.floor(Math.random() * store.immagini.length)];
            
            immagine_sfondo.src = item.sorgente
            console.log(immagine_sfondo);
        },2000)
    }
    

})




// https://openweathermap.org/img/wn/10d@2x.png
// https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
'use strict';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const {latitude, longitude} = position.coords

        var map = L.map('map').setView([latitude, longitude], 20);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('PDP Academy')
            .openPopup();
            map.on("click", (event)=> {
                const {lat, lng} = event.latlng
    
                L.marker([lat, lng]) 
                    .addTo(map)
                    .bindPopup(
                        L.popup({
                            maxWidth: 250,
                            minWidth: 150,
                            autoClose: false,
                            closeOnClick: "running-popup"
                        })
                    ).setPopupContent("MARKER")
                    .openPopup();
            })

        })

}



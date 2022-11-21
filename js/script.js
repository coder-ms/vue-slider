
/*
Descrizione:
Partendo dal markup base fornito, fare uno slider usando Vue.

Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 2 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/

// Create app
const { createApp } = Vue;

createApp({
    data() {
        return {
            prevNextGame: 0,
            videoGames:
                [
                    {
                        image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morales',
                        descr: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
                    },
                    {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        descr: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
                    },
                    {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        descr: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
                    },
                    {
                        image: 'img/04.webp',
                        title: 'Stray',
                        descr: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
                    },
                    {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        descr: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
                    }
                ]
        }
    },
    methods: {
        // videogioco precedente
        prevGame() {
            this.prevNextGame--;
            if (this.prevNextGame < 0) {
                this.prevNextGame = this.videoGames.length - 1;
            }
        },
        // videogioco successivo
        nextGame() {
            this.prevNextGame++;
            if (this.prevNextGame > this.videoGames.length - 1) {
                this.prevNextGame = 0;
            }
        },
        // scroll con intervallo di 7000ms
        autoScrollGame() {

            this.autoscroll = setInterval(() => {
                this.nextGame();
            }, 7000)
        },
        //stop scroll
        stopScroll() {
            clearInterval(this.autoscroll);
        }
    },
    mounted() {
        this.autoScrollGame();
    }

}).mount('#app');
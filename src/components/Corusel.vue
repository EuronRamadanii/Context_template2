<!-- <template>

    <div class="photo">
        <h1>Hello</h1>
        <img src="../assets/images/2ndProject.webp" alt="" style="width: 100%">
    </div>
</template>

<script>

</script>

<style scoped>

</style>  -->

<template>
    <div class="ttt">
        <h1>LOREM IPSUM</h1>
        <div class="buttons">
            <router-link to="/login">
                <v-btn class="logIn" elevation="2">Log in</v-btn>
            </router-link>
            <router-link to="/signUp">
                <v-btn elevation="2">Sign Up</v-btn>
            </router-link>

        </div>
    </div>
</template>
  
<script>
// import photo1 from '../assets/images/slide1.jpg'
// export default {
//     data() {
//         return {
//             slide: 0,
//             sliding: null,
//             // img: photo1
//         }
//     },
//     methods: {
//         onSlideStart(slide) {
//             this.sliding = true
//         },
//         onSlideEnd(slide) {
//             this.sliding = false
//         }
//     }
// }
</script>


<style scoped>
.ttt {
    background: rgb(178, 173, 173);
    padding-top: 1000px;
}

.ttt h1 {
    text-align: center;
    color: white;
    width: center;
    position: absolute;
    top: 50%;
    left: 42%;
}

.buttons {
    position: absolute;
    left: 45%;
    top: 85%;

}

.logIn {
    margin-right: 5px;
}
</style>
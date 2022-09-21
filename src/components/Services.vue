<template>
    <section id="services" class="services">
        <div class="row">
            <div class="col-md-4 box-image">
                <div class="image cover-full transition test1">
                </div>
                <div class="shadow cover-full transition"></div>
                <div class="desc center">
                    <h4>Factory</h4>
                    <a href="#" class="btn-secondary">View more</a>
                </div>
            </div>
            <div class="col-md-4 box-image">
                <div class="image cover-full transition test2"></div>
                <div class="shadow cover-full transition"></div>
                <div class="desc center">
                    <h4>Concept</h4>
                    <a href="#" class="btn-secondary">View more</a>
                </div>
            </div>
            <div class="col-md-4 box-image">
                <div class="image cover-full transition test3"></div>
                <div class="shadow cover-full transition"></div>
                <div class="desc center">
                    <h4>Future</h4>
                    <a href="#" class="btn-secondary">View more</a>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: "Services",
    // mounted() {
    //     AOS.init()
    // },
}
</script>

<style scoped>
.test1 {
    background-image: url('https://www.pwc.com/gx/en/brand-simplified/teaser-images-670/automotive/damil-gettyimages-723504579-670.jpg');
}

.test2 {
    background-image: url('https://miro.medium.com/max/1400/1*2MYY4_Ah-CUJev6qzOGysQ.jpeg');
}

.test3 {
    background-image: url('https://imageio.forbes.com/specials-images/imageserve/6092be120ca4a42c219d4448/Future-of-the-auto-industry/960x0.jpg?format=jpg&width=960');
}
</style>
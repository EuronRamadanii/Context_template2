<template>
    <section id="services" class="services">
        <div class="row">
            <div class="col-md-4 box-image">
                <div class="image cover-full transition test1">
                </div>
                <div class="shadow cover-full transition"></div>
                <div class="desc center">
                    <h4>Public Works</h4>
                    <a href="#" class="btn-secondary">View more</a>
                </div>
            </div>
            <div class="col-md-4 box-image">
                <div class="image cover-full transition test2"></div>
                <div class="shadow cover-full transition"></div>
                <div class="desc center">
                    <h4>Real Estate</h4>
                    <a href="#" class="btn-secondary">View more</a>
                </div>
            </div>
            <div class="col-md-4 box-image">
                <div class="image cover-full transition test3"></div>
                <div class="shadow cover-full transition"></div>
                <div class="desc center">
                    <h4>Industrial</h4>
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
    background-image: url('../assets/images/service1.jpg');
}

.test2 {
    background-image: url('../assets/images/service2.jpg');
}

.test3 {
    background-image: url('../assets/images/service3.jpg');
}
</style>
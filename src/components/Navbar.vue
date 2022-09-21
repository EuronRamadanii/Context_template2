<template>
    <nav id="navbar" class="navbar navbar-expand-sm">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/images/contextLogo.png" alt="logo detail" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-main">
                <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-main">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#testimonials">Testimonials</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
// import style from "../assets/style.css";
export default {
    name: "Navbar",
};
</script>

<style scoped>
.navbar {
    /* background-color: #1b2132; */
    background-color: #202225;
    height: 100px;
}
</style>

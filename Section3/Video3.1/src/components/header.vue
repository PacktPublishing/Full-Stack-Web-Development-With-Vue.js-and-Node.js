<template>
    <nav class="navbar navbar-default">
        <ul class="nav navbar-nav">
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/about-us" exact>About Us</router-link></li>
            <li><router-link to="/contact-us" exact>Contact Us</router-link></li>
        </ul>
    </nav>   
</template>
<script>
export default {
    
}
</script>
<style>
.router-link-active {
    background: #eee;
    color: blue;
}
.nav>li {
    position: relative;
    display: block;
    margin: 20px 20px 20px 20px
}

</style>

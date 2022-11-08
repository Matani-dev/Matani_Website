<template>
    <div>
        <nuxt-link to="/">
            <img class="logo" data-aos="fade-down" data-aos-duration="1500" src="@/assets/images/Logo.svg" alt="Matani Logo" />
        </nuxt-link>
    </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
    mixins: [aosMixin]
}
</script>

<style lang="scss" scoped>

div {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center; 

    .logo {
        position: absolute;
        top: -10px;
        left: 0px;
        margin-top: 40px;
        width: 140px;
    }
}

@media (max-width: 641px) {
    div {
        justify-content: center;
        .logo {
            position: relative;
            top: 0px;
        }
    }
}

</style>
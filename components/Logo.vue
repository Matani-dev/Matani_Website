<template>
    <div>
        <nuxt-link to="/">
            <img class="logo" data-aos="fade-down" src="@/assets/images/Logo.svg" alt="Matani Logo" />
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

    .logo {
        position: absolute;
        top: 0px;
        left: 0px;
    }
}

</style>
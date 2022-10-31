<template>
    <div>
        <div class="container">
            <h1>IMPRESSUM</h1>

            <h3>Rechtliches</h3>
            <span>Kjube GmbH</span>
            <span>Hartengrube 52/10</span>
            <span>23552 Lübeck</span>
            <span>Deutschland</span>

            <br>

            <h3>Kontakt</h3>
            <span>Telefon: <a href="tel:+4945159298454">+49 451 59298454</a></span>
            <span>E-Mail: <a href="mailto:hello@matani.dev">hello@matani.dev</a></span>

            <br>

            <h3>Geschäftsführer</h3>
            <span>Kjell Treder</span>

            <br>

            <h3>Amtsgericht Lübeck</h3>
            <span>HRB 20735 HL</span>
            <span>USt-IdNr.: DE338533337</span>
        </div>
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
    .container {
        padding: 60px 0px;
        display: flex;
        justify-content: center;
        flex-direction: column;

        h1 {
            font-weight: 600;
            font-size: 26px;
        }

        h3 {
            font-weight: 500;
            font-size: 22px;
        }

        a {
            color: var(--blue);
        }
    }
}

</style>
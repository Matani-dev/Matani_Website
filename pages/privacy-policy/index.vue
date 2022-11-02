<template>
    <div>
        <div class="container">
            <h1>Privacy Policy</h1>
            <br><br>
            <h3>Cookies</h3>
            <p>We do not use any cookies on our website.</p>
            <br><br>
            <h3>Tracking</h3>
            <p>
                We use a selfhosted tool called Plausible. It is a lightweight and userfriendly alternative to Google Analytics. 
                More informations here: <a href="https://plausible.io/data-policy">Plausible Data Policies</a>
            </p>
            <br><br>

            <h3>Beta/Newsletter</h3>
            <p>
                If you signed up for the beta but sadly regret your decision, 😢 <br>
                just write us an email to: <a href="mailto:hello@matani.dev">hello@matani.dev</a> 
                and we will delete your email from our list!
            </p>
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
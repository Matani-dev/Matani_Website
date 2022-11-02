<template>
    <div class="bar" data-aos="fade-down" data-aos-duration="1500">
        <span>Sign up for our Beta and get <strong>3 Months Premium</strong> for free! 🥳</span>
    </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
    mixins: [aosMixin],
}
</script>

<style lang="scss" scoped>

.bar {
    top: 0px; 
    left: 0px;
    width: 100vw;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    color: #16a34a;
    background-color: #dcfce7;
    font-size: 13px;
    position: sticky;
    z-index: 5;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

@media (max-width: 641px) {
    .bar {
        span {
            font-size: 11.5px;
        }
    }
}

</style>
<template>
    <div>
        <TopBar></TopBar>
        <div class="wrapper">
            
            <Logo></Logo>
            <Nuxt />
            <Footer></Footer>
        </div>
    </div>
</template>

<style lang="scss">

h1, h2, h3, h4, h5 {
    font-family: "Lexend Exa", Arial, Helvetica, sans-serif;
}

p {
    font-family: "Inter", Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: var(--light-grey);
}

:root {
    --grey: #12141D;
    --light-grey: #2f313a;
    --green: #22E27F;
    --blue: #2B59FF;
    --red: #F23936;
    --purple: #4732BA;
    --orange: #FABB18;
}

* {
    box-sizing: border-box;
}

body {
    overflow-x: hidden;
}

.wrapper {
    margin: 40px 3rem;
}

@media (max-width: 641px) {
    .wrapper {
        margin: 20px 1.5rem;
    }
}

</style>

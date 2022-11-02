<template>
    <footer>
        <div class="left">
            <span>© Copyright 2022, All Rights Reserved</span>
        </div>

        <div class="right">
            <a href="https://www.linkedin.com/company/matani/" target="_blank">LinkedIn</a>
            <a href="https://discord.gg/fNXV9xMc" target="_blank">Discord</a>
            <a href="https://github.com/Matani-dev" target="_blank">Github</a>
            <!--<a href=""><span>SOON</span> Roadmap</a>-->
            <a href="/imprint">Imprint</a>
			<a href="/privacy-policy">Privacy Policy</a>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

footer {
	padding-top: 2rem;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;

	span, a {
		font-size: 14px;
		color: var(--grey);
	}

	a {
		position: relative;
		transition: 0.2s ease-in-out all;

		span {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			bottom: -20px;
			color: white;
			font-size: 10px;
			font-weight: 600;
			background-color: var(--blue);
			padding: 4px 6px;
			border-radius: 2px;
			overflow: visible;
			opacity: 1;
		}

		&:hover {
			color: var(--blue);
			cursor: pointer;
			opacity: 1;
		}
	}

	.left {
		
	}

	.right {
		display: flex;
		justify-content: space-between;
		gap: 30px;
	}
}

@media (max-width: 641px) {
    footer {
		flex-wrap: wrap;
		gap: 20px;
	}
}

</style>
<template>
	<div>
		<!-- Shapes -->
		<img class="shape__right shape" src="@/assets/images/shapes.png" alt="Shape">
		<img class="shape__left shape" src="@/assets/images/shapes_2.png" alt="Shape">

		<header>
			<img class="bg" src="@/assets/images/bg.png" alt="Background">
			<span class="date">📅 Release: Mid-2023</span>
			<h1 class="gradient padding animate__text"><span>Receive Client Feedback with just one click.</span></h1>
			<p class="animate__text">
				A just now developed software to notify your clients as soon as you uploaded your project progress and to get their
				feedback. No more time-consuming, misleading Mail traffic.
			</p>

			<!-- Error Message -->
			<Transition name="slide">
				<span class="error status" v-if="error.show">{{ error.message }}</span>
				<span class="success status" v-if="success.show">{{ success.message }}</span>
			</Transition>
			
			<div class="input__wrapper" :class="{ 'error': error.show }">
				<input v-model="email" type="text" placeholder="Enter your email address">
				<button :class="{ 'big': resizeBtn }" @click="saveToNewsletter">Sign up for Beta</button> 
			</div>
		</header>

		<section class="content">
			<h2 class="animate__text">Client Feedback has never been easier.</h2>
			<p class="animate__text subheading">Matani will be perfectly suited for digital designers, design agencies and cool dudes!</p>

			<div class="container">
				<div class="box" ref="box">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon milestone">
						<path fill-rule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clip-rule="evenodd" />
						<path fill-rule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clip-rule="evenodd" />
					</svg>

					<h5>Milestone presentation</h5>
					<p>
						Upload your project changes and describe the changes using a built-in intuitive description-tool 
						to easily create a clear presentation of your work for your client.
					</p>
				</div>

				<div class="box" ref="box">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon feedback">
						<path fill-rule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
					</svg>

					<h5>Constructive Feedback</h5>
					<p>
						Get specific, constructive feedback through the minimization of misunderstandings.
					</p>
				</div>

				<div class="box" ref="box">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon workflow">
						<path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
						<path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
					</svg>

					<h5>Optimize your workflow</h5>
					<p>
						We combine the directly dependent functions of uploading 
						your work progress and communicating about it with your client - for both of you to benefit.
					</p> 
				</div>

				<div class="box" ref="box">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon document">
						<path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 14.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5H9.75z" clip-rule="evenodd" />
						<path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
					</svg>

					<h5>Self destructive files</h5>
					<p>
						After closing a project, your uploaded files will automatically 
						delete themselves to guarantee the highest privacy standards for you and your client.
					</p> 
				</div>

				<div class="box" ref="box">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon time">
						<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
					</svg>

					<h5>Save precious time</h5>
					<p>
						No more useles feedback meetings by stepping up your feedback game.
					</p> 
				</div>

				<div class="box" ref="box">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon update">
						<path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd" />
					</svg>

					<h5>Keep everyone updated</h5>
					<p>
						After adding the newest milestone your client will automatically receive a notification about it - 
						the exact way you decide.
					</p> 
				</div>
			</div>
		</section>

		<section class="cta">
			<h2 class="gradient padding animate__text"><span>Drop us a line or two, we are open for creative minds and collaborations!</span></h2>
			<a href="https://discord.gg/fNXV9xMc" class="animate__text" target="_blank">
				<img src="@/assets/images/Discord.svg" alt="Discord Logo">
			</a>
		</section>
	</div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
	mixins: [aosMixin],
	data() {
		return {
			email: "",
			error: {
				message: "",
				show: false,
			},

			success: {
				message: "",
				show: false,
			},

			resizeBtn: false,
		}
	},
	head() {
      return {
        title: "Matani - Feedback Tool for Designers",
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: `A just now developed software to notify your clients as soon as you uploaded your project progress and to get their feedback. No more time-consuming, misleading Mail traffic.`
          },
          {
            property: "og:url",
            content: this.$route.path,
          },
          {
            property: "og:title",
            content: "Matani",
          },
          {
            property: "og:description",
            content: `A just now developed software to notify your clients as soon as you uploaded your project progress and to get their feedback. No more time-consuming, misleading Mail traffic.`,
          },
          {
            property: "og:image",
            content: "@/assets/images/Matani_og.png",
          },
          {
            property: "og:image:alt",
            content: "Matani",
          },
        ]
      }
    },
	mounted() {
		this.animateOnScroll();
	},
	methods: {
		async saveToNewsletter() {
			this.resizeBtn = true;

			if(this.validateEmail()) {
				try {
					const res = await this.$axios.$post(`${process.env.apiUrl}/newsletter`, {
						email_address: this.email,
						tags: ["PRELAUNCH"],
					},
					{
						headers: {
							"content-type": "application/json"
						},
					})

					this.success = {
						message: "See ya in the beta! 🎉",
						show: true,
					}

					this.email = "";
				} catch(e) {
					this.error = {
						message: "Something went wrong while adding you to our newsletter. Please contact us at hello@matani.dev 😔",
						show: true,
					}
				}
			} else {
				this.error = {
					message: "Please enter a valid e-mail address. 🧐",
					show: true,
				}
			}

			setTimeout(() => {
				this.resizeBtn = false
			}, 300)
		},

		validateEmail() {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return emailRegex.test(this.email)
		},

		animateOnScroll() {
			// release tag
			this.$gsap.to(".date", {
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'Power1.easeInOut',
			})

			// input_wrapper
			this.$gsap.to(".input__wrapper", {
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'Power1.easeInOut',
			})

			for(let i = 0; i < this.$el.querySelectorAll(".animate__text").length; i++) {
				let text = this.$el.querySelectorAll('.animate__text')[i]

				this.$gsap.to(text, {
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: text,
						toggleActions: "restart none none reset",
						markers: false,
						end: 'bottom',
					}
				})
			}

			// Boxes
			let _delay = 0;
			for(let i = 0; i < this.$el.querySelectorAll('.box').length; i++) {
				let box = this.$el.querySelectorAll('.box')[i]
				
				this.$gsap.to(box, {
					y: 0,
					opacity: 1,
					duration: 1,
					delay: _delay,
					scrollTrigger: {
						trigger: '.container',
						toggleActions: "restart none none reset",
						markers: false,
					}
      			})

				_delay += 0.15
			}
			
		}
	}
}
</script>

<style lang="scss" scoped>

@keyframes makeBig {
	0% {
		transform: scale(1) rotate(2deg);
	}
	50% {
		transform: scale(1.1) rotate(0deg);
	}
	100% {
		transform: scale(1) rotate(2deg);
	}
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all 1s ease-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.animate__text {
	opacity: 0;
	transform: translateY(80px);
}

.shape {
	position: absolute;
	width: 18%;
	opacity: 0.9;
	
	&.shape__right {
		right: 0px;
		top: 0;
	}

	&.shape__left {
		left: 0;
		top: 200px;
	}
}

header {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 6rem 0px;

	.bg {
		width: 100vw;
		height: 100vh;
		margin: 0px -3rem;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
	}

	.date {
		opacity: 0;
		transform: translateY(80px);
		margin-top: 10rem;
		margin-bottom: 12px;
		padding: 8px 10px;
		font-weight: 500;
		font-size: 12px;
		color: #16a34a;
		background-color: #dcfce7;
		border-radius: 6px;
	}

	h1 {
		font-family: "Lexend Exa", Arial, Helvetica, sans-serif;
		font-size: 40px;
		text-align: center;
		font-weight: 700;
		max-width: 60%;
		letter-spacing: -4px;

		&.gradient span {
			background: linear-gradient(0deg, rgba(255,0,255,0) 0%, rgba(255,0,255,0) 16%, var(--green) 16%, var(--green) 30%, rgba(255,0,255,0) 30%);
		}

		&.padding span {
			padding: 0 0.5em 0 0.1em;
			box-decoration-break: clone;
			-webkit-box-decoration-break: clone;
		}
	}

	p {
		max-width: 700px;
		text-align: center;
		margin-top: 16px;
		line-height: 28px;
		margin-bottom: 100px;
	}

	.status {
		max-width: 400px;
		display: flex;
		text-align: center;
		margin-bottom: 12px;
		position: absolute;
		bottom: 150px;
		padding: 12px 20px;
		border-radius: 1337px;
		font-size: 13px;
		justify-content: center;
		

		&.error {
			background-color: #fee2e2;
			color: #dc2626;
			border: 1px solid #dc2626;
		}

		&.success {
			background-color: #dcfce7;
			color: #16a34a;
			border: 1px solid #16a34a;
		}
	}

	.input__wrapper {
		position: relative;
		background-color: white;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
		width: 100%;
		max-width: 400px;
		border-radius: 8px;
		opacity: 0;
		transform: translateY(80px);

		&.error {
			border: 1px solid #dc2626;
		}

		button {
			position: absolute;
			right: 4px;
			top: 4px;
			bottom: 4px;
			color: white;
			border-radius: 6px;
			padding: 10px 14px;
			background-color: var(--blue);
			transition: 0.3s ease-in-out all; 

			&.big {
				animation-name: makeBig;
				animation-duration: 0.3s;
  				animation-iteration-count: 1;
				animation-timing-function: ease;
			}

			&:hover {
				box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
				transform: rotate(2deg);
			}
		}

		input {
			padding: 16px 14px;
			border-radius: 8px;
			position: relative;
			font-size: 14px;
			width: 100%;
		}
	}
}

section.content {
	margin: 200px 0px;
	//background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size: 30px;
		letter-spacing: -3px;
		font-weight: 700;
	}

	.subheading {
		margin-bottom: 40px;
		text-align: center;
		opacity: 0;
		transform: translateY(120px);
	}

	.container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 20px;

		.box {
			opacity: 0;
			transform: translateY(400px);
			display: flex;
			flex-basis: 31%;
			padding: 30px;
			flex-direction: column;
			background: rgba(255, 255, 255, 0.45);
			border-radius: 8px;
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(7.2px);
			-webkit-backdrop-filter: blur(7.2px);
			border: 1px solid rgba(255, 255, 255, 0.3);

			h5 {
				letter-spacing: -2px;
				font-size: 18px;
				margin-bottom: 8px;
			}

			p {
				font-size: 14.5px;
			}

			.icon {
				width: 30px;
				margin-bottom: 10px;

				&.update {
					color: var(--green);
				}

				&.document {
					color: var(--green);
				}

				&.time {
					color: var(--orange);
				}

				&.workflow {
					color: var(--blue);
				}

				&.feedback {
					color: var(--green);
				}

				&.milestone {
					color: var(--red);
				}
			}
		}
	}
}

section.cta {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-bottom: 20rem;

	h2 {
		margin-top: 6rem;
		font-family: "Lexend Exa", Arial, Helvetica, sans-serif;
		font-size: 32px;
		text-align: center;
		font-weight: 800;
		max-width: 60%;
		letter-spacing: -3px;

		&.gradient span {
			background: linear-gradient(0deg, rgba(255,0,255,0) 0%, rgba(255,0,255,0) 16%, var(--green) 16%, var(--green) 30%, rgba(255,0,255,0) 30%);
		}

		&.padding span {
			padding: 0 0.5em 0 0.1em;
			box-decoration-break: clone;
			-webkit-box-decoration-break: clone;
		}
	}

	a {
		display: flex;
		background-color: #5A6AEF;
		padding: 8px 20px;
		margin-top: 30px;
		border-radius: 8px;
		//transition: 0.3s ease-in-out all;

		&:hover {
			box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
			cursor: pointer;
			transform: rotate(2deg);
		}

		img {
			width: 120px;
		}
	}
}

@media (max-width: 641px) {
	.shape {

		&.shape__right {
			right: 0px;
			top: 30px;
		}
	}

	header {
		padding-top: 0px;
		.date {
			margin-top: 60px;
		}

		h1 {
			font-size: 30px;
			width: 100%;
			max-width: 100%;
		}

		p {
			max-width: 100%;
		}

		.status {
			max-width: 100%;
		}

		.input__wrapper {
			margin-top: 30px;
		}

		.input__wrapper {
			input {
				font-size: 12px;
			}

			button {
				font-size: 12px;
			}
		}
	}

	section.content {
		margin: 70px 0px;

		h2 {
			font-size: 28px;
			margin-bottom: 20px;
			text-align: center;
		}

		.container {
			flex-direction: column;

			.box {
				flex-basis: 100%;
			}
		}
	}

	section.cta {
		margin-bottom: 5rem;

		h2 {
			max-width: 100%;
			width: 100%;
			margin: 0px 0px;
			font-size: 28px;
		}
	}
}
</style>

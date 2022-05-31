<script>
	// @ts-nocheck

	export let steps = [],
		currentActive = 1;
	let circles, progress;

	export const handleProgress = (stepIncrement) => {
		circles = document.querySelectorAll('.circle');
		if (stepIncrement == 1) {
			currentActive++;

			if (currentActive > circles.length) {
				currentActive = circles.length;
			}
		} else {
			currentActive--;

			if (currentActive < 1) {
				currentActive = 1;
			}
		}

		update();
	};

	function update() {
		circles.forEach((circle, idx) => {
			if (idx < currentActive) {
				circle.classList.add('active');
			} else {
				circle.classList.remove('active');
			}
		});

		const actives = document.querySelectorAll('.active');

		progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
	}
</script>

<div class="progress-container" bind:this={circles}>
	<div class="progress" bind:this={progress} />
	{#each steps as step, i}
		<div class="circle {i == 0 ? 'active' : ''}" data-title={step}>{i + 1}</div>
	{/each}
</div>

<style>
	.progress-container {
		display: flex;
		justify-content: space-between;
		position: relative;
		margin-bottom: 30px;
		max-width: 100%;
		width: 350px;
	}

	.progress-container::before {
		content: '';
		background-color: #ffffff;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 4px;
		width: 100%;
		z-index: -1;
	}

	.progress {
		background-color: black;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 4px;
		width: 0%;
		z-index: -1;
		transition: 0.4s ease;
	}

	.circle {
		background-color: #fff;
		color: rgb(11, 11, 11);
		border-radius: 50%;
		height: 30px;
		width: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 3px solid #ffffff;
		transition: 0.4s ease;
		cursor: pointer;
	}

	.circle::after {
		content: attr(data-title) ' ';
		position: absolute;
		bottom: 35px;
		color: rgb(255, 255, 255);
		transition: 0.4s ease;
	}

	.circle.active::after {
		color: rgb(255, 255, 255);
	}

	.circle.active {
		border-color: rgb(39, 39, 39);
	}
</style>

import style from './test.module.scss';
import MainStyle from '../../main.module.scss';

const Test = () => {
	return (
		<div className={[style.Test__container, MainStyle.halfChildLeft].join(" ")}>
			<section>
				<nav>
					<h1>FRONTEND TRENDS</h1>
					<h3 className={style.H3span}></h3>
					<span class="m">B</span>
					<span calss="m">E</span>
					<span class="m">N</span>
					<span class="m">E</span>
					<span class="m">F</span>
					<span class="m">I</span>
					<span class="m">T</span>
					<span class="m">S</span>
					<span class="m">&nbsp;</span>
					<span class="m">o</span>
					<span class="m">f</span>
					<span class="m">&nbsp;</span>
					<span class="m">T</span>
					<span class="m">E</span>
					<span class="m">C</span>
					<span class="m">H</span>
					<span class="m">N</span>
					<span class="m">O</span>
					<span class="m">N</span>
					<span class="m">O</span>
					<span class="m">L</span>
					<span class="m">O</span>
					<span class="m">G</span>
					<span class="m">I</span>
					<span class="m">E</span>
					<span class="m">S</span>
				</nav>
			</section>
			<div class="container">
				<a onclick="tabClick(this)" data-id="svelte">
					svelte
				</a>
				<a onclick="tabClick(this)" data-id="esbuild">
					esbuild
				</a>
				<a onclick="tabClick(this)" data-id="next.js">
					next.js
				</a>
				<a onelcik="tabClick(this)" data-id="typescrit">
					typescript
				</a>
				<a onclick="tabClick(this)" data-id="vite">
					vite
				</a>
				<span class="nav-tap-slider"></span>
			</div>
			<div class="main">
				<section>
					<a onclick="tabClick(this)" data-id="svelt.slider"></a>
					<h1>SVELTE</h1>
					<h2>another frontend JS framework</h2>
				</section>
				<senction>
					<a onclick="tabClick(this)" data-id="esbuild.slider"></a>

					<h1>esbuild</h1>
					<h2>an extremely fast JavaScript bunder</h2>
				</senction>

				<section>
					<a onclick="tabClick(this)" data-id="next-slider"></a>
					<h1>next.js</h1>
					<h2>framework for Productin</h2>
				</section>
				<section>
					<a onclick="tabClick(this)" data-id="typescript.slider"></a>
					<h1>typescript</h1>
					<h2>giving you better tools at ant scale</h2>
				</section>
			</div>
		</div>
	);
};

export default Test;
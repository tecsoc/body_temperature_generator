const setOneNumberDecimal = (e) => {
  e.value = parseFloat(e.value).toFixed(1);
}
const generateBodyTemperature = () => {
	const min = Number(document.generator_form.min.value);
	const max = Number(document.generator_form.max.value);
	const distribution = document.generator_form.distribution.value;
	// alert(distribution);
	let rand;
	if (distribution === 'uniform_distribution') {
		rand = Math.random();
	} else if (distribution === 'normal_distribution') {
		rand = getStandardNorm();
	}
	let bodyTemperature = (min + rand * (max - min)).toFixed(1)
	alert(`あなたの体温は${bodyTemperature}℃です！（洗脳）`);
	return false;
}

const getStandardNorm = () => {
	// 平均0, 分散1の標準正規分布
	m = 0
	s = 1
	let a = 1 - Math.random();
	let b = 1 - Math.random();
	let c = Math.sqrt(-2 * Math.log(a));
	let v;
    	if (0.5 - Math.random() > 0) {
		v = c * Math.sin(Math.PI * 2 * b) * s + m;
	} else {
		v = c * Math.cos(Math.PI * 2 * b) * s + m;
	}
	v /= 4;
	v += 0.5;
	if (0 <= v && v <= 1) {
		return v;
	} else {
		return getStandardNorm();
	}
}

/*jshint esversion: 6*/

const lineCanvas = document.querySelector('#line-canvas').getContext('2d');
const barCanvas = document.querySelector('#bar-canvas').getContext('2d');
const doughnutCanvas = document.querySelector('#doughnut-canvas').getContext('2d');

const primaryColor = '#7477bf';
const primaryColorTransparent = 'rgba(116, 119, 191, 0.4)';
const greenColor = 'rgb(129,201,143)';
const greenColorTransparent = 'rgba(129, 201, 143, 0.4)';
const blueColor = 'rgb(116, 177, 191)';
const blueColorTransparent = 'rgba(116, 177, 191, 0.4)';


const weeklyLineGraphData = { 
	labels:['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
	datasets : [{
		label : 'Visitors',
		data : [
			'750',
			'1250',
			'1000',
			'1500',
			'2000',
			'1500',
			'1750',
			'1250',
			'1750',
			'2250',
			'1750',
			'2250',
		],
		
	}],
};

const lineGraphOptions = {
	scales: {
		xAxes: [{
			type : 'category',
			gridLines: {
				drawTicks : false,
				offsetGridLines : true,
			},
		}],
		yAxes: [{
			type:'linear',
			gridLines : {
				offsetGridLines : true,
				drawTicks : false,
			},
			ticks: {
				stepSize : 500,
			},
		}],
	},
	
	elements : {
		line : {
			backgroundColor : primaryColorTransparent,
			borderWidth : 1,
			borderColor : primaryColor,
			tension : 0,
		},
		
		point : {
			radius : 6,
			borderWidth : 2,
			backgroundColor : '#fff',
			borderColor : primaryColor,
		},
	},
	
	legend : {
		display: false,
	},
};

const barChartData = {
	labels : ['S', 'M', 'T', 'W', 'T', 'F', 'S',],
	datasets : [{
		label : 'Daily Vistors',
		data : [
			'75',
			'100',
			'175',
			'125',
			'225',
			'200',
			'100',
		],
		hoverBackgroundColor : primaryColorTransparent,
	}],
};
				
const barChartOptions = {
	scales: {
		yAxes: [{
			type : 'linear',
			gridLines: {
				offsetGridLines : true,
				drawTicks : false,
			},
			ticks : {
				stepSize : 50,
			},
		}],
		xAxes: [{
			gridLines: {
				drawTicks : false,
			},
		}],
	},
	
	legend : {
		display : false,
	},
	
	elements : {
		rectangle : {
			backgroundColor : primaryColor,
			hoverBackgroundColor : primaryColorTransparent,
		},
	},
};

const doughnutGraphData = {
	datasets : [{
		data : [
			50,
			30,
			15,
		],
		backgroundColor : [
			primaryColor,
			greenColor,
			blueColor,
		],
		hoverBackgroundColor : [
			primaryColorTransparent,
			greenColorTransparent,
			blueColorTransparent,
		],
		
	}],
	labels : [
			'Dekstop',
			'Tablet',
			'Phones',
		],
};

const doughnutGraphOptions = {
	legend : {
		position : 'right',
		labels : {
			padding : 20,
			boxWidth : 15,
		},
	},
};

const lineChart = new Chart(lineCanvas, {
	type:'line',
	data : weeklyLineGraphData,
	options : lineGraphOptions,
});

const barChart = new Chart(barCanvas, {
	type : 'bar',
	data : barChartData,
	options : barChartOptions,		
});

const doughnutChart = new Chart (doughnutCanvas, {
	type : 'doughnut',
	data : doughnutGraphData,
	options : doughnutGraphOptions,
});
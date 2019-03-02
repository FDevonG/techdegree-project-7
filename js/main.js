/*jshint esversion: 6*/

const lineCanvas = document.querySelector('#line-canvas').getContext('2d');
const barCanvas = document.querySelector('#bar-canvas').getContext('2d');
const circleCanvas = document.querySelector('#circle-canvas').getContext('2d');

const primaryColor = '#7477bf';

const lineChart = new Chart(lineCanvas, {
	
	type:'line',
	data : {
		labels:['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18,24', '25,31'],
		datasets : [{
			label : 'Visitors',
			data : [
				'750',
				'1000'
			],
			backgroundColor:primaryColor,
		}],
	},
	options : {
		title : {
			display:true,
			text: 'TRAFFIC',
			position : 'top',
		},
		scales: {
			xAxes: [{
				gridLines: {
					offsetGridLines: true,
				}
			}]
		},
		point : {
			radius : 20,
			backgroundColor : '#fff',
			borderWidth:3,
		},
	}
});

const barChart = new Chart(barCanvas, {
	type:'bar',
	data : {
		labels:['S', 'M', 'T', 'W', 'T', 'F', 'S',],
		datasets : [{
			label: 'Daily Vistors',
			data : [
				'75',
				'100',
				'175',
				'125',
				'225',
				'200',
				'100',
			],
			backgroundColor:primaryColor,
		}],
	},
	barThickness : 'flex',
	
	options : {
		title : {
			display : true,
			text : 'DAILY TRAFFIC',
		},
		scales: {
			yAxes: [{
				gridLines: {
					offsetGridLines: true,
				}
			}]
		},
		
	}
});

const circleChart = new Chart (circleCanvas, {
	
});
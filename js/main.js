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
	datasets : [
		{
			label : 'Weekly Visitors',
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

		}
	],
};

const hourlyLineGraphData = {
	labels:['1-4', '4-8', '8-12', '12-16', '16-20', '20-24'],
	datasets : [
		{
			label :'Hourly Visitors',
			data : [
				'40',
				'33',
				'23',
				'25',
				'7',
				'6',
			],
		}
	],
};

const dailyLineGraphData = {
	labels : ['1', '2', '3', '4', '5', '6', '7'],
	datasets : [
		{
			label : 'Daily Visitors',
			data : [
				'153',
				'174',
				'139',
				'146',
				'177',
				'185',
				'151',
			],
		}
	],
};

const monthlyLineGraphData = {
	labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	datasets : [
		{
			label : 'Monthly Visitors',
			data : [
				'10234',
				'10683',
				'10537',
				'10488',
				'10265',
				'10344',
				'10467',
				'10375',
				'10792',
				'10626',
				'10397',
				'10472',
			],
		}
	],
};

function createLineOptions (type) {
	'use strict';
	let lineGraphOptions = null;
	
	if (type === 'HOURLY') {
		lineGraphOptions = {
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
					ticks : {
						stepSize : 5,
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
	}
	
	if (type === 'DAILY') {
		lineGraphOptions = {
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
					ticks : {
						stepSize : 200,
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
	}
	
	if (type === 'WEEKLY') {
		lineGraphOptions = {
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
					ticks : {
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
	}
	
	if (type === 'MONTHLY') {
		lineGraphOptions = {
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
					ticks : {
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
	}
	
	return lineGraphOptions;
}

let lineChart = new Chart(lineCanvas, {
	type:'line',
	data : weeklyLineGraphData,
	options : createLineOptions('WEEKLY'),
});

const graphButtonWrapper = document.querySelector('.graphheader__buttons');

graphButtonWrapper.addEventListener('click', (event) => {
	'use strict';
	
	if (event.target.tagName.toUpperCase() === 'BUTTON') {
		if (event.target.textContent.toUpperCase() === 'HOURLY') {
			lineChart = new Chart(lineCanvas, {
				type:'line',
				data : hourlyLineGraphData,
				options : createLineOptions(event.target.textContent.toUpperCase()),
			});
			changeSelectedGraphButton(event.target.textContent.toUpperCase());
		}
	}
	
	if (event.target.tagName.toUpperCase() === 'BUTTON') {
		if (event.target.textContent.toUpperCase() === 'DAILY') {
			lineChart = new Chart(lineCanvas, {
				type:'line',
				data : dailyLineGraphData,
				options : createLineOptions(event.target.textContent.toUpperCase()),
			});
			changeSelectedGraphButton(event.target.textContent.toUpperCase());
		}
	}
	
	if (event.target.tagName.toUpperCase() === 'BUTTON') {
		if (event.target.textContent.toUpperCase() === 'WEEKLY') {
			lineChart = new Chart(lineCanvas, {
				type:'line',
				data : weeklyLineGraphData,
				options : createLineOptions(event.target.textContent.toUpperCase()),
			});
			changeSelectedGraphButton(event.target.textContent.toUpperCase());
		}
	}
	
	if (event.target.tagName.toUpperCase() === 'BUTTON') {
		if (event.target.textContent.toUpperCase() === 'MONTHLY') {
			lineChart = new Chart(lineCanvas, {
				type:'line',
				data : monthlyLineGraphData,
				options : createLineOptions(event.target.textContent.toUpperCase()),
			});
			changeSelectedGraphButton(event.target.textContent.toUpperCase());
		}
	}
	
});

function changeSelectedGraphButton (button) {
	'use strict';
	console.log(button);
	const graphButtons = graphButtonWrapper.children;
	for (let i = 0; i < graphButtons.length; i++) {
		if (graphButtons[i].textContent.toUpperCase() !== button) {
			graphButtons[i].classList.remove('selectedGraphButton');
		}
		if (graphButtons[i].textContent.toUpperCase() === button) {
			graphButtons[i].classList.add('selectedGraphButton');
		}
	}
}

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

////////////////////////////////
//ALERT BAR
///////////////////////////////

const alertBar = document.querySelector('.alert');
const notificationDot = document.querySelector('.green-dot');
const alertCloser = document.querySelector('.alert__closer');
alertCloser.addEventListener('click', closeAlertNotifications);

////////////////////////////////
//NOTIFICATION DROPDOWN
///////////////////////////////

document.addEventListener('click', () => {
	'use strict';
	if (dropDownMenu.style.display !== 'none') {
		dropDownMenu.style.display = 'none';
	}
});

const notificationBell = document.querySelector('.notification-bell');
const dropDownMenu = document.querySelector('.notification-dropdown-content');

notificationBell.addEventListener('click', (event) => {
	'use strict';
	if (dropDownMenu.style.display !== 'block') {
		event.stopPropagation();
		dropDownMenu.style.display = 'block';
	} 
	else {
		dropDownMenu.style.display = 'none';
	}
	console.log(dropDownMenu.style.display);
	if (alertBar.style.display !== 'none' || notificationDot.style.display !== 'none') {
		closeAlertNotifications();
	}
});

function closeAlertNotifications () {
	'use strict';
	alertBar.style.display = 'none';
	notificationDot.style.display = 'none';
}

////////////////////////////////
//MESSAGE USER
///////////////////////////////

const memberNameSearch = document.querySelector('#user-search');
const messageBox = document.querySelector('#messageBox');
const messageSumbit = document.querySelector('#messageSubmit');

messageSumbit.addEventListener('click', () => {
	'use strict';
	if (memberNameSearch.value === null || memberNameSearch.value === '') {
		alert('Name can not be blank.');
	} else if (messageBox.value === null || messageBox.value === '') {
		alert('Message field can not be blank');
	} else {
		alert('Your message was successfully sent');
		memberNameSearch.value = null;
		messageBox.value = null;
	}
});


////////////////////////////////
//TOGGLE TEXT
///////////////////////////////
const toggleWrapper = document.querySelector('.settings-toggle-wrapper');

toggleWrapper.addEventListener('mouseup', (event) => {
	'use strict';
	if (event.target.tagName === 'SPAN') {
		const children = event.target.parentNode.children;
		for (let i = 0; i < children.length; i++) {
			if (children[i].classList.contains('toggle-text')) {
				if (children[i].style.opacity == 0) {
					children[i].style.opacity = 1;
				} else {
					children[i].style.opacity = 0;
				}
			}
		}
	}
});

////////////////////////////////
//LOCAL STORAGE
///////////////////////////////

const timeZones = document.querySelector('#time-zones');
const settingButtons = document.querySelector('.setting-button-wrapper');
const emailInput = document.querySelector('.email-input');
const publicInput = document.querySelector('.profile-public-input');

function supportsLocalStorage() {
	'use strict';
	try {
		return 'localStorage' in window && window.localStorage !==null;
	} catch(e) {
		return false;
	}
}

function loadSettings () {
	'use strict';
	
	const savedEmailInput = localStorage.getItem('sendEmail');
	if (savedEmailInput === 'true') {
		emailInput.checked = true;
		const siblings = emailInput.parentNode.children;
		for (let i = 0; i < siblings.length; i++) {
			if (siblings[i].classList.contains('toggle-text')) {
				siblings[i].style.opacity = 1;
			}
		}
	} else {
		emailInput.checked = false;
		const siblings = emailInput.parentNode.children;
		for (let i = 0; i < siblings.length; i++) {
			if (siblings[i].classList.contains('toggle-text')) {
				siblings[i].style.opacity = 0;
			}
		}
	}
	
	const savedPublicProfile = localStorage.getItem('publicProfile');
	if (savedPublicProfile === 'true') {
		publicInput.checked = true;
		const siblings = publicInput.parentNode.children;
		for (let i = 0; i < siblings.length; i++) {
			if (siblings[i].classList.contains('toggle-text')) {
				siblings[i].style.opacity = 1;
			}
		}
	} else {
		publicInput.checked = false;
		const siblings = publicInput.parentNode.children;
		for (let i = 0; i < siblings.length; i++) {
			if (siblings[i].classList.contains('toggle-text')) {
				siblings[i].style.opacity = 0;
			}
		}
	}
	
	const timeZone = localStorage.getItem('timeZone');
	if (timeZone) {
		timeZones.value = timeZone;
	} else {
		timeZones.value = 'Select Timezone';
	}
	
}

settingButtons.addEventListener('click', (event) => {
	'use strict';
	if (event.target.tagName === 'BUTTON' && event.target.textContent.toUpperCase() === 'SAVE') {
		saveSettings();
	}
	if (event.target.tagName === 'BUTTON' && event.target.textContent.toUpperCase() === 'CANCEL') {
		loadSettings();
	}
});

function saveSettings () {
	'use strict';
	
	if (emailInput.checked === true) {
		localStorage.setItem('sendEmail', 'true');
	} else {
		localStorage.setItem('sendEmail', 'false');
	}
	
	if (publicInput.checked === true) {
		localStorage.setItem('publicProfile', 'true');
	} else {
		localStorage.setItem('publicProfile', 'false');
	}
	
	localStorage.setItem('timeZone', timeZones.value);
	
}

window.onload = function() {
	'use strict';
	if (supportsLocalStorage()) {
		loadSettings();
	}
};




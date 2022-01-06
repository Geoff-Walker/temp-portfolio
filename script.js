doorLeft = document.querySelector('.door-left');
doorRight = document.querySelector('.door-right');
projectdetail = document.querySelectorAll('.project-hide');

const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				openDoors();

				// entry.target.scrollIntoView({ behavior: 'smooth', block: 'end' });
			} else {
				closeDoors();
			}
		});
	},
	{ threshold: 0.95 }
);

const floorObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// move(entry.target.id);
				entry.target.scrollIntoView({ behavior: 'smooth', block: 'end' });
			}
		});
	},
	{ threshold: 0.5 }
);

projects.forEach((project) => {
	observer.observe(project);
	floorObserver.observe(project);
});

function openDoors() {
	doorLeft.classList.add('open-door-left');
	doorRight.classList.add('open-door-right');
	projectdetail.forEach((element) => {
		element.classList.remove('hidden');
		element.classList.add('shown');
	});

	//////////////fade in text and images ////////////////////////
}

function closeDoors() {
	doorLeft.classList.remove('open-door-left');
	doorRight.classList.remove('open-door-right');
	doorLeft.classList.add('close-door-left');
	doorRight.classList.add('close-door-right');

	projectdetail.forEach((element) => {
		element.classList.add('hidden');
		element.classList.remove('shown');
	});
	///////////////fade ou t text and images //////////////////////
}

function move(entry) {
	window.location.href = '#' + entry;

	console.log(entry);
}

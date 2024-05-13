function changeToDetail() {
	window.location.href = '/detail';
}

function displayDescription(habit) {
	window.location.href = `/week?habit=${habit}`;
}

let selectedHabitId = null;

function toggleStatusList(element, id) {
	selectedHabitId = id;
	const allStatusLists = document.querySelectorAll('.status');
	const box = element.querySelector('.box');
	allStatusLists.forEach((list) => {
		list.style.display = 'none';
	});
	box.style.display = box.style.display === 'none' ? 'flex' : 'none';
	const statusList = element.querySelector('.status');
	statusList.style.display =
		statusList.style.display === 'none' ? 'flex' : 'none';
}

function updateStatus(id, status) {
	if (id === selectedHabitId) {
		fetch(`/week?id=${id}&status=${status}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ status }),
		})
			.then((response) => {
				if (response.ok) {
					console.log('Calendar updated successfully');
					// Optionally, you can reload the page or update the UI
					window.location.reload();
				} else {
					console.error('Error updating calendar');
				}
			})
			.catch((error) => {
				console.error('Error updating calendar:', error);
			});
	}
}

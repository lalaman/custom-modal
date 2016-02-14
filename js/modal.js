window.onload = function() {
	var delete_button = document.getElementById("delete-button"),
		cancel_button = document.getElementById("cancel-button");
	
	delete_button.addEventListener("click", handleDeleteButton);
	
	function handleDeleteButton() {
		delete_button.innerHTML = '<div class="spinner">&nbsp;</div>';
		delete_button.disabled = true;
		setTimeout(function() {
			cancel_button.click();
			createAlert("Your account has been successfully deleted.", "success", 5000);
			setTimeout(function() {
				delete_button.innerHTML = 'Delete';
				delete_button.disabled = false
			}, 500);
		}, 2000);
	}
	
};
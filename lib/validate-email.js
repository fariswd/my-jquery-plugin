(function ($) {
	$.fn.emailValidator = function () {
		// your code here
		return /\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3}/.test(email.val())
	}
})(jQuery)

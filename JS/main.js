function englishToSpanish() {
	var translator = new Translator();

	var config = {
	    from: 'en',
	    to: 'es',
	    // api_key: 'AIzaSyCUmCjvKRb-kOYrnoL2xaXb8I-_JJeKpf0', // use your own key
	    callback: function (translatedText) {
			document.getElementById("output").innerHTML = translatedText;
	    }
	};

	translator.translateLanguage(document.getElementById("input").value, config);
}
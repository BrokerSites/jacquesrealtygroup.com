    // Function to load the reCAPTCHA script
    function loadRecaptcha() {
        var script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        document.body.appendChild(script);
    }

    // Configure the IntersectionObserver
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // If the form is in view, load the reCAPTCHA script and stop observing the form
            if(entry.isIntersecting) {
                loadRecaptcha();
                observer.unobserve(entry.target);
            }
        });
    });

    // Start observing the form
    observer.observe(document.querySelector('#cs-form-401'));
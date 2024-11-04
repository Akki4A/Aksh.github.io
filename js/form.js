document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('status');
    
    // Form validation patterns
    const patterns = {
        name: /^[a-zA-Z\s]{2,30}$/,
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        subject: /^.{2,50}$/,
        message: /^[\s\S]{10,500}$/
    };

    // Input validation messages
    const validationMessages = {
        name: 'Please enter a valid name (2-30 characters, letters only)',
        email: 'Please enter a valid email address',
        subject: 'Subject must be between 2-50 characters',
        message: 'Message must be between 10-500 characters'
    };

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        const field = input.id;
        
        // Add validation classes
        input.addEventListener('input', function() {
            if (patterns[field]?.test(this.value)) {
                this.classList.remove('invalid');
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
                this.classList.add('invalid');
            }
        });

        // Show validation message
        input.addEventListener('blur', function() {
            const existingMessage = this.parentNode.querySelector('.validation-message');
            if (existingMessage) {
                existingMessage.remove();
            }

            if (!patterns[field]?.test(this.value)) {
                const message = document.createElement('div');
                message.className = 'validation-message';
                message.textContent = validationMessages[field];
                this.parentNode.appendChild(message);
            }
        });
    });

    // Success and Error handlers
    function showSuccess() {
        status.className = 'form-status success';
        status.style.display = 'block';
        status.textContent = 'Thank you! Your message has been sent successfully.';
        form.reset();
        
        // Reset validation classes
        inputs.forEach(input => {
            input.classList.remove('valid', 'invalid');
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            status.style.display = 'none';
        }, 5000);
    }

    function showError() {
        status.className = 'form-status error';
        status.style.display = 'block';
        status.textContent = 'Oops! There was a problem sending your message. Please try again.';
        
        // Hide error message after 5 seconds
        setTimeout(() => {
            status.style.display = 'none';
        }, 5000);
    }

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate all fields before submission
        let isValid = true;
        inputs.forEach(input => {
            if (!patterns[input.id]?.test(input.value)) {
                isValid = false;
                input.classList.add('invalid');
            }
        });

        if (!isValid) {
            status.className = 'form-status error';
            status.style.display = 'block';
            status.textContent = 'Please fix the errors in the form before submitting.';
            return;
        }

        // Disable submit button and show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // Get form data
        const formData = new FormData(form);

        // Send form data using fetch
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                showSuccess();
            } else {
                showError();
            }
        })
        .catch(() => {
            showError();
        })
        .finally(() => {
            // Re-enable submit button and restore text
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        });
    });

    // Add floating label animation
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');

        if (input && label) {
            input.addEventListener('focus', () => {
                label.classList.add('float');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    label.classList.remove('float');
                }
            });

            // Check initial state
            if (input.value) {
                label.classList.add('float');
            }
        }
    });
});
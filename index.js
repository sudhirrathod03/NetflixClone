// Select all FAQ question elements
const faqQuestions = document.querySelectorAll('.question');

// Add event listeners to each question
faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        // Toggle the "active" class on the clicked question
        question.classList.toggle('active');

        // Find the icon inside the question
        const icon = question.querySelector('i');

        // Toggle the icon between "+" and "-"
        if (icon.classList.contains('fa-plus')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }

        // Check if the answer already exists, if not, add an answer
        let answer = question.nextElementSibling;
        if (!answer || !answer.classList.contains('faq-answer')) {
            answer = document.createElement('div');
            answer.classList.add('faq-answer');
            answer.style.height = '0'; // Start with 0 height
            answer.style.overflow = 'hidden';
            answer.style.transition = 'height 0.5s ease';
            answer.style.padding = '0 20px'; // Padding for smoother appearance
            answer.style.fontSize = '18px';
            answer.style.color = 'white';

            // Add sample answers based on the question text
            switch (question.querySelector('p').innerText.trim().toLowerCase()) {
                case 'what is netflix?':
                    answer.innerText = 'Netflix is a streaming service offering a wide variety of TV shows, movies, anime, documentaries, and more.';
                    break;
                case 'how much does netflix cost?':
                    answer.innerText = 'Plans start at ₹149 per month. Cancel anytime.';
                    break;
                case 'where can i watch?':
                    answer.innerText = 'Watch anywhere on your phone, tablet, laptop, or TV.';
                    break;
                case 'how do i cancel?':
                    answer.innerText = 'You can cancel anytime through your account settings.';
                    break;
                case 'what can i watch on netflix':
                    answer.innerText = 'Netflix offers a vast library of movies, TV shows, documentaries, and more.';
                    break;
                case 'is netflix good for kids?':
                    answer.innerText = 'Yes, Netflix offers a Kids section with family-friendly shows and movies.';
                    break;
                default:
                    answer.innerText = 'No additional information is available.';
            }

            // Insert the answer element after the question
            question.parentNode.insertBefore(answer, question.nextSibling);
        }

        // Toggle the height for smooth transition
        if (answer.style.height === '0px' || answer.style.height === '') {
            const scrollHeight = answer.scrollHeight; // Get full height of the content
            answer.style.height = `${scrollHeight}px`;
        } else {
            answer.style.height = '0';
        }
    });
});

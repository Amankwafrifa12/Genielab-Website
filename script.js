/* Carousel text animation 2 */
const typewriter = document.querySelector('.typewriter');
    const text1 = '...Bridging the digital divide';
    const text2 = '...Inspiring the next generation';
    let currentText = text1; // Start with the first text

    function typeWriter(text) {
        const letters = text.split('');
        let i = 0;

        const type = () => {
            if (i < letters.length) {
                typewriter.textContent += letters[i];
                i++;
                setTimeout(type, 100); // Adjust delay for speed
            } else {
                setTimeout(() => {
                    typewriter.textContent = ''; // Clear text
                    currentText = currentText === text1 ? text2 : text1; // Switch text
                    typeWriter(currentText); // Start typing the new text
                }, 1000); // Delay before new text
            }
        };

        type();
    }

    typeWriter(currentText);

    /* Header Hide and Show */
    let lastScrollTop = 0;
    const header = document.getElementById("header");
    
    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
        if (scrollTop > lastScrollTop) {
            // Scroll Down
            header.style.transform = "translateY(-100%)"; // Hide header
        } else {
            // Scroll Up
            header.style.transform = "translateY(0)"; // Show header
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    const rotatingWord = document.querySelector('.rotating-word');
    const words = ['DESIGN', 'AND TECHNOLOGY', 'ART'];
    let currentWordIndex = 0;

    function changeWord() {
        rotatingWord.textContent = words[currentWordIndex];
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }

    setInterval(changeWord, 2000); // Change word every 2 seconds

    

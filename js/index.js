const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});



const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => link.addEventListener('click', () => document.body.classList.remove('nav-open')))

// // Create the observer
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         const bar = entry.target.querySelector('.skill-per');

//         if (entry.isIntersecting) {
//             bar.classList.add('skill-per-animation');
//             return;// if we added the class, exit the function
//         }

//         // We're not intersecting, so remove the class!
//         bar.classList.remove('skill-per-animation');
//     });

// });

// // Tell the observer which elements to track
// observer.observe(document.querySelector('.skill-per-wrapper'));


// get skill-per class

const bars = document.querySelectorAll('.skill-per')

// Create observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show-bars', entry.isIntersecting)
    })
}, { threshold: 1, rootMargin: "-100px" })

bars.forEach(bar => {
    observer.observe(bar)
})





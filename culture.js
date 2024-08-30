
$(document).ready(function () {
    // Example cultural places (Reusing code from mountains.js)
    const mountains = [
        {
            name: "Batu Caves, Kuala Lumpur",
            image: "cultures-img/place3.jpeg",
            description: "An iconic Hindu pilgrimage site, Batu Caves features a series of limestone caves and cave temples, along with a massive statue of Lord Murugan.",
            link: "https://www.malaysia.travel/explore/batu-caves"
        },
        {
            name: "George Town, Penang",
            image: "cultures-img/place2.jpg",
            description: "A UNESCO World Heritage Site, George Town is renowned for its well-preserved colonial architecture, vibrant street art, and diverse cultural heritage.",
            link: "https://gtwhi.com.my/about-us/george-town-unesco-world-heritage-site/"
        },
        {
            name: "Malacca City",
            image: "cultures-img/place4.jpg",
            description: "Another UNESCO World Heritage Site, Malacca City is known for its historical significance, colonial architecture, and landmarks such as A Famosa Fort and St. Paul's Hill.",
            link: "https://www.malaysia.travel/explore/the-historical-city-of-melaka"
        },
        {
            name: "Sarawak Cultural Village",
            image: "cultures-img/place5.jpeg",
            description: "Situated in Kuching, Sarawak, this living museum showcases the traditional lifestyles of various indigenous groups of Sarawak through exhibits, performances, and interactive displays.",
            link: "https://scv.com.my/"
        },
        // Add more attractions as needed
    ];

    // Function to load mountains into the gallery
    function loadMountains() {
        const gallery = $('#mountains-gallery');
        mountains.forEach(mountain => {
            const mountainItem = `
                <div class="mountain-item">
                    <img src="${mountain.image}" alt="${mountain.name}">
                    <div class="mountain-overlay">
                        <h2>${mountain.name}</h2>
                        <p>${mountain.description}</p>
                    </div>
                </div>
            `;
            gallery.append(mountainItem);
        });
    }

    document.addEventListener('scroll', function () {
        var gotopbtn = document.querySelector('.gotopbtn');
        if (window.scrollY > 300) { // Adjust the value to control when the button appears
            gotopbtn.classList.add('visible');
        } else {
            gotopbtn.classList.remove('visible');
        }
    });

    function handleScroll() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) { // Adjust the scroll threshold as needed
            nav.classList.add('opaque');
            nav.classList.remove('transparent');
        } else {
            nav.classList.add('transparent');
            nav.classList.remove('opaque');
        }
    }

    // Event listener for learning more on favorite mountain
    $('#mountains-gallery').on('click', '.mountain-item', function () {
        const mountainName = $(this).find('h2').text();
        const selectedMountain = mountains.find(mountain => mountain.name === mountainName);

        if (selectedMountain) {
            window.location.href = selectedMountain.link; // Redirect to the mountain's link
        }
    });

    loadMountains();
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the page is already scrolled
    handleScroll();
});



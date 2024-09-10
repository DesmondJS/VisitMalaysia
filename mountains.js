$(document).ready(function () {
    // Example mountains data 
    const mountains = [
        {
            name: "Mount Kinabalu",
            image: "mountains-img/kinabalu.jpg",
            description: "Mount Kinabalu is the highest mountain in Borneo and Malaysia. With an elevation of 4,095 metres, it is the third-highest peak of an island on Earth, the 28th highest peak in Southeast Asia, and 20th most prominent mountain in the world",
            link: "https://en.wikipedia.org/wiki/Mount_Kinabalu"
        },
        {
            name: "Mount Santubong",
            image: "mountains-img/santubong.jpeg",
            description: "Mount Santubong is a mountain in the Malaysian state of Sarawak. It is located about 35 km north of the state capital Kuching.",
            link: "https://en.wikipedia.org/wiki/Mount_Santubong"
        },
        {
            name: "Mount Lambak",
            image: "mountains-img/lambak.jpg",
            description: "Mount Lambak is an inselberg in Kluang District, Johor, Malaysia. The summit is 510 m above sea level. Gunung Lambak is the Hausberg of Kluang.",
            link: "https://en.wikipedia.org/wiki/Mount_Lambak"
        },
        {
            name: "Mount Raya",
            image: "mountains-img/Raya.jpg",
            description: "Mount Raya is located on Langkawai Island, Kedah. It has a height of 881 meters (2,890 feet). There is a lot of flora in this mountain that has medicinal value.",
            link: "https://ms.wikipedia.org/wiki/Gunung_Raya"
        },
        {
            name: "Bukit Tabur",
            image: "mountains-img/tabur.jpg",
            description: "Bukit Tabur is a prominent part of the Klang Gates Quartz Ridge located in Hulu Gombak Forest Reserve. Known locally as Bukit Hangus, Dragon's back and Crystal Hill.",
            link: "https://ms.wikipedia.org/wiki/Bukit_Tabur"
        },
        {
            name: "Mount Brinchang",
            image: "mountains-img/brinchang.jpg",
            description: "Mount Brinchang, is a mountain in the Titiwangsa Range, situated on the border between the Malaysian states of Pahang and Perak. At 2,032 metres above sea level, it is the second highest mountain in the Cameron Highlands region, as well as the highest mountain in the area that can be accessed by car.",
            link: "https://en.wikipedia.org/wiki/Mount_Batu_Brinchang"
        },
        {
            name: "Mount Mat Cincang",
            image: "mountains-img/mat-cincang.jpg",
            description: "Mount Mat Cincang is located in Langkawi, Kedah that has a height of 713 meters (2,339 feet). Here there is also a cable car for tourists to go up to the top of Mat Cinchang mountain. From the top, tourists can see the scenery and islands around Langkawi Island.",
            link: "https://www.alltrails.com/trail/malaysia/kedah/gunung-mat-chinchang"
        },
        {
            name: "Mount Ledang",
            image: "mountains-img/ledang.jpg",
            description: "Mount Ledang historically known as Mount Ophir, is a mountain located in Tangkak District, Johor. Standing at 1,276 meters (4,186 feet). it is the 64th highest mountain in Malaysia and the highest peak in Johor.",
            link: "https://en.wikipedia.org/wiki/Mount_Ledang"
        },
        {
            name: "Mount Angsi",
            image: "mountains-img/angsi.jpg",
            description: "Mount Angsi is located between Seremban and Negeri Sembilan. It has a height of 825 meters (2,702 feet). Mount Angsi is located in a recreational forest that was established in 1972 with a development area of 6.9 hectares at that time.",
            link: "https://www.alltrails.com/trail/malaysia/negeri-sembilan/gunung-angsi"
        },
        // Add more mountains as needed
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

    // Event listener for learning more on favorite mountain
    $('#mountains-gallery').on('click', '.mountain-item', function () {
        const mountainName = $(this).find('h2').text();
        const selectedMountain = mountains.find(mountain => mountain.name === mountainName);

        if (selectedMountain) {
            window.location.href = selectedMountain.link; // Redirect to the mountain's link
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

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the page is already scrolled
    handleScroll();


    loadMountains();
});

     
     document.getElementById('currentYear').textContent = new Date().getFullYear();

    
     const airlineName = "SkyWings Airlines";
     const basePrice = 399;
     
     
     const destinations = {
         featured: [
             { 
                 name: "Paris, France", 
                 price: 499, 
                 image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                 slug: "paris",
                 description: "The City of Light and Love, famous for its art, fashion, and cuisine.",
                 highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
                 bestTime: "April to June, September to October",
                 flightDuration: "7 hours from New York"
             },
             { 
                 name: "Tokyo, Japan", 
                 price: 899, 
                 image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1494&q=80",
                 slug: "tokyo",
                 description: "A vibrant mix of traditional culture and cutting-edge technology.",
                 highlights: ["Shibuya Crossing", "Tokyo Tower", "Senso-ji Temple"],
                 bestTime: "March to May, September to November",
                 flightDuration: "14 hours from New York"
             },
             { 
                 name: "New York, USA", 
                 price: 399, 
                 image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                 slug: "new-york",
                 description: "The city that never sleeps, full of iconic landmarks and diverse culture.",
                 highlights: ["Statue of Liberty", "Central Park", "Times Square"],
                 bestTime: "April to June, September to early November",
                 flightDuration: "Domestic"
             }
         ],
         tropical: [
             { 
                 name: "Maldives", 
                 image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                 slug: "maldives",
                 price: 1299,
                 description: "The Maldives is a tropical paradise in the Indian Ocean with over 1,000 coral islands.",
                 highlights: ["Overwater bungalows", "Coral reefs", "Luxury resorts"],
                 bestTime: "November to April",
                 flightDuration: "20 hours from New York"
             },
             { 
                 name: "Bali", 
                 image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80",
                 slug: "bali",
                 price: 1099,
                 description: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.",
                 highlights: ["Ubud", "Tanah Lot", "Uluwatu Temple"],
                 bestTime: "April to October",
                 flightDuration: "22 hours from New York"
             },
             { 
                 name: "Hawaii", 
                 image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80",
                 slug: "hawaii",
                 price: 899,
                 description: "Hawaii is a U.S. state in the Pacific Ocean composed of islands with diverse natural scenery, warm tropical climate and active volcanoes.",
                 highlights: ["Waikiki Beach", "Volcanoes National Park", "Pearl Harbor"],
                 bestTime: "Year-round",
                 flightDuration: "10 hours from New York"
             }
         ],
         islands: [
             { 
                 name: "Santorini", 
                 image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
                 slug: "santorini",
                 price: 799,
                 description: "Santorini is one of the Cyclades islands in the Aegean Sea, known for its dramatic views, stunning sunsets, and white-washed buildings with blue domes.",
                 highlights: ["Oia village", "Red Beach", "Ancient Thera"],
                 bestTime: "April to October",
                 flightDuration: "12 hours from New York"
             },
             { 
                 name: "Seychelles", 
                 image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80",
                 slug: "seychelles",
                 price: 1199,
                 description: "The Seychelles is an archipelago of 115 islands in the Indian Ocean, known for its beaches, coral reefs, nature reserves, and rare wildlife.",
                 highlights: ["Anse Source d'Argent", "Vallée de Mai", "Aldabra Atoll"],
                 bestTime: "April to May, October to November",
                 flightDuration: "18 hours from New York"
             },
             { 
                 name: "Phuket", 
                 image: "humphrey-muleba-TejFa7VW5e4-unsplash.jpg",
                 slug: "phuket",
                 price: 699,
                 description: "Phuket is Thailand's largest island, known for its beaches, vibrant nightlife, and luxury resorts.",
                 highlights: ["Patong Beach", "Phi Phi Islands", "Big Buddha"],
                 bestTime: "November to February",
                 flightDuration: "20 hours from New York"
             }
         ],
         winter: [
             { 
                 name: "Switzerland", 
                 image: "leila-azevedo-o6UVPje41Lg-unsplash.jpg",
                 slug: "switzerland",
                 price: 899,
                 description: "Switzerland is a mountainous Central European country known for its ski resorts, lakes, villages and the high peaks of the Alps.",
                 highlights: ["Swiss Alps", "Jungfraujoch", "Lake Geneva"],
                 bestTime: "December to March",
                 flightDuration: "8 hours from New York"
             },
             { 
                 name: "Banff", 
                 image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
                 slug: "banff",
                 price: 599,
                 description: "Banff is a resort town in the Alberta Rockies, known for its hot springs, ski resorts, and stunning national park.",
                 highlights: ["Banff National Park", "Lake Louise", "Columbia Icefield"],
                 bestTime: "December to March",
                 flightDuration: "6 hours from New York"
             },
             { 
                 name: "Alaska", 
                 image: "the-tower-suite-st-moritz-exterior-hotel-3840-75.webp",
                 slug: "alaska",
                 price: 499,
                 description: "Alaska is a U.S. state known for its diverse terrain of open spaces, mountains, forests, and abundant wildlife.",
                 highlights: ["Denali National Park", "Northern Lights", "Glacier Bay"],
                 bestTime: "June to August, December to March",
                 flightDuration: "7 hours from New York"
             }
         ]
     };
     
     const offers = [
         { 
             title: "Early Bird Special", 
             description: "Book 3 months in advance and save up to 30%",
             code: "EARLY30"
         },
         { 
             title: "Family Package", 
             description: "Kids fly free on select destinations",
             code: "FAMILYFREE"
         },
         { 
             title: "Business Class Upgrade", 
             description: "50% off upgrades when booking economy",
             code: "UPGRADE50"
         }
     ];
     
     const experiences = [
         { icon: "fa-utensils", title: "Gourmet Dining", description: "Enjoy chef-prepared meals at 30,000 feet" },
         { icon: "fa-tv", title: "Entertainment", description: "Hundreds of movies, shows and games" },
         { icon: "fa-chair", title: "Comfort", description: "Spacious seating with extra legroom" },
         { icon: "fa-wifi", title: "Connectivity", description: "High-speed WiFi on all flights" }
     ];
     
     
     const featuredContainer = document.getElementById('featuredDestinations');
     const tropicalContainer = document.getElementById('tropicalDestinations');
     const islandContainer = document.getElementById('islandDestinations');
     const winterContainer = document.getElementById('winterDestinations');
     const offersContainer = document.getElementById('specialOffers');
     const experienceContainer = document.getElementById('flightExperience');
     const hamburger = document.querySelector('.hamburger');
     const navLinks = document.querySelector('.nav-links');
     const bookingForm = document.getElementById('flightBookingForm');
     const newsletterForm = document.getElementById('newsletterForm');
     const tripType = document.getElementById('trip-type');
     const returnDateGroup = document.querySelector('.return-date-group');
     const backToTop = document.querySelector('.back-to-top');
     
     
     function createDestinationCard(destination, showPrice = true) {
         let category = '';
         if (['maldives', 'bali', 'hawaii'].includes(destination.slug)) {
             category = 'tropical';
         } else if (['santorini', 'seychelles', 'phuket'].includes(destination.slug)) {
             category = 'islands';
         } else if (['switzerland', 'banff', 'alaska'].includes(destination.slug)) {
             category = 'winter';
         }
     
         return `
             <div class="destination-card">
                 <div class="destination-image" style="background-image: url('${destination.image}');">
                     <div class="destination-overlay">
                         <h3>${destination.name}</h3>
                         ${showPrice ? `<p>From $${destination.price} round trip</p>` : ''}
                     </div>
                 </div>
                 <button class="btn btn-small modal-trigger" data-destination="${category || destination.slug}">Explore</button>
             </div>
         `;
     }
     
     function createCategoryCard(destination) {
         let category = '';
         if (['maldives', 'bali', 'hawaii'].includes(destination.slug)) {
             category = 'tropical';
         } else if (['santorini', 'seychelles', 'phuket'].includes(destination.slug)) {
             category = 'islands';
         } else if (['switzerland', 'banff', 'alaska'].includes(destination.slug)) {
             category = 'winter';
         }
     
         return `
             <div class="category-card">
                 <img src="${destination.image}" alt="${destination.name}">
                 <h3>${destination.name}</h3>
                 <button class="btn btn-small modal-trigger" data-destination="${category || destination.slug}">Explore</button>
             </div>
         `;
     }
     
     function createOfferCard(offer) {
         return `
             <div class="offer-card">
                 <h3>${offer.title}</h3>
                 <p>${offer.description}</p>
                 <small>Use code: <strong>${offer.code}</strong></small>
                 <a href="#book" class="btn btn-small">Learn More</a>
             </div>
         `;
     }
     
     function createExperienceCard(experience) {
         return `
             <div class="experience-card">
                 <i class="fas ${experience.icon}"></i>
                 <h3>${experience.title}</h3>
                 <p>${experience.description}</p>
             </div>
         `;
     }
     
     
     function populateDestinations() {
         
         destinations.featured.forEach(destination => {
             featuredContainer.innerHTML += createDestinationCard(destination);
         });
     
         
         destinations.tropical.forEach(destination => {
             tropicalContainer.innerHTML += createCategoryCard(destination);
         });
     
         
         destinations.islands.forEach(destination => {
             islandContainer.innerHTML += createCategoryCard(destination);
         });
     
         
         destinations.winter.forEach(destination => {
             winterContainer.innerHTML += createCategoryCard(destination);
         });
     
         
         offers.forEach(offer => {
             offersContainer.innerHTML += createOfferCard(offer);
         });
     
         
         experiences.forEach(experience => {
             experienceContainer.innerHTML += createExperienceCard(experience);
         });
     }
     
     
     function setupModals() {
         const modalTriggers = document.querySelectorAll('.modal-trigger');
         const modals = document.querySelectorAll('.modal');
         const closeButtons = document.querySelectorAll('.close-modal');
     
         modalTriggers.forEach(trigger => {
             trigger.addEventListener('click', function() {
                 const target = this.dataset.destination;
                 const modalId = `${target}Modal`;
                 
                 
                 if (target === 'hidden-gems') {
                     document.getElementById('hiddenGemsModal').style.display = 'block';
                 } 
                 
                 else if (['tropical', 'islands', 'winter', 'featured'].includes(target)) {
                     document.getElementById(modalId).style.display = 'block';
                 } else {
                     
                     document.getElementById(modalId).style.display = 'block';
                 }
                 
                 document.body.style.overflow = 'hidden';
             });
         });
     
         closeButtons.forEach(button => {
             button.addEventListener('click', function() {
                 this.closest('.modal').style.display = 'none';
                 document.body.style.overflow = 'auto';
             });
         });
     
         modals.forEach(modal => {
             modal.addEventListener('click', function(e) {
                 if (e.target === this) {
                     this.style.display = 'none';
                     document.body.style.overflow = 'auto';
                 }
             });
         });
     }
     
     
     function setupEventListeners() {
         
         hamburger.addEventListener('click', () => {
             navLinks.classList.toggle('active');
         });
     
         
         document.querySelectorAll('.nav-links a').forEach(link => {
             link.addEventListener('click', (e) => {
                 
                 if (link.getAttribute('href') === '#destinations') {
                     e.preventDefault();
                     
                     
                     if (window.innerWidth <= 768) {
                         const featuredSection = document.getElementById('featured');
                         if (featuredSection) {
                             window.scrollTo({
                                 top: featuredSection.offsetTop - 80,
                                 behavior: 'smooth'
                             });
                         }
                     }
                     
                     
                     navLinks.classList.remove('active');
                 } else if (link.getAttribute('href').startsWith('#')) {
                     
                     navLinks.classList.remove('active');
                 }
                 
                 
                 if (link.parentElement.classList.contains('dropdown')) {
                     const dropdownMenu = link.nextElementSibling;
                     if (dropdownMenu) {
                         dropdownMenu.classList.toggle('active');
                     }
                 }
             });
         });
     
        
         window.addEventListener('scroll', () => {
             const navbar = document.querySelector('.navbar');
             if (window.scrollY > 50) {
                 navbar.classList.add('scrolled');
             } else {
                 navbar.classList.remove('scrolled');
             }
     
             
             if (window.scrollY > 300) {
                 backToTop.classList.add('visible');
             } else {
                 backToTop.classList.remove('visible');
             }
         });
     
         
         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
             anchor.addEventListener('click', function(e) {
                 e.preventDefault();
                 
                 const targetId = this.getAttribute('href');
                 if (targetId === '#') return;
                 
                 const targetElement = document.querySelector(targetId);
                 if (targetElement) {
                     window.scrollTo({
                         top: targetElement.offsetTop - 80,
                         behavior: 'smooth'
                     });
                 }
             });
         });
     
         
         backToTop.addEventListener('click', function(e) {
             e.preventDefault();
             window.scrollTo({
                 top: 0,
                 behavior: 'smooth'
             });
         });
     
         
         if (newsletterForm) {
             newsletterForm.addEventListener('submit', function(e) {
                 e.preventDefault();
                 const email = document.getElementById('newsletterEmail').value;
                 
                 
                 console.log('New subscriber:', email);
                 alert(`Thank you for subscribing with ${email}! You'll receive our latest deals soon.`);
                 this.reset();
             });
         }
     
         
         setupBookingForm();
     }
     
     
     function setupBookingForm() {
         if (!bookingForm) return;
     
         
         tripType.addEventListener('change', function() {
             if (this.value === 'roundtrip') {
                 returnDateGroup.style.display = 'block';
                 document.getElementById('return').setAttribute('required', '');
             } else {
                 returnDateGroup.style.display = 'none';
                 document.getElementById('return').removeAttribute('required');
             }
         });
     
         
         if (tripType.value !== 'roundtrip') {
             returnDateGroup.style.display = 'none';
             document.getElementById('return').removeAttribute('required');
         }
     
        
         document.querySelectorAll('.passenger-btn').forEach(btn => {
             btn.addEventListener('click', function() {
                 const type = this.dataset.type;
                 const input = document.getElementById(type);
                 let value = parseInt(input.value);
                 
                 if (this.classList.contains('plus')) {
                     input.value = value + 1;
                 } else if (this.classList.contains('minus') && value > (type === 'adults' ? 1 : 0)) {
                     input.value = value - 1;
                 }
             });
         });
     
         
         document.querySelectorAll('.class-option').forEach(option => {
             option.addEventListener('click', function() {
                 document.querySelectorAll('.class-option').forEach(opt => {
                     opt.classList.remove('active');
                 });
                 this.classList.add('active');
                 document.getElementById('class').value = this.dataset.value;
             });
         });
     
         
         const today = new Date().toISOString().split('T')[0];
         document.getElementById('departure').setAttribute('min', today);
         document.getElementById('return').setAttribute('min', today);
     
       
         bookingForm.addEventListener('submit', function(e) {
             e.preventDefault();
             
             const formData = {
                 tripType: tripType.value,
                 from: document.getElementById('from').value,
                 to: document.getElementById('to').value,
                 departure: document.getElementById('departure').value,
                 return: document.getElementById('return').value,
                 adults: document.getElementById('adults').value,
                 children: document.getElementById('children').value,
                 infants: document.getElementById('infants').value,
                 class: document.getElementById('class').value,
                 promo: document.getElementById('promo').value
             };
             
           
             console.log('Flight search submitted:', formData);
             
            
             let message = `Searching for ${formData.tripType} flights from ${formData.from} to ${formData.to}`;
             message += ` departing ${formData.departure}`;
             
             if (formData.tripType === 'roundtrip') {
                 message += ` and returning ${formData.return}`;
             }
             
             message += ` for ${formData.adults} adult(s), ${formData.children} child(ren), and ${formData.infants} infant(s) in ${formData.class} class.`;
             
             if (formData.promo) {
                 message += `\n\nPromo code applied: ${formData.promo}`;
             }
             
             alert(message);
         });
     }
     
     
     function init() {
         populateDestinations();
         setupEventListeners();
         setupModals();
         
         
         const myFlight = new Flight("New York", "London", "2023-12-15", 799);
         console.log(myFlight.displayInfo());
         console.log("Discounted price:", myFlight.applyDiscount(15));
     }
     
   
     function Flight(from, to, date, price) {
         this.from = from;
         this.to = to;
         this.date = date;
         this.price = price;
         
         this.displayInfo = function() {
             return `Flight from ${this.from} to ${this.to} on ${this.date} for $${this.price}`;
         };
     }
     
    
     Flight.prototype.applyDiscount = function(discountPercent) {
         const discountAmount = this.price * (discountPercent / 100);
         this.price -= discountAmount;
         return this.price;
     };
     
    
     document.addEventListener('DOMContentLoaded', init);
const themeToggle = document.getElementById('themeToggle');
let isLightTheme = true; 

function toggleTheme() {
    isLightTheme = !isLightTheme;
    document.body.dataset.theme = isLightTheme ? 'light' : 'dark';
    themeToggle.textContent = isLightTheme ? '🌙' : '☀️';
}

document.body.dataset.theme = 'light';
themeToggle.textContent = '🌙';
themeToggle.addEventListener('click', toggleTheme);

let assembleButton = document.getElementById("assembleBtn");
const avengers = [
    {
        name: "Iron Man",
        image: "./Images/Ironman.jpg",
        description: "Tony Stark, genius billionaire playboy philanthropist, fights evil in a high-tech suit of armor he created."
    },
    {
        name: "Captain America",
        image: "./Images/CaptainAmerica.jpg",
        description: "Steve Rogers, a World War II veteran and super-soldier, leads the Avengers with unwavering courage and integrity."
    },
    {
        name: "Thor",
        image: "./Images/Thor.jpg",
        description: "The God of Thunder from Asgard, wielding his mighty hammer Mjolnir to protect both Earth and the Nine Realms."
    },
    {
        name: "Hulk",
        image: "./Images/Hulk.jpg",
        description: "Dr. Bruce Banner transforms into the incredible Hulk, a green powerhouse with unlimited strength and rage."
    },
    {
        name: "Black Widow",
        image: "./Images/BlackWidow.jpg",
        description: "Natasha Romanoff, master spy and skilled fighter, brings lethal precision and intelligence to the team."
    },
    {
        name: "Hawkeye",
        image: "./Images/Hawkeye.jpg",
        description: "Clint Barton, master archer and marksman, never misses his target and provides crucial tactical support."
    },
    {
        name: "Spider-Man",
        image: "./Images/SpiderMan.jpg",
        description: "Peter Parker, the friendly neighborhood Spider-Man, combines superhuman abilities with youthful enthusiasm."
    },
    {
        name: "Black Panther",
        image: "./Images/BlackPanther.jpg",
        description: "T'Challa, king of Wakanda, protects his nation and the world with advanced technology and enhanced abilities."
    },
    {
        name: "Doctor Strange",
        image: "./Images/DoctorStrange.jpg",
        description: "Dr. Stephen Strange, Master of the Mystic Arts, defends reality itself using powerful magical abilities."
    },
    {
        name: "Captain Marvel",
        image: "./Images/CaptainMarvel.jpg",
        description: "Carol Danvers, one of the universe's most powerful heroes, brings cosmic-level powers to Earth's defense."
    }
];

assembleButton.addEventListener("click", () => {
    const randomAvenger = avengers[Math.floor(Math.random() * avengers.length)];
    
    document.getElementById("avengerName").textContent = randomAvenger.name;
    document.getElementById("avengerImage").src = randomAvenger.image;
    document.getElementById("avengerDescription").textContent = randomAvenger.description;
});

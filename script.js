/* let userMessage = prompt("Write your message here");

 if (userMessage.length<150){
     alert("The message contains " + userMessage.length + " characters. You have " + [150-userMessage.length]+ " left." );
 } else {
     alert("Your message exceeds the word limit. You have extra " + [userMessage.length-150] + ".");
     alert("Your message is as follows: " + userMessage.slice(0,151));
 }  
     
 This code was my inspiration to make this 'X' front-end project.*/ 
 

//linkers
function openFile() {
    window.location.href = "index.html";
}

function profileFile() {
    window.location.href = "profile.html";
}

function homeFile() {
    window.location.href = "home.html";
}

function loginpage() {
    window.location.href = "login.html";
}

function signuppage() {
    window.location.href = "SignUp.html";
}

function subscribepage() {
    window.location.href = "subscribe.html";
}



//Everyone can see dropdown

document.addEventListener("DOMContentLoaded", function () {
    const audienceBtns = document.getElementsByClassName("audienceBtn");
    const showBox = document.getElementById("showBox");

    console.log('audienceBtns:', audienceBtns);
    console.log('showBox:', showBox);

    for (let i = 0; i < audienceBtns.length; i++) {
        audienceBtns[i].addEventListener('click', function () {
            console.log('Button clicked:', i);
            if (showBox.classList.contains('hidden')) {
                showBox.classList.remove('hidden');
                console.log('ShowBox is now visible');
            } else {
                showBox.classList.add('hidden');
                console.log('ShowBox is now hidden');
            }
        });
    }
});



// selected option on Everyone can see

document.addEventListener("DOMContentLoaded", () => {
    const options = document.getElementsByClassName("dropdown_options");
    const text = document.querySelector(".audienceBtn");

    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", () => {
            function removeTickMark(str) {
                return str.replace("✔", "").trim();
            }
            text.innerHTML = removeTickMark(options[i].innerHTML);

            for (let j = 0; j < options.length; j++) {
                options[j].classList.remove('selected');
            }

            options[i].classList.add('selected');
        });

    }
});



// printing tweet on scrollpg
document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("input_tweet");
    const TweetButton = document.getElementById("tweetButton");
    const outputElement = document.getElementById("output");

    TweetButton.addEventListener('click', () => {
        const userInput = inputElement.value;
        outputElement.innerHTML = userInput;
    })

})



// Counting characters actively from textarea
function characterCount() {
    const placeholder = document.querySelector(".char_count");
    const tweetText = document.querySelector(".input_editable").value; 
    const maxLength = 150;
    const dynamicLength = maxLength - tweetText.length; 
    placeholder.innerHTML = dynamicLength; 
}

// Adding event listener to count characters on every key press
document.querySelector(".input_editable").addEventListener("input", characterCount);
  


// search dropdown

function filterFunction() {
    var input, filter, dropdown, options, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    dropdown = document.getElementById("myDropdown");
    options = dropdown.getElementsByTagName("a");
    for (i = 0; i < options.length; i++) {
        if (options[i].innerHTML.toUpperCase().includes(filter)) {
            options[i].style.display = "block";
        } else {
            options[i].style.display = "none";
        }
    }
}



// generating randomhashtags

document.addEventListener('DOMContentLoaded', function () {

    const hashtagHeading = ["What's Happening?"];

    function displayHeading() {
        const container = document.getElementById('hashtagContainer');
        const heading = document.createElement('h1');
        heading.classList.add('hashtag_heading');
        heading.textContent = hashtagHeading;
        container.appendChild(heading);
    }

    const hashtags = [
        '#AI', '#MachineLearning', '#BigData', '#IoT', '#Blockchain',
        '#Crypto', '#Bitcoin', '#Ethereum', '#NFT', '#Metaverse',
        '#AR', '#VR', '#CyberSecurity', '#DataScience', '#CloudComputing',
        '#5G', '#QuantumComputing', '#EdgeComputing', '#DevOps', '#SaaS',
        '#USPolitics', '#China', '#Russia', '#MiddleEast', '#GlobalTrade',
        '#India', '#IndianPolitics', '#Modi', '#IndianEconomy', '#StartupIndia',
        '#DigitalIndia', '#MakeInIndia', '#IndianTech', '#IndianStartups', '#IndianCulture',
        '#InternationalRelations', '#UN', '#NATO', '#ClimateChange', '#SustainableEnergy',
        '#ElectricVehicles', '#SpaceTech', '#3DPrinting', '#Robotics', '#Automation',
        '#SmartCities', '#Wearables', '#DroneTech', '#RenewableEnergy', '#SolarPower',
        '#WindEnergy', '#BatteryTech', '#CleanEnergy', '#EnergyStorage', '#Recycling',
        '#CircularEconomy', '#ZeroWaste', '#CarbonFootprint', '#ESG', '#SocialImpact',
        '#DiversityAndInclusion', '#MentalHealth', '#RemoteWork', '#FutureOfWork', '#GigEconomy',
        '#Freelancing', '#Startups', '#Entrepreneurship', '#Innovation', '#Leadership',
        '#Productivity', '#Marketing', '#DigitalMarketing', '#ContentMarketing', '#SocialMedia',
        '#InfluencerMarketing', '#ECommerce', '#RetailTech', '#CustomerExperience', '#CustomerSuccess',
        '#UX', '#UI', '#DesignThinking', '#CreativeTech', '#ArtTech',
        '#MusicTech', '#FilmTech', '#Gaming', '#Esports', '#VirtualEvents',
        '#LiveStreaming', '#Podcasting', '#Vlogging', '#Blogging', '#SEO',
        '#SEM', '#AffiliateMarketing', '#EmailMarketing', '#GrowthHacking', '#PersonalBranding',
        '#FitnessTech', '#HealthAndWellness', '#Mindfulness', '#Yoga', '#Meditation',
        '#TravelTech', '#FoodTech', '#RestaurantTech', '#AgricultureTech', '#SmartFarming'
    ];

    const numberOfHashtagsToShow = 5;

    function getRandomHashtags(array, count) {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function displayHashtags() {
        const container = document.getElementById('hashtagContainer');
        const randomHashtags = getRandomHashtags(hashtags, numberOfHashtagsToShow);
        randomHashtags.forEach(hashtag => {
            const span = document.createElement('span');
            span.classList.add('hashtag');
            span.textContent = hashtag;
            container.appendChild(span);
        });
    }

    // Clear container once before displaying heading and hashtags
    const container = document.getElementById('hashtagContainer');
    container.innerHTML = '';

    displayHeading();
    displayHashtags();

});


// subscribe pg toggle button
document.addEventListener('DOMContentLoaded', () => {
    const containerToggle = document.querySelector(".container_toggle");
    const monthlyBtn = document.querySelector(".toggle_button_Monthly");
    const annualBtn = document.querySelector(".toggle_button_Annual");

    containerToggle.addEventListener("click", (e) => {
       
        if (e.target.classList.contains('toggle_button_Monthly')) {
            monthlyBtn.classList.add('active');
            annualBtn.classList.remove('active');
            console.log('Monthly clicked!');
        } else if (e.target.classList.contains('toggle_button_Annual')) {
            annualBtn.classList.add('active');
            monthlyBtn.classList.remove('active');
            console.log('Annual clicked!'); 
        }
    });
});





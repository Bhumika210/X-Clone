//Everyone can see dropdown

document.addEventListener("DOMContentLoaded", function () {
    const audienceBtns = document.getElementsByClassName("audienceBtn");
    const showBox = document.getElementById("showBox2");

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
            console.log(options[i].innerHTML); 

            for (let j = 0; j < options.length; j++) {
                options[j].classList.remove('selected');
            }

            options[i].classList.add('selected');
        });

    }
});



// Counting characters actively from textarea
function characterCount() {
    const placeholder = document.querySelector(".char_count");
    const tweetText = document.querySelector(".inputBox").value; 
    const maxLength = 150;
    const dynamicLength = maxLength - tweetText.length; 
    placeholder.innerHTML = dynamicLength; 
}

document.querySelector(".inputBox").addEventListener("input", characterCount);

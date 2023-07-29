
    document.addEventListener("DOMContentLoaded", () => {
        let inputSearchEl = document.querySelector(".inputSearch");
        let recentInput = [];
        let formInputEl = document.getElementById("inputForm");
        const listofRecentEl = document.querySelector(".listofRecent");
        
        inputSearchEl.addEventListener("keydown", () => {
            if (inputSearchEl.value) {
                document.getElementById("closeSearch").style.display = "block";
            } else {
                document.getElementById("closeSearch").style.display = "none";
            }
        });
        
        formInputEl.addEventListener("submit", (e) => {
            e.preventDefault();
            const inputValue = inputSearchEl.value.trim(); // Trim any leading/trailing spaces

            if (inputValue) {
                // Add the input value to the recentInput array if it's not empty
                recentInput.push(inputValue);
                inputSearchEl.value = ""; // Clear the input field after submission

                // Update the recent searches list
                updateRecentSearchesList();
            }
        });

        function updateRecentSearchesList() {
            listofRecentEl.innerHTML = ""; // Clear the previous content

            if (recentInput.length > 0) {
                for (let i = 0; i < recentInput.length; i++) {
                    const listItem = document.createElement("div");
                    listItem.classList.add("recentItem");
                    listItem.innerHTML = `
                        <div class="recentIcon">
                            <img src="./img/recent.png"/>
                        </div>
                        <p>${recentInput[i]}</p>
                    `;
                    listofRecentEl.appendChild(listItem);
                }
            }
        }
    });

    function facebook(){
        window.open(
            "https://www.facebook.com/meeshosupply",
            "_blank"
        )
    }
    function instagram(){
        window.open(
            "https://www.instagram.com/meeshoapp/",
            "_blank"
        )
    }
    function youtube(){
        window.open(
            "https://www.youtube.com/channel/UCaGHIRKYUYlaI_ZAt2hxpjw",
            "_blank"
        )
    }
    function linkedIn(){
        window.open(
            "https://www.linkedin.com/company/meesho/",
            "_blank"
        )
    }
    function twitter(){
        window.open(
            "https://twitter.com/meeshoapp",
            "_blank"
        )
    }
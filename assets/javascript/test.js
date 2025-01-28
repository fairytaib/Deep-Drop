let rewards = []
if (universalSkills.length === 0) {
    rewards = [
        new Item(randomItem.type, randomItem.name, randomItem.description, randomItem.rarity, randomItem.effect, randomItem.image),
        {
            type: "Empty Chest",
            name: "Empty Chest",
            description: "There are no skills available anymore. Choose a different reward.",
            image: "assets/images/filler-images/empty-chest.webp"
        },
        new Reward(randomHeal.type, randomHeal.name, randomHeal.description, randomHeal.rarity, randomHeal.effect, randomHeal.image)
    ];
} else {
    rewards = [
        new Item(randomItem.type, randomItem.name, randomItem.description, randomItem.rarity, randomItem.effect, randomItem.image),
        new Skill(randomSkill.type, randomSkill.name, randomSkill.description, randomSkill.rarity, randomSkill.effect, randomSkill.image, randomSkill.triggerCondition),
        new Reward(randomHeal.type, randomHeal.name, randomHeal.description, randomHeal.rarity, randomHeal.effect, randomHeal.image)
    ];
}
rewards.forEach(reward => {
    const rewardContainer = document.createElement("div");
    rewardContainer.classList.add("reward-display-option", "text-font", "reward-item");
    rewardItemDiv.appendChild(rewardContainer);

    // Add reward image
    const rewardImage = document.createElement("img");
    rewardImage.src = reward.image;
    rewardImage.alt = reward.name;
    rewardImage.classList.add("reward-image");
    rewardContainer.appendChild(rewardImage);

    // Add reward title
    const rewardTitle = document.createElement("h3");
    rewardTitle.textContent = reward.name;
    rewardTitle.classList.add("reward-title");
    rewardTitle.style.color = reward.rarity === "common" ? "#ffffff" : reward.rarity === "rare" ? "#01c801" : "#ed03ed";
    rewardContainer.appendChild(rewardTitle);

    // Add reward type
    const rewardType = document.createElement("h4");
    rewardType.textContent = reward.type;
    rewardType.classList.add("reward-type");
    rewardContainer.appendChild(rewardType);

    // Add reward description
    const rewardDescription = document.createElement("p");
    rewardDescription.textContent = reward.description;
    rewardDescription.classList.add("reward-description");
    rewardContainer.appendChild(rewardDescription);

    // Create the select button with a delay
    setTimeout(() => {
        const selectButton = document.createElement("button");
        selectButton.textContent = `Select ${reward.type}`;
        selectButton.setAttribute("aria-label", `Select ${reward.type}`)
        selectButton.classList.add("class-button", "reward-item");

        if (reward.name === "Broken Potion") {
            selectButton.classList.add("hidden")
        }
        if (reward.name === "Empty Chest") {
            selectButton.classList.add("hidden");
        }

        selectButton.addEventListener("click", () => {
            selectReward(reward, player); // Apply the selected reward
            goToContinueScreen("reward-item"); // Navigate to the continue screen
            displayBox.classList.remove("reward-display"); // Remove reward display class
        });

        buttonBox.appendChild(selectButton); // Append the button to the button box
    }, 1000);
});
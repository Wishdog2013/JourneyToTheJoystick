var currentScene = 0;

function nextScene(scene) {
  var storyElement = document.getElementById("story");
  var leftButton = document.getElementById("left-button");

  if (scene === 1) {
    storyElement.textContent = "You enter the sky path and soar through the clouds. What do you do next?";
    var rightButton = createButton("Go back", 8);
    appendButtons(leftButton, rightButton);
  } else if (scene === 2) {
    storyElement.textContent = "You venture down the lava path and face scorching heat. What do you do next?";
    var rightButton = createButton("Jump over lava", 9);
    removeButton(leftButton);
    appendButtons(null, rightButton);
  } else if (scene === 7) {
    storyElement.textContent = "You keep flying through the sky, enjoying the breathtaking view. What a remarkable journey!";
    removeButtons();
  } else if (scene === 8) {
    storyElement.textContent = "You go back and find yourself at the crossroads again. Which path will you choose?";
    var rightButton = createButton("Go right", 2);
    appendButtons(leftButton, rightButton);
  } else if (scene === 9) {
    storyElement.textContent = "You attempt to jump over the lava but fail. Your adventure ends here.";
    removeButtons();
  }
}

function createButton(text, scene) {
  var button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", function() {
    nextScene(scene);
  });
  return button;
}

function appendButtons(leftButton, rightButton) {
  var gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(leftButton);
  gameContainer.appendChild(rightButton);
}

function removeButton(button) {
  if (button && button.parentNode) {
    button.parentNode.removeChild(button);
  }
}

function removeButtons() {
  var gameContainer = document.getElementById("game-container");
  var buttons = gameContainer.getElementsByTagName("button");
  for (var i = buttons.length - 1; i >= 0; i--) {
    buttons[i].remove();
  }
}

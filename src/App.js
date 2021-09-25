import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🫐": "Blueberries",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "🫒": "Olive",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🌶️": "Hot Pepper",
  "🫑": "Bell Pepper",
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🥦": "Broccoli",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": "Chestnut",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🫓": "Flatbread",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🫔": "Tamale",
  "🥙": "Stuffed Flatbread",
  "🧆": "Falafel",
  "🥚": "Egg",
  "🍳": "Cooking",
  "🥘": "Shallow Pan of Food",
  "🍲": "Pot of Food",
  "🫕": "Fondue",
  "🥣": "Bowl with Spoon",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🧂": "Salt",
  "🥫": "Canned Food",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍥": "Fish Cake with Swirl",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🦪": "Oyster",
  "🍦": "Soft Ice Cream",
  "🍧": "Shaved Ice",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍮": "Custard",
  "🍯": "Honey Pot",
  "🍼": "Baby Bottle",
  "🥛": "Glass of Milk",
  "☕": "Hot Beverage",
  "🫖": "Teapot",
  "🍵": "Teacup Without Handle",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw",
  "🧋": "Bubble Tea",
  "🧃": "Beverage Box",
  "🧉": "Mate",
  "🧊": "Ice",
  "🥢": "Chopsticks",
  "🍽️": "Fork and Knife with Plate",
  "🍴": "Fork and Knife",
  "🥄": "Spoon",
  "": ""
};

var foodmoji = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiInputHandler() {
    var userInputEmoji = event.target.value;

    // var emojiMeaning = emojiDictionary[userInputEmoji];

    // if (emojiMeaning === undefined) {
    //   emojiMeaning = "emoji is not in the database";
    // }
    if (userInputEmoji in emojiDictionary) {
      setEmojiMeaning(emojiDictionary[userInputEmoji]);
    } else {
      setEmojiMeaning("we don't have this foodmoji in our database");
    }
    // setEmojiMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    setEmojiMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1 className="heading">Foodmoji Interpreter</h1>

      <input
        className="input"
        onChange={emojiInputHandler}
        placeholder=" enter a foodmoji here "
      />

      <div className="output">{emojiMeaning}</div>

      <h3 className="foodmoji"> foodmojis we know </h3>
      <section className="section-center">
        <ul>
          {foodmoji.map((emoji) => {
            return (
              <li
                className="list-inline"
                onClick={() => emojiClickHandler(emoji)}
                key={emoji}
              >
                {emoji}
              </li>
            );
          })}
        </ul>
      </section>
      <footer>by Vyshnavi K</footer>
    </div>
  );
}

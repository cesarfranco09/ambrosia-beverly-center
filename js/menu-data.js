/*
 * Ambrosia menus — transcribed from the printed in-house menus.
 * Edit prices and dishes here; the Menu section renders from this file.
 * Leave `price` empty ("") to hide a price that hasn't been confirmed.
 */
window.AMBROSIA_MENUS = [
  {
    id: "dinner",
    label: "Lunch & Dinner",
    title: "Lunch & Dinner",
    note: "Greek · Italian · Mediterranean",
    sections: [
      {
        name: "Appetizers",
        items: [
          { name: "Cheese Saganaki", price: "19", desc: "Pan-seared Greek cheese, served hot and golden." },
          { name: "Polpette di Melanzane", price: "18", desc: "Eggplant polpette, tomato sauce, stracciatella cheese & fresh basil." },
          { name: "Burrata & Prosciutto", price: "27", desc: "Creamy burrata, prosciutto & extra-virgin olive oil." },
          { name: "Hummus & Tzatziki Plate", price: "18", desc: "House-made hummus and tzatziki served with warm pita." },
          { name: "Fritto Misto", price: "28", desc: "Crispy calamari & shrimp, lightly fried and served with lemon." },
          { name: "Mediterranean Tuna Tartare", price: "32", desc: "Fresh tuna, sun-dried tomatoes, creamy burrata, extra-virgin olive oil, lemon, fresh herbs & Mediterranean-inspired seasoning." }
        ]
      },
      {
        name: "Salads",
        items: [
          { name: "Classic Caesar Salad", price: "19", desc: "Crisp romaine lettuce, Parmigiano Reggiano, house-made croutons & classic Caesar dressing." },
          { name: "Mediterranean Greek Salad", price: "21", desc: "Tomatoes, cucumbers, red onion, Kalamata olives, feta cheese, oregano & extra-virgin olive oil." },
          { name: "Arugula, Pear & Gorgonzola Salad", price: "22", desc: "Fresh arugula, sliced pear, Gorgonzola cheese, toasted walnuts & light balsamic vinaigrette." }
        ]
      },
      {
        name: "Pasta",
        items: [
          { name: "Spaghetti allo Scoglio", price: "39", desc: "Spaghetti with a selection of fresh seafood in a light tomato, garlic & white wine sauce." },
          { name: "Spaghetti with Lobster", price: "42", desc: "Spaghetti with lobster, cherry tomatoes, garlic, herbs & a light Mediterranean tomato sauce." },
          { name: "Lobster Ravioli", price: "42", desc: "Lobster-filled ravioli finished with a delicate butter & herb sauce." },
          { name: "Rigatoni Bolognese", price: "34", desc: "Rigatoni pasta with slow-cooked beef Bolognese, tomato, aromatic herbs & Parmigiano Reggiano." },
          { name: "Lobster Tagliatelle", price: "MP", desc: "Fresh tagliatelle with lobster, garlic, herbs and a light Mediterranean-style sauce." },
          { name: "Tagliatelle with Asparagus", price: "34", desc: "Fresh tagliatelle tossed with asparagus, garlic, olive oil & Parmigiano Reggiano." }
        ]
      },
      {
        name: "Main Courses",
        items: [
          { name: "Mediterranean Branzino", price: "45", desc: "Grilled branzino served with Mediterranean-inspired accompaniments and mixed greens." },
          { name: "Salmon with Romesco", price: "39", desc: "Grilled Atlantic salmon with romesco sauce, grilled zucchini, asparagus & bell peppers." },
          { name: "Braised Beef Chuck Roast", price: "42", desc: "Slow-braised beef chuck roast served with creamy mashed potatoes & crispy leeks." },
          { name: "Ribeye Steak", price: "59", desc: "Prime ribeye served with roasted potatoes & broccolini." },
          { name: "Chicken Petroniana", price: "38", desc: "Breaded chicken cutlet topped with prosciutto crudo, Parmigiano fondue & fresh arugula." },
          { name: "Chicken Souvlaki", price: "28", desc: "Grilled marinated chicken skewers with Mediterranean herbs and seasoning." },
          { name: "Beef Souvlaki", price: "29", desc: "Grilled marinated beef skewers with Mediterranean herbs and seasoning." },
          { name: "Rack of Lamb", price: "60", desc: "Tender rack of lamb, expertly cooked and served with Mediterranean-inspired accompaniments." }
        ]
      },
      {
        name: "Sides",
        items: [
          { name: "Asparagus", price: "16", desc: "Grilled asparagus with olive oil and sea salt." },
          { name: "Brussels Sprouts", price: "18", desc: "Roasted Brussels sprouts with dried raisins and pomegranate." },
          { name: "Mashed Potatoes", price: "", desc: "Creamy house mashed potatoes." },
          { name: "Greek Potatoes", price: "16", desc: "Roasted Greek potatoes with lemon, oregano and herbs." },
          { name: "Truffle Fries", price: "18", desc: "Crispy fries finished with truffle oil and grated Parmigiano." }
        ]
      },
      {
        name: "Desserts",
        items: [
          { name: "Homemade Panna Cotta", price: "15", desc: "House-made panna cotta with a smooth, delicate finish." },
          { name: "Homemade Fruit Tart", price: "", desc: "House-made seasonal fruit tart with a delicate pastry crust and pastry cream." },
          { name: "Homemade Cheesecake", price: "", desc: "House-made cheesecake with a rich, creamy texture and a classic finish." }
        ]
      }
    ]
  },
  {
    id: "brunch",
    label: "Breakfast & Brunch",
    title: "Breakfast & Brunch",
    note: "8:00 AM – 2:00 PM",
    sections: [
      {
        name: "Signatures",
        items: [
          { name: "The Grand Breakfast Platter", price: "32", desc: "Two eggs any style, applewood smoked bacon, chicken sausage, grilled halloumi, imported feta, vine-ripened tomatoes, cucumbers, Kalamata olives, crispy breakfast potatoes, and Ambrosia house bread." },
          { name: "Turkish Eggs (Çılbır)", price: "24", desc: "Poached eggs over warm garlic Greek yogurt, Aleppo pepper butter, fresh dill, and warm artisan pita." },
          { name: "Shakshuka", price: "25", desc: "Two eggs baked in a slow-simmered tomato and roasted pepper sauce with imported feta, fresh herbs, and grilled house bread." },
          { name: "Steak & Eggs", price: "42", desc: "10 oz Prime Ribeye, two eggs any style, grilled asparagus, and crispy breakfast potatoes." }
        ]
      },
      {
        name: "Ambrosia Benedict Collection",
        items: [
          { name: "Lobster Truffle Benedict", price: "42", desc: "Butter-poached Maine lobster, two poached eggs, black truffle hollandaise, grilled brioche, and crispy breakfast potatoes." },
          { name: "Burrata & Black Truffle Benedict", price: "32", desc: "Creamy burrata, two poached eggs, black truffle hollandaise, Mediterranean herbs, grilled brioche, and crispy breakfast potatoes." },
          { name: "Smoked Salmon Benedict", price: "34", desc: "Scottish smoked salmon, two poached eggs, dill hollandaise, grilled brioche, capers, and crispy breakfast potatoes." }
        ]
      },
      {
        name: "Signature Fried Bread Toasts",
        items: [
          { name: "Mediterranean Avocado Toast", price: "24", desc: "Smashed avocado, imported feta, cherry tomatoes, cucumbers, Kalamata olives, oregano, and premium Greek olive oil." },
          { name: "Smoked Salmon Avocado Toast", price: "32", desc: "Atlantic smoked salmon, smashed avocado, capers, pickled red onions, fresh dill, and lemon." },
          { name: "Classic Avocado Toast", price: "21", desc: "Smashed avocado, lemon, flaky sea salt, chili flakes, and premium Greek extra virgin olive oil." },
          { name: "Burrata & Prosciutto Toast", price: "29", desc: "Creamy burrata, Prosciutto di Parma, basil, aged balsamic glaze, and extra virgin olive oil." }
        ]
      },
      {
        name: "Sweet Breakfast",
        items: [
          { name: "Olympus Belgian Waffle", price: "24", desc: "Golden Belgian waffle topped with authentic Greek yogurt, fresh seasonal berries, premium Greek honey, whipped honey butter, toasted hazelnuts, and powdered sugar." },
          { name: "Greek Yogurt Parfait", price: "18", desc: "Authentic Greek yogurt layered with house-made honey granola, fresh seasonal berries, and organic Greek honey." },
          { name: "Italian Lemon Ricotta Belgian Waffle", price: "25", desc: "Golden Belgian waffle topped with whipped lemon mascarpone, fresh berries, warm Greek honey, powdered sugar, and fresh mint." }
        ]
      },
      {
        name: "Fresh Salads & Mezze",
        items: [
          { name: "Classic Caesar Salad", price: "20", desc: "Romaine hearts, shaved Parmesan, garlic-herb croutons, and creamy Caesar dressing." },
          { name: "Mediterranean Greek Salad", price: "22", desc: "Romaine, vine-ripened tomatoes, cucumbers, red onions, Kalamata olives, imported Greek feta, and lemon-oregano vinaigrette." },
          { name: "Beetroot Pita & Hummus Plate", price: "21", desc: "House-made beetroot pita, creamy hummus, chickpeas, sumac, and premium Greek olive oil." },
          { name: "Burrata Caprese", price: "24", desc: "Heirloom tomatoes, creamy burrata, fresh basil, aged balsamic, and extra virgin olive oil." }
        ],
        extras: {
          title: "Protein Additions",
          items: [
            { name: "Grilled Herb Chicken", price: "+10" },
            { name: "Grilled Atlantic Salmon", price: "+14" },
            { name: "Prime Ribeye", price: "+16" },
            { name: "Butter-Poached Lobster", price: "+20" }
          ]
        }
      },
      {
        name: "Souvlaki & Grill",
        items: [
          { name: "Lemon Herb Chicken Souvlaki", price: "30", desc: "Two marinated chicken skewers served with traditional Greek salad, house-made tzatziki, tahini sauce, and warm artisan pita." },
          { name: "Prime Ribeye Souvlaki", price: "42", desc: "Prime Ribeye skewers served with garlic-parsley chimichurri, breakfast potatoes, artisan pita, Maldon salt, and sumac." },
          { name: "Grilled Atlantic Salmon Souvlaki", price: "36", desc: "Fresh grilled Atlantic salmon served with Greek salad, tzatziki, lemon, and warm artisan pita." },
          { name: "The Beverly Hills Grand Board", tag: "For Two", price: "78", featured: true, desc: "Chicken souvlaki, Prime Ribeye souvlaki, breakfast potatoes, artisan pita, beetroot pita strips, house-made hummus, tzatziki, tahini, chimichurri, and mixed olives." }
        ]
      }
    ]
  },
  {
    id: "happy-hour",
    label: "Happy Hour",
    title: "Happy Hour Bites",
    note: "Monday – Friday · 3 PM – 6 PM",
    sections: [
      {
        name: "Happy Hour Bites",
        hideName: true,
        items: [
          { name: "Cheese Saganaki", price: "12", desc: "Pan-seared Greek cheese served golden and bubbling with fresh lemon." },
          { name: "Meatballs al Pomodoro", price: "12", desc: "House-made Italian meatballs simmered in a rich tomato sauce." },
          { name: "Polpette di Melanzane", price: "11", desc: "Crispy eggplant meatballs, tomato sauce, stracciatella cheese and fresh basil." },
          { name: "Mussels", price: "15", desc: "Fresh mussels sautéed with cherry tomatoes, garlic and a light aromatic sauce." },
          { name: "Stuffed Zucchini Blossoms", price: "13", desc: "Delicate zucchini blossoms, stuffed and lightly crisped." },
          { name: "Fritto Misto", price: "17", desc: "Crispy calamari, shrimp and seasonal vegetables." },
          { name: "Burrata & Prosciutto", price: "17", desc: "Creamy burrata, prosciutto crudo, heirloom tomatoes, fresh basil, balsamic and extra-virgin olive oil." },
          { name: "Caesar Salad", price: "12", desc: "Crisp romaine, Parmigiano Reggiano, house Caesar dressing and croutons." },
          { name: "Greek Salad", price: "13", desc: "Heirloom tomatoes, cucumber, peppers, red onion, Kalamata olives and feta with extra-virgin olive oil and oregano." },
          { name: "Rigatoni alla Vodka & 'Nduja", price: "18", desc: "Rigatoni in creamy tomato-vodka sauce with spicy 'nduja, finished with Parmigiano gratin." },
          { name: "Tagliatelle al Ragù", price: "19", desc: "Fresh tagliatelle with slow-braised house ragù and Parmigiano Reggiano." }
        ]
      }
    ]
  },
  {
    id: "cafe",
    label: "Coffee & Juices",
    title: "Espresso Bar, Juices & Smoothies",
    note: "Served with breakfast & brunch",
    sections: [
      {
        name: "Espresso Bar",
        compact: true,
        items: [
          { name: "Espresso", price: "6" },
          { name: "Double Espresso", price: "8" },
          { name: "Americano", price: "7" },
          { name: "Cortado", price: "7" },
          { name: "Cappuccino", price: "8" },
          { name: "Latte", price: "8" },
          { name: "Vanilla Latte", price: "9" },
          { name: "Pistachio Latte", price: "10" },
          { name: "Freddo Espresso", price: "8" },
          { name: "Freddo Cappuccino", price: "9" },
          { name: "Greek Coffee", price: "7" },
          { name: "Matcha Latte", price: "9" },
          { name: "Strawberry Matcha", price: "10" }
        ]
      },
      {
        name: "Fresh Juices",
        items: [
          { name: "Ambrosia Wellness", price: "12", desc: "Orange, carrot, apple, ginger, turmeric, lemon." },
          { name: "Green Detox", price: "12", desc: "Spinach, cucumber, celery, green apple, ginger, lemon." },
          { name: "Watermelon Mint", price: "11" },
          { name: "Fresh Orange Juice", price: "10" },
          { name: "Cucumber Lemonade", price: "10" }
        ]
      },
      {
        name: "Protein Smoothies",
        items: [
          { name: "Olympus Protein", price: "14", desc: "Banana, peanut butter, dates, oats, vanilla protein, and milk." },
          { name: "Mediterranean Green", price: "14", desc: "Spinach, pineapple, mango, Greek yogurt, and honey." },
          { name: "Berry Protein", price: "14", desc: "Mixed berries, banana, Greek yogurt, vanilla protein, and almond milk." }
        ]
      }
    ]
  }
];

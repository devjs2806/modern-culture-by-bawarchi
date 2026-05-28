const menuCategories = [
  {
    title: "Mocktails",
    items: [
      ["The Big Jar Cooler", "370"],
      ["Boba Tea", "195"],
      ["Kiwi Blaster", "195"],
      ["Blueberry Shake", "215"],
      ["Classic Fruit Punch", "215"],
      ["Fresh Lime Mojito", "140"],
    ],
  },
  {
    title: "Nibbles",
    items: [
      ["Mini Korean Burger Shots", "385"],
      ["Lebanese Falafel Shawarma Pockets", "280 / 400"],
      ["Mexican Tostadas", "385"],
      ["Sour Cream Avocado with Parmesan", "415"],
      ["Kurkure Momos", "280 / 400"],
    ],
  },
  {
    title: "La Mexicana",
    items: [
      ["Taco Mexico", "240 / 360"],
      ["Big Thick Mexican Burrito Wrap", "230"],
      ["Bruschetta", "320"],
      ["Spicy Cheesy Quesadilla", "275"],
      ["Pesto Paneer Quesadilla", "315"],
    ],
  },
  {
    title: "Signature Plates",
    items: [
      ["Korean Miso Ramen", "580"],
      ["Thai Ramen", "580"],
      ["Choice of Sauce: Pepper Garlic / Hot Basil", "675"],
      ["Cottage Cheese Grill", "495"],
      ["Cheese Fondue", "410"],
    ],
  },
  {
    title: "Pizza",
    items: [
      ["Margherita", "245 / 380"],
      ["Korean Twist", "345 / 495"],
      ["Spicy Paneer Peri-Peri", "335 / 505"],
      ["Punjabi Paneer Tikka", "335 / 505"],
      ["Burrata Bocconcini Fired Pizza", "405 / 605"],
    ],
  },
  {
    title: "Flavours of India",
    items: [
      ["Paneer Lababdar", "410"],
      ["Paneer Butter Masala", "405"],
      ["Paneer Tikka Masala", "405"],
      ["Dal Makhani", "270"],
      ["Veg Dum Biryani", "360"],
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="menu-section">
      <div className="menu-heading">
        <p className="section-label">Our Signature Menu</p>
        <h2>Curated Flavours of Modern Culture</h2>
        <p>
          A premium vegetarian dining experience featuring global favourites,
          Indian classics, café signatures, beverages, and indulgent desserts.
        </p>
      </div>

      <div className="menu-grid">
        {menuCategories.map((category) => (
          <div className="menu-card" key={category.title}>
            <h3>{category.title}</h3>

            <div className="menu-items">
              {category.items.map(([name, price]) => (
                <div className="menu-item" key={name}>
                  <span>{name}</span>
                  <strong>₹{price}</strong>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="menu-note">5% GST as applicable</p>
    </section>
  );
}
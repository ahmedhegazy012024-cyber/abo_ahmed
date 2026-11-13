const products = [
  { name: "كيلو الفراخ", description: "اختار الحجم والتقطيع اللي يناسبك", icon: "🐔" },
  { name: "كيلو بانيه", description: "صدور مخلية وطازة", icon: "🍗" },
  { name: "كيلو وراك", description: "طازة ومتقطعة على طلبك", icon: "🍖" },
  { name: "كيلو شيش طاووق", description: "متبل وجاهز على الشوي", icon: "🔥" },
  { name: "كيلو كبد وقوانص", description: "طازة ومتجهزة", icon: "🥘" },
];

const menu = document.querySelector("#menu-items");
const whatsappNumber = "201207454822";

products.forEach((product) => {
  const item = document.createElement("a");
  const message = `السلام عليكم، بكام ${product.name} النهارده؟`;
  item.className = "menu-item";
  item.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  item.target = "_blank";
  item.rel = "noopener noreferrer";
  item.setAttribute("aria-label", `اسأل عن سعر ${product.name} على واتساب`);

  const details = document.createElement("span");
  details.className = "menu-item-main";

  const icon = document.createElement("span");
  icon.className = "menu-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = product.icon;

  const text = document.createElement("span");
  const name = document.createElement("strong");
  name.textContent = product.name;
  const description = document.createElement("small");
  description.textContent = product.description;
  text.append(name, description);
  details.append(icon, text);

  const price = document.createElement("span");
  price.className = "menu-price";
  price.append("سعر اليوم", document.createElement("span"));
  price.lastElementChild.textContent = "↗";

  item.append(details, price);
  menu.append(item);
});
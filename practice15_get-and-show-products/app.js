window.addEventListener("load", async () => {
  const mainUrl = "https://fakestoreapi.com/";
  const container = document.querySelector(".container");

  const res = await fetch(mainUrl + "products?limit=5");
  const data = await res.json();
  console.log(data);
  data.forEach((item) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <div id="product" class="p-2 shadow-2xl bg-white rounded-md text-center">
            <!-- title -->
             <h3>
                ${item.title.slice(0,20)}
             </h3>
             <!-- price -->
              <p>
                ${item.price}$
              </p>
        </div>
        `
    );
  });
});

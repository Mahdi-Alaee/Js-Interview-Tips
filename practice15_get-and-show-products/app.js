window.addEventListener("load", async () => {
  const mainUrl = "https://fakestoreapi.com/";

  const res = await fetch(mainUrl + "products");
  const data = await res.json();
});

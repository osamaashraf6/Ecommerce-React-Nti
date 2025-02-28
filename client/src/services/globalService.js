const globalService = {
  // baseUrl
  baseUrl: "http://localhost:5000",
  //   Routes
  routes: {
    addresses: "/api/v1/addresses",
    auth: "/api/v1/auth",
    carts: "/api/v1/carts",
    categories: "/api/v1/categories",
    subcategories: "/api/v1/subcategories",
    orders: "/api/v1/orders",
    products: "/api/v1/products",
    reviews: "/api/v1/reviews",
    users: "/api/v1/users",
    wishlists: "/api/v1/favourites",
  },
  //   domainImgs
  userImg: "http://localhost:5000/users/",
  productImg: "http://localhost:5000/products/",
  categoryImg: "http://localhost:5000/categories/",
  subcategoryImg: "http://localhost:5000/subcategories/",
  //   ApiKey
  APiKey: "secret123",
};

export default globalService;

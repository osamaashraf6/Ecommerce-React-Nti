const globalService = {
  // baseUrl
  baseUrl: "https://ecommerce-react-nti-production.up.railway.app",
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
  userImg: "https://ecommerce-react-nti-production.up.railway.app/users/",
  productImg: "https://ecommerce-react-nti-production.up.railway.app/products/",
  categoryImg: "https://ecommerce-react-nti-production.up.railway.app/categories/",
  subcategoryImg: "https://ecommerce-react-nti-production.up.railway.app/subcategories/",
  //   ApiKey
  APiKey: "secret123",
};

export default globalService;

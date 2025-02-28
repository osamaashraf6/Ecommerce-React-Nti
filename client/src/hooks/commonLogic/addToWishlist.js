import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useWishlist from "../wishlistHook";
import useCart from "../cartHook";
const useAddToWishlist = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { createWishlistMutation } = useWishlist();
  const { addProductToCartMutation } = useCart();
  const { isPending: createWishLoading } = createWishlistMutation;
  const { isPending: createCartLoading } = addProductToCartMutation;

  const handleCreateWishlist = (productId) => {
    if (!currentUser) {
      toast.error("Sign in first");
    } else {
      createWishlistMutation.mutate(productId, {
        onSuccess: () => {
          toast.success("Product Has Been Added To Wishlist Successfully ");
        },
        onError: (res) => {
          toast.error(res?.response?.data?.message);
        },
      });
    }
  };

  //

  const handleAddToCart = (productId) => {
    if (!currentUser) {
      toast.error("Sign in first");
    } else {
      addProductToCartMutation.mutate(productId, {
        onSuccess: () => {
          toast.success("Product Has Been Added To Cart Successfully ");
        },
        onError: (res) => {
          toast.error(res?.response?.data?.message);
        },
      });
    }
  };

  return {
    handleCreateWishlist,
    handleAddToCart,
    createWishLoading,
    createCartLoading,
  };
};
export default useAddToWishlist;

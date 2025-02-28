import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import useWishlist from "../wishlistHook";
const useWishlistLogic = () => {
  const [productIdLoad, setProductIdLoad] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const { useGetAllWishlistQuery, deleteWishlistMutation } = useWishlist();
  const { isPending, data: wishlist } = useGetAllWishlistQuery();
  const { isPending: deleteWishLoading } = deleteWishlistMutation;

  const handleDeleteWishlist = (productId) => {
    if (!currentUser) {
      toast.error("Sign in first");
    } else {
      setProductIdLoad(productId);
      deleteWishlistMutation.mutate(productId, {
        onSuccess: () => {
          toast.success("Product Has Been Deleted From Wishlist Successfully ");
        },
        onError: () => {},
      });
    }
  };

  return {
    isPending,
    wishlist,
    handleDeleteWishlist,
    productIdLoad,
    deleteWishLoading,
    currentUser,
  };
};
export default useWishlistLogic;

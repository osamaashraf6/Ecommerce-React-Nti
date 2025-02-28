import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useCart from "../cartHook";
import { useForm } from "react-hook-form";
const useCartLogic = () => {
  const [quantity, setQuantity] = useState(1);
  const [productCartId, setProductCartId] = useState(null);
  const [quantityCartId, setQuantityCartId] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    useGetUserCartQuery,
    removeProductFromCartMutation,
    clearUserCartMutation,
    applyCouponCartMutation,
    updateQuantityMutation,
  } = useCart();
  const { isPending: couponLoading } = applyCouponCartMutation;
  const { isPending: updateQuanLoading } = updateQuantityMutation;
  const { isPending, data: cart } = useGetUserCartQuery();
  const { isPending: clearCartLoading } = clearUserCartMutation;
  const { isPending: removeProCartLoading } = removeProductFromCartMutation;
  const handleClearCart = () => {
    if (!currentUser) {
      toast.error("Sign in first");
    } else {
      clearUserCartMutation.mutate(undefined, {
        onSuccess: () => {
          toast.success("Cart Has Been Cleared Successfully ");
        },
        onError: () => {
          toast.error("Something went wrong! Please try again.");
        },
      });
    }
  };
  const handleRemoveProductFromCart = (id) => {
    if (!currentUser) {
      toast.error("Sign in first");
    } else {
      setProductCartId(id);
      removeProductFromCartMutation.mutate(id, {
        onSuccess: () => {
          toast.success("Product Has Been Removed Successfully ");
        },
        onError: () => {
          toast.error("Something went wrong! Please try again.");
        },
      });
    }
  };
  const handleApplyCoupon = (data) => {
    if (!currentUser) {
      toast.error("Sign in first");
    } else {
      applyCouponCartMutation.mutate(data, {
        onSuccess: () => {
          toast.success("Coupon Applied Successfully");
        },
        onError: (res) => {
          toast.error(res?.response?.data?.message);
        },
      });
      reset();
    }
  };
  const handleUpdateQuantity = (itemId, formData, prevQuan) => {
    if (!currentUser) {
      toast.error("Sign in first");
    } else {
      if (prevQuan !== formData) {
        setQuantityCartId(itemId);
        updateQuantityMutation.mutate(
          { itemId, formData },
          {
            onSuccess: () => {
              toast.success("Quantity Updated Successfully");
            },
            onError: (res) => {
              toast.error("something went wrong");
            },
          }
        );
      }
    }
  };
  return {
    productCartId,
    handleRemoveProductFromCart,
    handleClearCart,
    cart,
    isPending,
    clearCartLoading,
    removeProCartLoading,
    register,
    reset,
    handleSubmit,
    errors,
    handleApplyCoupon,
    couponLoading,
    updateQuanLoading,
    quantity,
    setQuantity,
    handleUpdateQuantity,
    quantityCartId,
  };
};
export default useCartLogic;

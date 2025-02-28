import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import useAddress from "../addressHook";
import useOrder from "../orderHook";
import useCartLogic from "./cartLogic";
const useOrderLogic = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedAddressError, setSelectedAddressError] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const { cart } = useCartLogic();
  const { useGetAllOrderQuery, createOneOrderMutation } = useOrder();
  const { getAllAddressOfUserQuery } = useAddress();
  const { isPending, data: order } = useGetAllOrderQuery();
  const { isPending: createOrdLoading } = createOneOrderMutation;
  const { isPending: addressLoading, data: address } = getAllAddressOfUserQuery;

  const handleSelectChange = (e) => {
    const selectedObj = JSON.parse(e.target.value); // Convert back to object
    setSelectedAddress(selectedObj);
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();

    if (cart?.length < 1) {
      toast.error("No items in cart");
      return;
    }

    if (!currentUser) {
      toast.error("Sign in first");
      return;
    }

    if (!selectedAddress) {
      setSelectedAddressError("Please select an address first");
      return;
    }

    const formaddress = {
      address: selectedAddress,
    };
    createOneOrderMutation.mutate(formaddress, {
      onSuccess: () => {
        toast.success("Order Created Successfully");
      },
      onError: (res) => {
        toast.error(res?.response?.data?.message);
      },
    });
  };
  return {
    createOrdLoading,
    handleCreateOrder,
    handleSelectChange,
    selectedAddress,
    selectedAddressError,
    addressLoading,
    address,
    isPending,
    order,
  };
};
export default useOrderLogic;

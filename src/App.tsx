import React, { useEffect } from "react";
import Header from "./components/Header";
import SortItems from "./components/SortItems";
import ListItems from "./components/ListItems";
import CartItemsList from "./components/CartItemsList";
import Delivery from "./components/Delivery";
import ProceedToPayment from "./components/ProceedToPayment";
import "../public/styles.css";
import SideBar from "./components/SideBar";
import * as Products from "../public/productData/product.json";
import { useDispatch, useSelector } from "react-redux";
import { setProductData } from "./redux/reducer/productReducer";
import { Link, Route, Routes } from "react-router-dom";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
let products = JSON.parse(JSON.stringify(Products));


const App: React.FC = () => {
    const dispatch = useDispatch();
    const cartList = useSelector((state: any) => state.cart.cartList);
    const isFilter = useSelector((state: any) => state.products.isFilter)
    const isLogin = useSelector((state: any) => state.user.isLogin);

    const arr: {}[] = [];

    Object.keys(products).forEach(product => {
        arr.push(products[product]);
    })
    arr.pop();
    arr.pop();

    useEffect(() => {
        dispatch(setProductData(arr));
    }, []);


    return <>

        <Routes >
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/" element={isLogin ? <>
                <Header />
                {isFilter && <SortItems />}
                <div className="mt-5 container-fluid mainContent" >
                    <div className="row">
                        <div className="col-2">
                            <SideBar />
                        </div>

                        <div className="col-10">
                            <ListItems />
                        </div>
                    </div>

                </div>
            </> : <> <Header /><div style={{ padding: "20px", marginTop: "15%" }} className="text-center"> <Link to={"/login"} style={{ marginRight: "40px" }}><button className="btn btn-primary">Login</button></Link> <Link to={"/register"}><button className="btn btn-primary">Register</button></Link></div></>} />
            <Route path="/cart" element={
                <>
                    <Header />
                    <br />
                    <div style={{ display: "flex" }} className="mainContent">
                        <div className="w-50">
                            <CartItemsList />
                        </div>

                    </div>
                </>} />
            <Route path="/payment" element={<>
                <Header />
                <ProceedToPayment />
            </>} />
        </Routes >


    </>
}

export default App;
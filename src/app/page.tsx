"use client";
import Image from "next/image";
/*import Navbar from './components/layout/header'; // Make sure the path to Navbar is correct*/
import Routers from "./routers";
import Dashboard from "./components/homeScreen/page";

export default function Home() {
  /*return <h1>Hello, Home page!</h1>*/
  return (
    <>
      {/* <TeamClock /> */}
      {/* <TeamObject /> */}
      {/* <GameReviews /> */}
      {/* <ShoppingList /> */}
      {/* <Expenses />*/}
      {/*<Table />*/}
      {/* <CompositeTable /> */}
      <Routers />
    </>
  );

}
import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  BsBagDash,
  BsWalletFill,
} from "react-icons/bs";

import {
  AiFillDollarCircle,
  AiFillDatabase,
  AiOutlineDatabase,
  AiOutlineDollarCircle,
} from "react-icons/ai";

// import App from "./Pie";
import MyResponsivePie from "./Pie";
import BarChat from "./Bar";

const data = [
  {
    id: "New",
    label: "New",
    value: 506,
    color: "hsla(220, 90%, 60%)",
  },
  {
    id: "Old",
    label: "Old",
    value: 271,
    color: "hsla(240, 60%, 40%)",
  },
];

function Home() {
  return (
    <main className="main-container">
      {/* <div className="main-title">
        <h3>DASHBOARD</h3>
      </div> */}
      {/* AiFillDatabase Orders */}
      {/* BsWalletFill */}
      {/* BsBagDash */}

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <div className="icon-container">
              <AiOutlineDollarCircle className="large-icon card_icon icon_color1" />
            </div>
            <div>
              <h3 className="earning-text">Earning</h3>
              <h1 className="earning1">$198k</h1>
              <p className="earning1-1">↑ 37.8% this month</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="icon-container1 ">
              <AiFillDatabase className="large-icon card_icon icon_color2" />
            </div>
            <div className="iconpro">
              <h3 className="earning-text">Orders</h3>
              <h1 className="earning1">$2.4k</h1>
              <p className="earning1-1pro">↓ 2% this month</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="icon-container2 ">
              <BsWalletFill className="large-icon card_icon icon_color3" />
            </div>
            <div>
              <h3 className="earning-text">Balance</h3>
              <h1 className="earning1">$2.4k</h1>
              <p className="earning1-1">↓ 2% this month</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="icon-container3">
              <BsBagDash className="large-icon card_icon icon_color4" />
            </div>
            <div>
              <h3 className="earning-text">Total Sales</h3>
              <h1 className="earning1">$89k</h1>
              <p className="earning1-1">↑ 11% this month</p>
            </div>
          </div>
        </div>
      </div>

      <div className="charts">
        <div className="card-1">
          <BarChat />
        </div>
        {/* Pie chat */}
        <div className="card-2">
          <h3 className="month-1">Customers</h3>
          <p className="month-2"> Customers that buy products</p>
          <div style={{ height: "400px", width: "400px" }}>
            <MyResponsivePie data={data} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

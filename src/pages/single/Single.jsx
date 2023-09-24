import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                className="itemImage"
                src={window.location.origin + "/shash.jpeg"}
                alt="user"
              />
              <div className="details">
                <h2 className="itemTitle">Shashwath</h2>
                <div className="itemDetail">
                  <span className="itemKey">Email:</span>
                  <span className="itemVlue">shashwath@gmail.com</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Phone:</span>
                  <span className="itemVlue">9483****44</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Address:</span>
                  <span className="itemVlue">
                    VBC Extension, Bangalore-560043
                  </span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Country:</span>
                  <span className="itemVlue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title="User Spending(Last 7 months)"
              color={"rgb(26, 219, 139)"}
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;

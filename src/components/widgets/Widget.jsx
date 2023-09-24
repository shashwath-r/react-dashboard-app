import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  // temp
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all Users",
        icon: <PersonOutlineOutlinedIcon className="icon" style={{color:"red", backgroundColor:"rgba(102, 13, 13, 0.295)"}}/>,
      };

      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlinedIcon className="icon" style={{color:"green", backgroundColor:"rgba(9, 71, 27, 0.295)"}}/>,
      };

      break;

    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon className="icon" style={{color:"blue", backgroundColor:"rgba(44, 13, 102, 0.295)"}}/>,
      };

      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "View balance",
        icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{color:"brown", backgroundColor:"rgba(102, 60, 13, 0.295)"}}/>,
      };

      break;

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        <div>
          {data.icon}
        </div>
      </div>
    </div>
  );
};

export default Widget;

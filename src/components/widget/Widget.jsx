import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        bgcolor: "rgb(255, 0 ,0 ,0.33)",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "white",
              marginLeft: "13px",
              backgroundColor:"rgb(255, 0 ,0 ,0.33)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        bgcolor:"rgb(218 157 32 / 41%)",
        icon: (
          <LocalMallIcon
            className="icon"
            style={{
              color: "white",
              marginLeft: "5px",
              backgroundColor:"rgb(218 157 32 / 41%)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        bgcolor:"rgb(15 128 0 / 27%)",
        icon: (
          <CurrencyRupeeIcon
            className="icon"
            style={{
              color: "white",
              marginLeft: "-4px",
              backgroundColor:"rgb(15 128 0 / 27%)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        bgcolor:"rgb(128 0 128 / 28%)",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              color: "white",
              marginLeft: "-1px",
              backgroundColor:"rgb(128 0 128 / 28%)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget" style={{backgroundColor:data.bgcolor}}> 
      <div className="left">
        <span className="title">{data.title}</span>
        {data.icon}
      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
        </div>
        <span className="counter">
          {data.isMoney && "₹"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
    </div>
  );
};

export default Widget;

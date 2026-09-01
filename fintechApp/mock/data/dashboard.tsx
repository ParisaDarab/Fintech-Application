import {
  faGear,
  faLayerGroup,
  faMoneyBillTransfer,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const sidebarItem = [
  {
    id: "transitions",
    title: "Transactions",
    url: "/transactions",
    icon: <FontAwesomeIcon icon={faMoneyBillTransfer} />,
  },
  {
    id: "Users",
    title: "Users",
    url: "/users",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    id: "AuditLogs",
    title: "Audit logs",
    url: "/AuditLogs",
    icon: <FontAwesomeIcon icon={faLayerGroup} />,
  },
  {
    id: "Settings",
    title: "Settings",
    url: "/settings",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
];

//faCreditCard

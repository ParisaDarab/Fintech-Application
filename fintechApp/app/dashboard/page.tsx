"use server";
import { CustomTable } from "@/components/Table";
import { mockTransactions } from "@/mock/data/transactions";
import { mockUsers } from "@/mock/data/users";
import { Transaction } from "@/types/Transactions";
import { title } from "process";

const Dashboard = async () => {
  const findUserBYId = (id: string) => {
    return mockUsers.find((user) => user.id === id);
  };
  const column = [
    {
      title: "ID ",
      selector: (item: Transaction) => <span>{item.id}</span>,
    },
    {
      title: "Customer ",
      selector: (item: Transaction) => (
        <span>{findUserBYId(item.customerId)?.name}</span>
      ),
    },
    {
      title: "Amount ",
      selector: (item: Transaction) => <span>{item.amount}</span>,
    },
    {
      title: "Status ",
      selector: (item: Transaction) => <span>{item.status}</span>,
    },
    {
      title: "Risk ",
      selector: (item: Transaction) => <span>{item.riskLevel}</span>,
    },
  ];
  return (
    <div>
      <div className="w=[70%]">
        <CustomTable data={mockTransactions} columns={column} />
      </div>
    </div>
  );
};
export default Dashboard;

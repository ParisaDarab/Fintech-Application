"use server";
import { BalanceCard } from "@/components/BalanceCard";
import { RiskBadge, StatusBadge } from "@/components/Components";
import { CustomTable } from "@/components/Table";
import { UserInfo } from "@/components/userInfo";
import { mockTransactions } from "@/mock/data/transactions";
import { mockUsers } from "@/mock/data/users";
import { Transaction } from "@/types/Transactions";

const Dashboard = async () => {
  const findUserBYId = (id: string) => {
    return mockUsers.find((user) => user.id === id);
  };
  const column = [
    {
      title: " ",
      selector: (item: Transaction, index: number) => <span>{index + 1}</span>,
    },
    {
      title: "Customer",
      selector: (item: Transaction) => (
        <span>{findUserBYId(item.customerId)?.name}</span>
      ),
    },
    {
      title: "Amount",
      selector: (item: Transaction) => <span>{item.amount}</span>,
    },
    {
      title: "Currency",
      selector: (item: Transaction) => <span>{item.currency}</span>,
    },
    {
      title: "Status",
      selector: (item: Transaction) => (
        <StatusBadge $status={item.status}>{item.status}</StatusBadge>
      ),
    },
    {
      title: "Risk ",
      selector: (item: Transaction) => (
        <RiskBadge $status={item.riskLevel}>{item.riskLevel}</RiskBadge>
      ),
    },
  ];
  return (
    <div>
      <div>
        <UserInfo />
        <div className="flex justify-center">
          <BalanceCard />
        </div>
        <h3 className="my-5">Recent transactions </h3>
        <CustomTable
          data={mockTransactions.reverse().slice(0, 10)}
          columns={column}
        />
      </div>
    </div>
  );
};
export default Dashboard;

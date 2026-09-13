import styled from "styled-components";

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgb(33, 65, 154);
  }
`;

export const SidebarItem = styled.div<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  padding: 0.625rem 1.5rem;

  color: ${({ selected }) => (selected ? "#ffffff" : "#94a3b8")};

  background: ${({ selected }) =>
    selected ? "rgba(34, 211, 238, 0.10)" : "transparent"};

  border-right: ${({ selected }) =>
    selected ? "2px solid #22d3ee" : "2px solid transparent"};

  transition:
    background-color 200ms ease,
    color 200ms ease,
    border-color 200ms ease;

  .sidebar-icon {
    display: inline-flex;
    transition: transform 200ms ease;
  }

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.05);

    .sidebar-icon {
      transform: translateX(2px) scale(1.05);
    }
  }
`;
export const Container = styled.div<{ $direction: "row" | "column" }>`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  ${(props) =>
    props.$direction == "row"
      ? ` flex-direction:"row"`
      : `flex-direction:"column"`};
`;

export const StatusBadge = styled.span<{ $status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;

  ${(props) =>
    props.$status === "completed"
      ? `background-color: #d1fae5; color: #15803d;`
      : props.$status === "pending"
        ? `background-color: #fef3c7; color: #92400e;`
        : `background-color: #fee2e2; color: #b91c1c;`}
`;

export const RiskBadge = styled.span<{ $status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;

  ${(props) =>
    props.$status === "low"
      ? `color: #15803d;`
      : props.$status === "medium"
        ? ` color: #f48405;`
        : `color: #b91c1c;`}
`;

export const ErrorText = styled.p`
  margin-top: 6px;
  color: #f87171;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
`;

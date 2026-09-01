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

export const SidebarItem = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  display: flex; /* Ensures alignment works correctly with icons */
  align-items: center;
  gap: 0.5rem;

  /* 1. Add transition for background, text color, AND the icon transform */
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  /* 2. Target the icon container and add a scale transition */
  span {
    display: inline-flex;
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: #e0f2fe;
    color: #3b82f6;
    border-radius: 0 0.375rem 0.375rem 0;

    /* 3. Scale up the icon container when the parent item is hovered */
    span {
      transform: scale(1.15); /* Adjust this value to make it bigger/smaller */
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

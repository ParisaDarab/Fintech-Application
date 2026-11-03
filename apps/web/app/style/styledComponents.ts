import styled from "styled-components";

export const CenteralizerInColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
export const CenteralizerInRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<{ $variant?: "primary" | "danger" }>`
  background: ${({ $variant }) =>
    $variant === "danger" ? "#dc2626" : "#2e5090"};
  padding: 0.375rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 0.625rem;
  color: white;
`;

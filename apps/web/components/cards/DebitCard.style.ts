import styled from "styled-components";

type CardStatusType = "ACTIVE" | "FROZEN" | "BLOCKED";

export const CardContainer = styled.div<{ $status: CardStatusType }>`
  position: relative;
  width: 360px;
  min-height: 215px;
  padding: 24px;
  border-radius: 18px;
  overflow: hidden;
  color: #ffffff;
  background: ${({ $status }) =>
    $status === "FROZEN"
      ? "linear-gradient(135deg, #64748b, #334155)"
      : $status === "BLOCKED"
        ? "linear-gradient(135deg, #7f1d1d, #450a0a)"
        : "linear-gradient(135deg, #172b4d, #243f67)"};
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);

  &::before {
    content: "";
    position: absolute;
    width: 220px;
    height: 220px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    right: -70px;
    top: -100px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    right: -40px;
    bottom: -120px;
  }

  @media (max-width: 420px) {
    width: 100%;
    padding: 20px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardBrand = styled.h2`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -1px;
`;

export const CardStatus = styled.span<{ $status: CardStatusType }>`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 5px 9px;
  border-radius: 20px;
  background: ${({ $status }) =>
    $status === "ACTIVE"
      ? "rgba(34, 197, 94, 0.2)"
      : $status === "FROZEN"
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(239, 68, 68, 0.2)"};
  color: #ffffff;
`;

export const CardChip = styled.div`
  position: relative;
  width: 42px;
  height: 32px;
  margin-top: 22px;
  border-radius: 6px;
  background: linear-gradient(135deg, #e8d7a2, #a88b4e);
  border: 1px solid rgba(255, 255, 255, 0.35);

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: rgba(80, 65, 35, 0.35);
  }

  &::before {
    width: 100%;
    height: 1px;
    top: 50%;
  }

  &::after {
    height: 100%;
    width: 1px;
    left: 50%;
  }

  .chip-lines {
    position: absolute;
    width: 17px;
    height: 100%;
    left: 12px;
    border-left: 1px solid rgba(80, 65, 35, 0.35);
    border-right: 1px solid rgba(80, 65, 35, 0.35);
  }
`;

export const ContactlessIcon = styled.div`
  position: absolute;
  top: 90px;
  right: 25px;
  color: rgba(255, 255, 255, 0.8);
`;

export const CardNumber = styled.div`
  margin-top: 20px;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: 2px;
  white-space: nowrap;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  margin-top: 20px;

  .network {
    font-size: 17px;
    font-weight: 800;
    font-style: italic;
    text-transform: uppercase;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CardLabel = styled.span`
  font-size: 9px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.65);
`;

export const CardValue = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

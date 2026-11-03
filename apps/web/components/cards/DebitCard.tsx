// import { CardList } from "@/types/Cards";
// import {
//   CardContainer,
//   CardHeader,
//   CardBrand,
//   CardChip,
//   CardNumber,
//   CardFooter,
//   CardInfo,
//   CardLabel,
//   CardValue,
//   CardStatus,
//   ContactlessIcon,
// } from "./DebitCard.style";

// type DebitCardProps = {
//   card: CardList[number];
// };

// const DebitCard = ({ card }: DebitCardProps) => {
//   const expiry = new Date(card.expiryDate).toLocaleDateString("en-GB", {
//     month: "2-digit",
//     year: "2-digit",
//     timeZone: "UTC",
//   });

//   return (
//     <CardContainer $status={card.status}>
//       <CardHeader>
//         <CardBrand>fintech.</CardBrand>

//         <CardStatus $status={card.status}>{card.status}</CardStatus>
//       </CardHeader>

//       <CardChip>
//         <div className="chip-lines" />
//       </CardChip>

//       <ContactlessIcon>
//         <svg
//           width="25"
//           height="25"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.7"
//           strokeLinecap="round"
//         >
//           <path d="M8 5a10 10 0 0 1 0 14" />
//           <path d="M12 8a6 6 0 0 1 0 8" />
//           <path d="M16 10a3 3 0 0 1 0 4" />
//         </svg>
//       </ContactlessIcon>

//       <CardNumber>{card.cardNumber}</CardNumber>

//       <CardFooter>
//         <CardInfo>
//           <CardLabel>CARD HOLDER</CardLabel>
//           <CardValue>{card.nameOnCard}</CardValue>
//         </CardInfo>

//         <CardInfo>
//           <CardLabel>VALID THRU</CardLabel>
//           <CardValue>{expiry}</CardValue>
//         </CardInfo>

//         <CardValue className="network">{card.cardNetwork}</CardValue>
//       </CardFooter>
//     </CardContainer>
//   );
// };

// export default DebitCard;

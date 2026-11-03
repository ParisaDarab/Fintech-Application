import serverApiClient from "@/api/serverApiClient";
// import { CardSlider } from "@/components/CardSlider";
import { responseType } from "@/types/api";

const Cards = async () => {
  try {
    const response = await serverApiClient<responseType>({
      method: "POST",
      endpoint: "/cards/cardList",
    });

    console.log("Cards response:", response);
  } catch (error) {
    console.error("Cards API error:", error);
  }

  return (
    <div>
      {/* <CardSlider cardList={[]} /> */}
    </div>
  );
};

export default Cards;

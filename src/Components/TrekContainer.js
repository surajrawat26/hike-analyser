import { Container } from "@mui/material";
import ContentContainer from "./cards/ContentContainer";
import TrekName from "./cards/TrekName";

const TrekContainer = () => {
  const trekData = [
    {
      id: Math.random(),
      title: "How to reach Base Camp?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris est viverra elementum gravida lacus neque. Sodales consequat morbi velit tristique consequat amet faucibus. Porttitor quis semper nunc, mattis at velit. Pretium cursus ut cras nisl neque, enim, bibendum.",
    },
    {
      id: Math.random(),
      title: "Weather Data",
      image:
        "https://images.unsplash.com/photo-1630260667842-830a17d12ec9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: Math.random(),
      title: "Altitude Chart",
      image: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
    },
    {
      id: Math.random(),
      title: "Gpx data and files",
    },
    {
      id: Math.random(),
      title: "Maps",
    },
    {
      id: Math.random(),
      title: "Current event",
    },
  ];

  return (
    <div>
      <Container>
        <TrekName />
        <ContentContainer trekData={trekData} />
      </Container>
    </div>
  );
};

export default TrekContainer;

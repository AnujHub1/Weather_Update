import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InFoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
export default function InFoBox({ info }) {
  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1692012205368-87f22282715e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Hot_url =
    "https://media.istockphoto.com/id/1348065071/photo/modern-high-rise-buildings-in-dense-cities-photographed-at-dusk-in-chengdu.jpg?s=2048x2048&w=is&k=20&c=9mURcvJcNVAyaXaTBIBXV0XxQck3cDgcMhIS25Gfqfo=";
  let cold_url =
    "https://media.istockphoto.com/id/1318300550/photo/latest-views-of-snowfall-in-shimla.jpg?s=2048x2048&w=is&k=20&c=nslYJdGUEgqcpkHkKgRzfF90_WFsRuHyvvA5waw8hug=";
  let rain_url =
    "https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=2048x2048&w=is&k=20&c=5elyCWs3aC4y7DDlZu1HLkksbQbDAkCINao9imMHOdw=";

  return (
    <div className="InfoBox">
      <div className="card-container">
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 82
                ? rain_url
                : info.temp > 22
                ? Hot_url
                : cold_url
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 20 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temprature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>MAx Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <b>{info.weather} </b>and feels
                like <b>{info.feelsLike}&deg;C</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

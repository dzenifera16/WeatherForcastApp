import "./styles.css";
import { Card } from "antd";
import weatherHelper from "./WeatherHelper";
import {
  CloudDownloadOutlined,
  CompassOutlined,
  SwapOutlined,
  CompressOutlined
} from "@ant-design/icons";

export default function CompToday(props) {
  const { data } = props;

  let iconSrc = "https://openweathermap.org/img/wn/" + data.icon + "@2x.png";

  return (
    <>
      <Card>
        <div className="today-layout-title">
          {data.weekday} {data.time}
        </div>
        <div className="today-layout-content">
          <div className="today-layout-content-part1">
            <div className="today-layout-content-part1-city">
              {data.city}({data.country}), {data.iconTooltip}
            </div>
            <div className="today-layout-content-part1-img">
              <img
                src={weatherHelper.getIconUrl(data.icon, 4)}
                alt="Nav bildes"
                title={data.iconTooltip}
              />
              <div className="today-layout-content-part1-temp">
                {data.temperature}°C
              </div>
            </div>
          </div>
          <div className="today-layout-content-part2">
            <div className="today-layout-content-part2-text">
              Pēc sajūtām - {data.feels_like_temparature}
              °C
            </div>
            <div className="today-layout-content-right">
              <div className="today-layout-content-right-icon">
                <CloudDownloadOutlined />
              </div>
              <div className="today-layout-content-right-text">Nokrišņi</div>
              <div className="today-layout-content-right-result">
                {data.humidity} %
              </div>

              <div className="today-layout-content-right-icon">
                <CompassOutlined />
              </div>
              <div className="today-layout-content-right-text">
                Vēja virziens
              </div>
              <div className="today-layout-content-right-result">
                {data.windDirection}
              </div>

              <div className="today-layout-content-right-icon">
                <SwapOutlined />
              </div>
              <div className="today-layout-content-right-text">Vēja Atrums</div>
              <div className="today-layout-content-right-result">
                {data.windSpeed} m/s
              </div>

              <div className="today-layout-content-right-icon">
                <CompressOutlined />
              </div>
              <div className="today-layout-content-right-text">
                Atmosfēras spiediens
              </div>
              <div className="today-layout-content-right-result">
                {data.pressure} hPa
              </div>
            </div>
          </div>
          <div className="today-layout-content-hours">
            {data.hours &&
              data.hours.length > 0 &&
              data.hours.map((item, index) => {
                if (index > 5) return false;
                return (
                  <div className="today-layout-content-hours-card">
                    <Card
                      key={index}
                      borderd={false}
                      size="small"
                      className="today-layout-content-hours-card"
                    >
                      <div>{item.name}</div>

                      <div className="today-layout-content-hours-img">
                        <img
                          src={weatherHelper.getIconUrl(item.icon, 2)}
                          alt="Nav bildes"
                          title={item.iconTooltip}
                          width="50px"
                          height="50px"
                        />

                        <div className="today-layout-content-hours-temp">
                          {item.temperature}°C
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </Card>
    </>
  );
}

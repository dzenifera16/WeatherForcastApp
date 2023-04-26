import "./styles.css";
import { Card } from "antd";
import weatherHelper from "./WeatherHelper";
export default function CompWeek(props) {
  const { data } = props;

  return (
    <>
      <div className="today-layout-content-weekday-layout">
        <Card>
          <div className="today-layout-content-weekday">
            {data.days &&
              data.days.length > 0 &&
              data.days.map((item, index) => {
                return (
                  <div className="today-layout-content-weekday">
                    <Card
                      title={
                        <span>
                          <div>{item.name}</div>
                          <div>{item.date}</div>
                        </span>
                      }
                      bordered={true}
                      size="small"
                      className="today-layout-content-weekday-card"
                    >
                      <div>Diena</div>
                      <div className="today-layout-content-hours-img">
                        <img
                          src={weatherHelper.getIconUrl(item.max_icon, 2)}
                          alt="Nav bildes"
                          title={item.max_iconTooltip}
                          width="50px"
                          height="50px"
                        />
                        <div className="today-layout-content-hours-temp">
                          {" "}
                          {item.max_temp}°C{" "}
                        </div>
                      </div>
                      <div>Nakts</div>
                      <div className="today-layout-content-hours-img">
                        <img
                          src={weatherHelper.getIconUrl(item.min_icon, 2)}
                          alt="Nav bildes"
                          title={item.min_iconTooltip}
                          width="50px"
                          height="50px"
                        />
                        <div className="today-layout-content-hours-temp">
                          {item.min_temp}°C
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
          </div>
        </Card>
      </div>
    </>
  );
}

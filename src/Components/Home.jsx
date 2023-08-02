import React, { useEffect, useState } from "react";

const Home = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(
    new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds()
  );
  const [city, setCity] = useState("");
  const [image, setImage] = useState(null);
  const [icon, setIcon] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  function handle() {
    setLocation(city);
  }

  useEffect(() => {
    if (location !== null) {
      try {
        fetch(
          `https://api.weatherapi.com/v1/current.json?key=4c421c6399e2449c8e9165923232807&q=${location}&aqi=no`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.error === undefined) {
              setWeather(data);
              setIcon(data.current.condition.icon);
              switch (data.current.condition.text) {
                case "Partly cloudy":
                  setImage(
                    "https://thumbs.dreamstime.com/z/partly-sunny-weather-15076999.jpg"
                  );
                  break;
                case "Cloudy":
                  setImage(
                    "https://wallpapers.com/images/hd/dark-cloudy-weather-ssh2sqmoeksppbwn.jpg"
                  );
                  break;
                case "Sunny":
                  setImage(
                    " https://media.istockphoto.com/id/915614956/photo/spring-daisy-flowers.jpg?s=612x612&w=0&k=20&c=0Q_UPeUOTCRdvwUzI3EFx24EoZgYR5rVFBR_iOF9uPc="
                  );
                  break;
                case "Rainy":
                  setImage(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaxbWuTttNzaEhzMN8-epsQHP-D8M8h7fNg&usqp=CAU"
                  );
                  break;
                case "Clear":
                  setImage(
                    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw0QDxAPDQ8NDQ0NDQ8PDw8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAPGisdHR0tLS0tLSsrKystLS0tLS0tLS0tLSsrKy0tLS0tLS0rLSstKy0rLS0tLS0tLS0tKy0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADwQAAIBAgMFBgIJAwMFAAAAAAABAgMRBBIhEzFBUWEFUnGBkaEUFSIyM2JyscHh8AaS0UJjgjRTovHy/8QAGQEBAQEBAQEAAAAAAAAAAAAAAQACAwUE/8QAIxEBAQACAgICAgMBAAAAAAAAAAECERITA1ExQTJhFCEigf/aAAwDAQACEQMRAD8A8AiwYsNI955i4sdGYmxCDRvFygXSnzGWvuI7IQcUG4FxiS2iQVglEtxJF2KCKJLRZEWKVYKKJYKKJLsQuxGK2Fh04Xa4btXey6kjEbGJJcYjYxFpjYgtrSCSBuHFXA7HCI2z4F04GmmkjNahVPDuXgSrBRNU6+nI5mJrXYTdNsXtSGXaENaZ283EbFi0HE0wMjKCJGRq/QyWjbNmvlWe9rWzb7dCRdmLQcSR0lckYlRGRZIUC5MopskFlZSy4klJBJBpIvIK2FIdlXVLXrrb/JWQNIkW16lJDJItREKiiw1EKFMkGEQ2xmUuNK5EunTbNUIWDpUx6gZtMKTDuFNGavUtoGtneg4mtwRhnIObFtGpGLkG5C8pBG3CsEgnEpIytrLREXYUsOCAQUGS2clyDiiRQyKAhsCxjQLFALj/AOvEuxaRDa4jYgKIyCFbNUr/AM3BZSoxHRiBJcS4xuOlDgMp0W9BBKiaIRshkaFmE0CZramqhEfQwab328TRPAySurNGblGpGZRJN2Lmmt5lrVCkNulVKxlk7hMiRvTnbsGUpwHWJlJEZSDchBTztiZR8qNgXEEUkXYNxJYgBIJIJItRJHUhgFMYgO0sC0MsVYVaWkGkGohRiTIVEfCBIRNFOBGBpUm3ZJt66L1HKIcYhyiB2qnTuaIwy6hYemViGDRcpX1LiVFBN2EGQlZaskMVJXs9DLKVy07FxHJrrV/o672cxjZO5WU1Jpm5bKyhKIxRDUCUKUAsg6MAlANtRn2ZZoyFhs6cedBMx1cK+B0XIJq6dt4bDiShYGw+ve+qsAommQpDFAKMOYaJBURkYkSHKJICiTKNUS8hAEYBRgMhEZkJAhE1QBhTDS1IjjTGRiDEfGOl2ZMVeyEz1Yc5A3GRbXuQpxbH04DXAV8seUlhziRQFknIEoDlAZGmW0VCjfcGqNt46MbGinWW6SMW1qSMWUljsQw9Oa0aM2IwEk9NxnnPhvjdbjn2IaPh5ciGtsuC2iXfAjiHCxAFSkpqzWpjeHceB0cwE9dBjNc5opIfOFgEjTO1wHwQqKNFMDscYF7MOCGWAlKmHFB2LJJBBKJEyritnUFqFWnwQClZEjENLYFEbGIcIBtCkpoNokUGgJMokUB2UKxbBaphZQ0i1ECXlJkHZQlAtoqF1u0N+Fxbf0Z2sZ1AvZmMpK3jbPh1LU+a9iHLyEOfX+3Xt/TzsIoXUdhjMta/id5HzWo5lKYhsOBrTO1yQGUckRwIUpIfTBjTHQpiBxYaZSRFEDsaZeUuMA8oHYMoSiWGoiNhjEZFBRiMUSIUWkMjTGQpBtFxiMjEaooYkGzohRCVMeohqAbOmdUwlAeqYcaYbOmdQDVM0KmGqZm5NSM6gU0admTZBs6ZMhDXsiFyWnh2LkxidwrdDrtzsJhRb3Ip6aDZ1Xa27wEWNRi/0agkBAaiW0SDSJGIaiCRQGQgNpQNKpmbk1MSIwsVIds2wVTYyilxiMjEbCkPhRLkJCIxGxgOVNBKCDkdFKIyMBsYdBkaYcmtFRgNjTHRpDFAzcmpCo0wlAdGmNjSMXJqYs8aY2NI0wooPZmLm3MGdUi3A0xpX6hfDmObfFk2ZNmbvhNL3SF7IucquNjNkIatkyFyGnyxBpl04X4klG3G59r5NoVlCSDjEds27BGIyMAlEfTiFqkLhAfCmMikMTRzuTrMYqETRTAUh1Mxa3IOMQlQuHTiaILoZ5Ncdsyo2CUGaXFkihmTNxhKosONFmiEB8IBc9GYbZo4d8jRTwrNEIjotnO+Suk8eMZlhWE6KXU1pDYxXL2MXOukwxYFAfSpGpU48g4xjyZi52tTHGfNJVPpYtUDVGK8Q8vRGOVdOOLLGkNVIY79Cal/dG5AbIF0RuVl5CguUv0RsuhB+zIO2f8Aj42kGolJDIo9Lk87SlE0UUgIobGIXIyGqKGRhm3JIVGI+mc7W5+17DqMhSRUbjYoza3NehQguQ6C6AxgOhAza1LRRGxb8CRgOhAzbGpsGRsOFIfGA2NMz2LhsuFMdGmMhTHwpmL5HSYFRpjYwGKAyNIxc2piXGA2MBsKQ2NMxzb4wlUw1THKAagHM8SFAJUzQoBKAc1xZ1TLVM0qBeUOxcGZUwtmPyksHYeBGzIPsiB2Hg+FRkMjI50ajGRqs9Xb4eEdKMhsWcyNUZGsZtpmEdWDHQZyY4hjY4lmbtuYR14WHwOPDFPoPp4voYu2phHYgkPhY5VLE9Ga6ddHHLKx1ni26MEh0Ec+NdDo4lI5XyV0nhdGCHQRzYYyP8uaIYyPX0ZzvkrU8MdCKHRRzafaMPpa/V+tu08R6xsevoYueTU8Ub4odFHOhjej81YfDFrkc75K3PE2X5CVXnr9H2FvG24Bwxie+yDsp6mijJvVuy9x8paO2pk+MiuPsC+0qa4v0ZnnT1g+MqOVrZEu8maqdaXi+uiM/wA0p8/ZlfMaa/8Allc76Mwb4ylzS8EGr82c35rT5+zLXalN8fZmeWS4Oi5APx8kZ44qLV7+t0F8RHmjPY11tGYoRt1zIHYut8BUw1MwbFcKnuxkaH+4vU9/txed/HzblMJVDCsO/wDuL1ZexnwnF+bLtxXR5PToxqBqqc1U595erLtU5+5dmPsdPk9OpGqMjWOQpVP4y1Vnyfqh5Y+xwzn07cMS1xHxx0uZ59YmXJ+qCWMfdl6mbMa1/ue3oo4+XMdHtGXQ8zHHtcH7Dl2q+4vT9zN8ePpqZ5vSLtKXQuXaUmtNPA8581fcS8v3LXaz7sf7f3Dqx9K+XP27ka3vv13nTodrSSS32Vt55H5s+7H0/cOPa0u6vR/5LPxzL5GGdx+Hsl2y+RH2vLr6nkV2tLuL+eYa7Ul3PyOX8fH06/yMnqvmsuZPmUub9Ty/zGXda8kWu0JcpeiHoxHdk9R8ylzZT7QlzPNrHvuy9glj33ZewdEXdk9B8c+ZTxb5nB+YPuSL+Y/cZdUHbXceJfMOGLa4nBXaP3X6hLtD7n/l+xm+JTyPQLHy6eeoxdqT526JHnVj/uP+79i/j/uP+79jF8M9NzzX29F81nzIee+P/wBuXr+xDHRPR777fMo4i6/ymgtu+hyI4yak00nFaXW81LEwe+59szjjxrcqz6DI1HzXuYo1I6W47tQ1LxNbZ3W6Llz/ADD+lwfvIwRrLqNWIH+jyrWs/efqyOc+8/UzxxIyOI/mgah55GxrT5hqtPn7iliEGq3gWoeeQ1iJhLES6C8/T3CTXFFqLnRrEy5BfES5Co0485a9QtlH73sS501Yh8hkcTLkIVHk/UNUJ8LEuTQsRLkWsY/5oZ9nJb2l42ZabX+qHoC5Naxvj6hrG+Ji2vSnL1LVbT6sQPKugsW+CYXxj5HK277qXkxsKj5L3A8nR+Mf8ZaxUjHCf3Y+rGJrkvUhyaliZcw1iJczJpy9yZej8mA22rEyL+JkYbtc/Um1fUA3fFSIYdsyEHz2k6druaVuFnf0CjWp3etktzs9fI5yG0ad+KXmYmd+o63GfdbVi4R0s3ydkkNjiotX0T5N7zPT7Oe9Xa6NF1MI0rqG965k7G95Rj/Bu3fFxv42GQmuM4rzQMaF0lls/JK3maaeAgorNOCT0esd/jxGbG4HMrXvdeZJ1JLcrreVXw8UrKpTa5XV0wMLZWjZVHrxWa3KyG1Djio210fhdexWH7Qg21v9rjElrlpJS1XE5GMpZJLTLp4a3M5WxrHVr0NPEU3peN+Tkk0HtYp2uk+VzzFGSzK9rNrnu5np6M8K4rNOm3z3X9Sxz2ssZPhIYyF7J6+xpzPkY8Vh8OmlH6UpW0VRJ24BRU7xim4K2mdxbfib3WLI0RnLirBKo+pm+Jd7WbXF/qK+Y6tJLja7Rclp0Y1XxbKa8znUMRXveK2ie9NaeVtweI7WnFLNTte6u3eN/wBQ5HTdF8SZ/I5GHxr42mt/BNehuoVFNr6Ks9zUkUy2bjpqp4nk7odDELmhDw+uifiXRi27LK3yTTLYPlUT3O3gKcn3mMSnqkoytvsk7Mn0+MPYNgCqvvMNVXzJ4wT8irLu2Ar2r5k2kuYqdlwYGdEj9s+ZZm2iIBeILqbkWQ5fTqOl9Vfif5Hc4U/wL8iEOvj+Bm5HaG//AJS/Mz/6X4kIZy+1F0Qqf2sfx/qQhjL4jWP5PU0dz8Tk/wBR76f4WQh2z/Fxn5OY/qx8f0Dh+n6EIccfh2vy04T6kvH9Tfjfs6P4WWQ64/Dnl8kU/q0gsXvZRCGX07n9P/ZL8T/JGTtj7aH4H+ZRB+oxPyocduh/OBxo/aVPxEIZdMHao/U/4/oYOzPtoeP+SEB0aP6Y/wCpq+MvzZ61kIUc8yZAxIQWCKxy8bw8SEEz5IIQhNv/2Q=="
                  );
                  break;
                default:
                  setImage(
                    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
                  );
              }
            }
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error);
      }
    }
  }, [location]);

  useEffect(() => {
    setInterval(() =>
      setTime(
        new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds()
      )
    );
  }, []);

  var today = new Date();

  var day = today.getDay();
  let arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="home">
      <div id="card">
        {/* left */}

        {weather !== null ? (
          <div
            id="leftdiv"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
            }}
          >
            <div id="icon">
              <img src={icon} alt="" />
              <h1>{weather.current.condition.text}</h1>
            </div>
            <div className="wrap">
              <div id="one">
                <h1>{time}</h1>
                <h3>{arr[day]}</h3>
              </div>
              <div id="two">
                <h1>
                  {weather.current.temp_c}
                  {"\u00b0"}C
                </h1>
              </div>
            </div>
          </div>
        ) : null}

        {/* right */}

        <div id="rightdiv">
          <div id="gif">
            <img
              src="https://thumbs.gfycat.com/DapperLawfulGodwit-size_restricted.gif"
              alt="GIF"
            />
          </div>
          <div id="search">
            <input
              type="text"
              placeholder="Enter the location"
              onChange={handleChange}
              value={city}
            />
            <button id="btn" onClick={handle}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwloQpQwObGyKOpGQU34O93fhqMvqjGYy9Q&usqp=CAU"
                alt=""
              />
            </button>
          </div>

          {weather !== null ? (
            <div id="info">
              <div>
                <h1>{weather.location.name}</h1>
              </div>

              <div>
                <p>Temprature</p>
                <p>
                  {weather.current.temp_c}
                  {"\u00b0"}C
                </p>
              </div>

              <div>
                <p>Humidity</p>
                <p>{weather.current.humidity}%</p>
              </div>

              <div>
                <p>Visibility</p>
                <p>{weather.current.vis_km} km</p>
              </div>
              <div>
                <p>Wind Speed</p>
                <p>{weather.current.wind_kph}km/h</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;

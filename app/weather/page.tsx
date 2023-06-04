export default async function Example() {
  const url = process.env.WEATHERAPI;
  const apiKey = process.env.WEATHERAPIKEY;
  const area = "55104";
  const call = `${url}?key=${apiKey}&q=${area}&days=3`;

  const result = await fetch(call).then((response) => response.json());

  const location = `${result.location.name}, ${result.location.region}`;
  const currentCondition = result.current.condition.text;
  const icon = result.current.condition.icon;
  const currentTempF = `${result.current.temp_f}°F`;
  const currentTempC = `${result.current.temp_c}°C`;

  const currentWindMPH = `${result.current.wind_mph} mph`;
  const currentWindKPH = `${result.current.wind_kph} kph`;
  const windGustMPH = `${result.current.gust_mph} mph`;
  const windGustKPH = `${result.current.gust_kph} kph`;

  return (
    <div>
      <h1>{location} Weather</h1>

      <h2>
        Current Conditions <img src={icon} alt="Conditions Icon" />
      </h2>

      <p>
        <b>{currentCondition}</b>: {currentTempF} | {currentTempC}
      </p>

      <p>
        <b>Wind Speed</b>: {currentWindMPH} | {currentWindKPH}
      </p>

      <p>
        <b>Gusts up to</b>: {windGustMPH} | {windGustKPH}
      </p>
    </div>
  );
}

async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const apiKey = "23dc726e1b714131bc062813251806";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Location not found");

    const data = await response.json();
    const temp = data.current.temp_c;
    const city = data.location.name;

    document.getElementById("weatherResult").innerHTML = 
      `Current temperature in <strong>${city}</strong> is <strong>${temp}°C</strong>`;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = 
      `<span style="color: red;">Error: ${error.message}</span>`;
  }
}

const API_URL = "http://localhost:3000/api/short"; // Update if deployed

async function shortenUrl() {
  const originalUrl = document.getElementById("originalUrl").value;

  if (!originalUrl) {
    alert("Please enter a valid URL");
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ originalUrl }),
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById("result").innerHTML = `
                Shortened URL: <a href="http://localhost:3000/${data.url.shortUrl}" target="_blank">
                http://localhost:3000/${data.url.shortUrl}</a>
            `;
    } else {
      document.getElementById("result").innerHTML = "Error: " + data.message;
    }
  } catch (error) {
    console.error(error);
    document.getElementById("result").innerHTML =
      "Server error. Try again later.";
  }
}

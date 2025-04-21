# 🪙 Crypto Projectory

A modern React-based web app that displays real-time cryptocurrency data using the [CoinGecko API](https://www.coingecko.com/en/api). Users can explore trending and top cryptocurrencies, click on individual coins to view detailed information, and visualize market trends with interactive charts.

## 🌐 Live Demo

👉 [Crypto Projectory](https://crypto-projectory.vercel.app/)

---

## 🚀 Features

- 🔍 **Explore Cryptocurrencies** – View a list of trending and top cryptocurrencies.
- 📈 **Coin Detail Page** – Click on a coin to view its full data, including:
  - Market cap
  - Price change percentage
  - 24h high/low
  - Market stats
  - Description
- 📊 **Interactive Charts** – Visualize price trends for each coin using historical data.
- 🧾 **Feature Page** – A section showcasing the key benefits and functionality of the app.
- 👤 **Signup Page** – Simple local signup form using `localStorage`.

---

## 🛠️ Tech Stack

- **React.js** – Frontend framework
- **React Router** – Client-side routing
- **Axios** – For API calls
- **Chart.js + react-chartjs-2** – For rendering price charts
- **CoinGecko API** – Real-time crypto data provider
- **CSS / SCSS** – Styling

  
## 📁 Folder Structure

├── public ├── src │ ├── components │ │ ├── Navbar/ │ │ ├── Footer/ │ ├── pages │ │ ├── Home/ │ │ ├── Coin/ │ │ ├── Signup/ │ │ ├── Feature/ │ ├── App.js │ ├── index.js


---

## 🧪 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/vivaangoyal29/Crypto-Projectory.git
cd Crypto-Projectory
```
###2. Install Dependencies
```bash
npm install
```
###3. Start Development Server
```bash
npm start
```

# 📦API Usage
- Cryptocurrency listings
- Detailed coin data via /coins/{id}
- Historical market chart data via /coins/{id}/market_chart
- 📌No API key required. CoinGecko provides free access for public projects.




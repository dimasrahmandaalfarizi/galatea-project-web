fetch("https://api.jsonbin.io/v3/b", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
      "source": "Sistem Informasi Pengelolaan Sampah Nasional (SIPSN) - Kementerian LHK RI",
      "year": 2023,
      "proof_url": "https://sipsn.menlhk.go.id/sipsn/",
      "total_waste_tons": 67800000,
      "composition": [
        {"category": "Sisa Makanan", "percentage": 41.5, "color": "#52B788"},
        {"category": "Plastik", "percentage": 18.5, "color": "#60a5fa"},
        {"category": "Kayu/Ranting/Daun", "percentage": 13.0, "color": "#34d399"},
        {"category": "Kertas/Karton", "percentage": 11.0, "color": "#fbbf24"},
        {"category": "Logam", "percentage": 3.0, "color": "#f87171"},
        {"category": "Kain", "percentage": 3.0, "color": "#c084fc"},
        {"category": "Kaca", "percentage": 2.5, "color": "#94a3b8"},
        {"category": "Karet/Kulit", "percentage": 2.5, "color": "#f472b6"},
        {"category": "Lainnya", "percentage": 5.0, "color": "#a78bfa"}
      ]
  })
}).then(res => res.json()).then(console.log).catch(console.error);

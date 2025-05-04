
export default function Home() {
  const images = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Nyan_cat_250px_frame.PNG/220px-Nyan_cat_250px_frame.PNG",
    "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Rick_Astley_-_Never_Gonna_Give_You_Up.png/220px-Rick_Astley_-_Never_Gonna_Give_You_Up.png"
  ];

  return (
    <main style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#000',
      padding: '20px'
    }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Meme ${index + 1}`}
          style={{
            width: '300px',
            margin: '10px',
            borderRadius: '10px',
            border: '3px solid white'
          }}
        />
      ))}
    </main>
  );
}

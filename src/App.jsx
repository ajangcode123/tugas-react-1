import "./App.css";

function App() {
  const biodata = {
    id: 1,
    name: "Ajang Irhas Rifai",
    birth: "30 November 2003",
    age: "20 tahun",
    hobbies: ["Menonton", "Makan", "Tidur"],
    images: "./profile.jpg",
  };
  return (
    <div className="container">
      <h2 className="title">TUGAS 1 KELOMPOK GALAKSI</h2>
      <div className="biodata">
        <h2>BIODATA</h2>
        <img
          src={biodata.images}
          alt={biodata.name}
          className="profile-image"
        />
        <h2 className="name">{biodata.name}</h2>
        <p><strong>{biodata.birth}</strong></p>
        <p><strong>{biodata.age}</strong></p>
        <div className="hobbies">
          {biodata.hobbies.map((hobby, index) => (
            <button key={index} className="hobby-button">
              {hobby}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

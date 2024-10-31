import foto from "../foto.jpeg";

function Profile() {
    return (
      <img
        src= {foto.src}
        alt="RaflyRA"
        className="foto"
      />
    );
  }

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
      <h1 className="text-gray-400 font-bold" > CV Online</h1>
      <h1 className="text-3xl text-red-400 font-bold">Rafly Radithya A.R</h1>
      <Profile />
      <p>Saya Adalah Mahasiswa Ma'soem University Prodi Komputerisasi Akutansi</p>
      </div>
    )
}
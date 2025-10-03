export default function Profile(){
  return (
    <main className="bg-image flex justify-center h-auto pt-20 pb-10 overflow-hidden">
      <div className="w-full px-5  lg:px-30">
        {/* judul */}
        <h1 className="h-screen bg-amber-400" id="sejarah">Ini adalah halaman sejarah</h1>
        <h1 className="h-screen bg-amber-400" id="identitas">Ini adalah halaman identitas</h1>
        <h1 className="h-screen bg-amber-400" id="kepsek">Ini adalah halaman sambutan kepala sekolah</h1>
        <h1 className="h-screen bg-amber-400" id="struktur">Ini adalah halaman struktur organisasi</h1>
        <h1 className="h-screen bg-amber-400" id="visimisi">Ini adalah halaman visi misi</h1>
      </div>
    </main>
  );
}
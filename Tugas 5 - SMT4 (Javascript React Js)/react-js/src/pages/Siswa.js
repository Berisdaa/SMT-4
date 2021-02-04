import Listsiswa from './Listsiswa';

function Siswa() {

    const nama = ['Akaashi', 'Bokuto', 'Kuro']

    return (
        <div className="Siswa">

            <Listsiswa judul={nama} />

        </div>
    );
}

export default Siswa;

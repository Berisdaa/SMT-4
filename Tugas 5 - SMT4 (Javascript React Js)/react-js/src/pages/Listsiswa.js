

function Listsiswa(props) {

    const siswa = props.judul.map((item, i) =>
        <li key={i}>{item}</li>
    )

    return (
        <div className="Listsiswa">

            {/* <h1>{props.judul[2]}</h1> */}

            <ul>
                {siswa}
            </ul>

        </div >
    );
}

export default Listsiswa;

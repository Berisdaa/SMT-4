function Tabel(props) {

    const menus = props.menu;
    const title = props.title;

    return (
        <div className="Tabel">

            <h1>{title}</h1>
            <table>
                <tr>
                    <th>Menu</th>
                    <th>Harga</th>
                </tr>

                {menus.map((data) => (
                    <tr key={data.idmenu}>
                        <td>{data.menu}</td>
                        <td>Rp.{data.harga}</td>
                    </tr>
                ))}
            </table>
        </div >


    );
}

export default Tabel;

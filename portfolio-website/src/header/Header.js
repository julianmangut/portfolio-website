import './Header.css'

function Header() {
    return (
        <div id="principal-img">
            <img id="profile-img" src="./profile-img.jpg" />
            <div id="principal-text">
                <h2>Julián Cuéllar Mangut</h2>
                <blockquote>
                    "Tell me and I forget.  Teach me and I remember.  Involve me and I learn."
                    <cite>Benjamin Franklin</cite>
                </blockquote>
            </div>
        </div>
    )
}

export default Header;
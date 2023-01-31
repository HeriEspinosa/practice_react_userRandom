import axios from 'axios'

const UserRandom = ({ user }) => {

    return (
        <article className='container__userRandom'>
            <h3><span>Nombre: </span>{user.name.first} {user.name.last}</h3>
            <h3><span>Genero: </span>{user.gender}</h3>
            <img src={user.picture.large} />
        </article>
    )
}

export default UserRandom
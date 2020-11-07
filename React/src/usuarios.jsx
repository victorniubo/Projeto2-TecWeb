import react, { Component } from 'react'

export default class Usuarios extends Component{

    render() {

        var usuarios = [
            {username: 'user1'},
            {username: 'user2'} 
        ];

        var listUsuarios = usuarios.map(function(usuario) {
            return (
            <li>{usuario.username}</li>
            );
        });

        return (
            <div>
                <ul>
                    {listUsuarios}
                </ul>
            </div>
        );
    }

}
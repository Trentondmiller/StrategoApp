import C from '../constants'
import io from 'socket.io-client'
import dispatch from 'react-redux'
export const gameSocket = io.connect(`http://localhost:3333`)

gameSocket.on('connect', function() {
	console.log('connected');
});

gameSocket.on('move-received', function(response) {
	console.log('Opponent received move:)' + response;
});

export const sendMove = (move) => {
	gameSocket.emit('send-move', move);
}

import Map from '../ui/Map'
import { connect } from 'react-redux'
import { movPiece} from '../../../actions'

const mapStateToProps = state => ({
	board: state.board,
	game: state.game
})


const mapDispatchToProps = (dispatch) => {	
	return {
		movePiece: (origin,destination) => {
			dispatch(movePiece(origin,destination));
		}
	}
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Map)

export default Container



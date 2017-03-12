import MapSpot from '../ui/MapSpot'
import { connect } from 'react-redux'
import { mapSpotSelected } from '../../../actions'

const mapStateToProps = state => ({
	game: state.game
})


const mapDispatchToProps = (dispatch) => {	
	return {
		mapSpotSelected: (index) => {
			dispatch(mapSpotSelected(index));
		}
	}
}

const Container = connect(mapStateToProps, mapDispatchToProps)(MapSpot)

export default Container
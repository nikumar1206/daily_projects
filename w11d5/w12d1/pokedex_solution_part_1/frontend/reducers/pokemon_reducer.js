import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_SINGLE_POKEMON
} from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  
  let poke;
  debugger

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      debugger
      return Object.assign({}, state, action.pokemon);
    case RECEIVE_SINGLE_POKEMON:
      poke = action.payload.pokemon;

      return Object.assign({}, state, { [poke.id]: poke });
    default:
      return state;
  }
};

export default pokemonReducer;

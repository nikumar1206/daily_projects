import React, { Component } from 'react';

import PokemonIndexItem from './pokemon_index_item';
import LoadingIcon from './loading_icon';

class PokemonIndex extends Component {
  componentDidMount() {
    debugger
    this.props.requestAllPokemon();
  }

  componentDidUpdate() {
    debugger;
  }

  render() {
    debugger
    const { pokemon, loading } = this.props;

    if (loading) { return <LoadingIcon />; }

    return (
      <section className="pokedex">
        <ul>
          {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;

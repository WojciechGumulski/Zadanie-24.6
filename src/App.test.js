import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const app = shallow(<App />);
  const players = [
    {
      name: 'Kunegunda',
      score: 5,
    },
    {
      name: 'Antoś',
      score: 0,
    }
  ];
  app.setState({ players });
  const onScoreUpdate = app.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);
  const playersAfterUpdate = app.state('players');

  expect(playersAfterUpdate[0].score);
});

it('should add new player', () => {
  const app = shallow(<App />);
  const players = [
      {
      name: "Ania",
      score: 0
      }
  ];
  app.setState({ players });
  const onPlayerAdd = app.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');
  const playersAfterUpdate = app.state('players'); 
  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);
});

it('should delete player from state', () => {
  const appComponent = shallow(<App players={[{ name: "Ania", score: 0 }]} />);
  const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
  onPlayerRemove('Ania');
  const players = appComponent.state().players;
  expect(players.length).toEqual(0);
});
import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const START_GAME = 'START_GAME';
const END_GAME = 'END_GAME';
const LEVEL_UP = 'LEVEL_UP';
const SUCCESS = 'SUCCESS';
const FAILED = 'FAILED';

/**
 * INITIAL STATE
 */
const defaultGame = {};

/**
 * ACTION CREATORS
 */
const startGame = game => ({ type: START_GAME, game });
const endGame = () => ({ type: END_GAME });
const levelUp = game => ({ type: LEVEL_UP, game });
const success = game => ({ type: SUCCESS, game });
const failed = game => ({ type: FAILED, game });

/**
 * REDUCER
 */
export default function(state = defaultGame, action) {
  switch (action.type) {
    case START_GAME:
      return action.game;
    case END_GAME:
      return defaultGame;
    case LEVEL_UP:
      return;
    default:
      return state;
  }
}

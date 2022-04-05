// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// // import deck, { CardInterface } from "../../utils/deck";
// // import shuffleDeck from "../../utils/shuffle";

// interface GameState {
//   deck: CardInterface[];
//   discard: CardInterface[];
//   numberOfPlayers: number;
//   players: Player[];
//   currentPlayer: number;
// }

// interface Player {
//   hand: CardInterface[];
//   phase: number;
//   score: number;
// }

// const initialState: GameState = {
//   deck: [],
//   players: [],
//   discard: [],
//   currentPlayer: 0,
//   numberOfPlayers: 0,
// };

// const initialPlayer = {
//   phase: 1,
//   score: 0,
// };

// const gameSlice = createSlice({
//   name: "game",
//   initialState,
//   reducers: {
//     deckGenerated(state) {
//       state.deck = shuffleDeck(deck);
//     },
//     playerCreated(state) {
//       const player = { ...initialPlayer, hand: [...state.deck.splice(-10)] };
//       state.players.push(player);
//     },
//     discardGenerated(state) {
//       state.discard = state.deck.splice(-1);
//     },
//     gameStarted(state, action: PayloadAction<number>) {
//       const tempDeck = shuffleDeck(deck);
//       for (let i = 0; i < action.payload; i++) {
//         const player = { ...initialPlayer, hand: [...tempDeck.splice(-10)] };
//         state.players.push(player);
//       }
//       state.discard = tempDeck.splice(-1);
//       state.deck = [...tempDeck];
//     },
//   },
// });

// export const { deckGenerated, playerCreated, discardGenerated, gameStarted } =
//   gameSlice.actions;
// export default gameSlice.reducer;
const temp = '';
export default temp;
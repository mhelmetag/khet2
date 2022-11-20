import BoardBoss from "../state/BoardBoss";
import { PieceGenerator } from "./Piece";

export default function Board() {
  const boardBoss = new BoardBoss();

  return (
    <>
      {boardBoss.board.map((row, i) => {
        const rowElements = row.map((pieceBoss, j) => {
          if (pieceBoss) {
            return (
              <div key={"cell" + i + j} className="cell">
                {PieceGenerator(pieceBoss)}
              </div>
            );
          } else {
            return <div key={"cell" + i + j} className="cell"></div>;
          }
        });

        return (
          <div key={"row" + i} className="row">
            {rowElements}
          </div>
        );
      })}
    </>
  );
}

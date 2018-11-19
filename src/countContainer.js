import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = dispatch => ({
    addOne: () => dispatch({ type: "ADD_ONE" }),
    removeOne: () => dispatch({ type: "REMOVE_ONE" }),
    addTen: () => dispatch({ type: "ADD_TEN" }),
    removeTen: () => dispatch({ type: "REMOVE_TEN" }),
    erase: () => dispatch({ type: "ERASE" })
  });

const CountComponent = ({ count, addOne, addTen, removeOne, removeTen, erase }) => {
    return (
        <div>
            <p>{count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={removeOne}>-1</button>
            <button onClick={addTen}>+10</button>
            <button onClick={removeTen}>-10</button>
            <button onClick={erase}>ERASE</button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CountComponent);

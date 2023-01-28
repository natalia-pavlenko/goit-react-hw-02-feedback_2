// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );

import { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onChangeBtn = evt => {
    const { name } = evt.target;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    console.log(good + neutral + bad)
    return good + neutral + bad;
  };
  // countPositiveFeedbackPercentage()
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <section>
        <h2>Please leave feedback</h2>
        <ul>
          {Object.keys(this.state).map(el => {
            return (
              <li key={el}>
                <button name={el} onClick={this.onChangeBtn} type="button">
                  {el}
                </button>
              </li>
            );
          })}
        </ul>
        <h2> Statistics</h2>
        <ul>
          <li>Good: {good} </li>
          <li>Neutral: {neutral} </li>
          <li>Bad: {bad} </li>
          <li>Total: {this.countTotalFeedback} </li>
          {/* <li>Percentage: {percentage} </li> */}
        </ul>
      </section>
    );
  }
}

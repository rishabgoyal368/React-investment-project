import { useState } from "react";
import Header from "./components/header";
import FormResult from "./components/resultTable";
import UserForm from "./components/userInput";

function App() {
  const [userInput, setUserInput] = useState(null)
  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  };

  const yearlyData = [];
  if (userInput) {

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }


  return (
    <div>
      <Header />
      <UserForm onCalculate={calculateHandler} />
      {!userInput && <p style={{ 'textAlign': 'center' }}>No Data Found</p>}
      {userInput && <FormResult yearlyData={yearlyData} intialInvestment={userInput['current-savings']} />}

    </div>
  );
}

export default App;

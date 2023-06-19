const FormResult = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {
          props.yearlyData.map((yearData) => (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{yearData.savingsEndOfYear}</td>
              <td>{yearData.yearlyInterest}</td>
              <td>{yearData.savingsEndOfYear - props.intialInvestment - yearData.yearlyContribution * yearData.year}</td>
              <td>{yearData.yearlyContribution + yearData.yearlyContribution * yearData.year}</td>
            </tr>
          ))
        }

      </tbody>
    </table>
  )
}

export default FormResult;
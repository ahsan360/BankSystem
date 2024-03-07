const Welcome = () => {
  return (
    <>
      <h1>Welcome To The Bank System</h1>
      <h3>How does It works</h3>
      <p style={{ color: 'blue', alignItems: 'left ', textAlign: 'left' }}>
        1. If you are new here, you have to create an account first. Fill out
        the form with your name, and in return, you will receive an account
        number.
        <br />
        2. You can deposit money into your account by selecting  Add Money in
        the navbar.
        <br />
        3. If you want to transfer money to another account, go to the Transfer
        Money section and fill out the form with the existing details.
        <br />
        4. To view your statement, navigate to User Details and fill out the
        form.
      </p>
    </>
  )
}
export default Welcome

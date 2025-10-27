import Student from "../Student";

const Body = () => {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const time = new Date().getHours();

  return (
    <>
      <div className="body">
        <Student />
        {num.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        {time < 12 ? (
          <p>Good Morning</p>
        ) : time < 18 ? (
          <p>Good Afternoon</p>
        ) : (
          <p>Good Evening</p>
        )}
      </div>
    </>
  );
};
export default Body;

function Workouts() {
  return (
    <div className="workouts-form">
      <form id="workouts-form">
        <label htmlFor="workout">Workout</label>
        <input type="text" id="workoutname" />
        <label htmlFor="workoutlength">Length of Workout</label>
        <input type="number" id="workoutlength" />
        <label htmlFor="workoutnotes">Notes:</label>
        <input type="textarea" name="workoutnotes" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Workouts;

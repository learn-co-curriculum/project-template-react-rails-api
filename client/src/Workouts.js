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
        <label htmlFor="dayselection">Day of the Week</label>
        <input type="textarea" name="dayselection" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Workouts;

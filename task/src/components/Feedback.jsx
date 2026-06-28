function Feedback({ feedback }) {

    return (

        <div className="feedback">

            <h2>Feedback</h2>

            <ul>

                {feedback.map((item, index) => (

                    <li key={index}>{item}</li>

                ))}

            </ul>

        </div>

    )

}

export default Feedback;
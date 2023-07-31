import { info } from "../../Data/data";
import "./Experience.css";

export const Experience = () => {
    return (
        <div className='experience'><h2>Experience</h2>
            {info.experience.map((val) => (

                <>
                    <p href="">{val.company}</p>
                    <p href="">{val.endDate}</p>
                    <p href="">{val.jobDescription}</p>
                    <p href="">{val.jobTitle}</p>
                    <p href="">{val.startDate}</p>
                    <br />
                </>
            ))}
        </div>
    )
}
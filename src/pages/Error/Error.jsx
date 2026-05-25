import { Link, useNavigate } from "react-router";
import errorImg from "../../assets/images/error-404.png"
import Title from "../../components/Title/Title";

const Error = () => {

    const navigate = useNavigate()

    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <img src={errorImg} alt="" />
                <Title title="Oops, page not found!" subTitle="The page you are looking for is not available."></Title>
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-lg text-white bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-md"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error;
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import bgHero from "../../assets/images/hero.png"

const Banner = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-y-8 pt-12 bg-base-200">
                <div className="max-w-170 text-center">
                    <h1 className="text-7xl font-black">We Build <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
                </div>
                <p className="text-[20px] w-247 text-center text-[#627382]">AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="flex gap-4">
                    <button className="btn btn-xl"><IoLogoGooglePlaystore className="h-[35px] w-[35px]" /><span className="text-[20px]">Google Play</span></button>
                    <button className="btn btn-xl"><GrAppleAppStore className="h-[35px] w-[35px]" /><span className="text-[20px]">App Store</span></button>
                </div>
                <img src={bgHero} alt="" />
            </div>
            <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-24">
                <div className="max-w-232 mx-auto">
                    <h1 className="text-center text-5xl font-bold text-white">Trusted by Millions, Built for You</h1>
                    <div className="flex justify-between text-center mt-12">
                        <div>
                            <h4 className="text-gray-300">Total Downloads</h4>
                            <h1 className="text-white text-6xl font-extrabold">29.6M</h1>
                            <h4 className="text-gray-300">21% more than last month</h4>
                        </div>
                        <div>
                            <h4 className="text-gray-300">Total Reviews</h4>
                            <h1 className="text-white text-6xl font-extrabold">906K</h1>
                            <h4 className="text-gray-300">46% more than last month</h4>
                        </div>
                        <div>
                            <h4 className="text-gray-300">Active Apps</h4>
                            <h1 className="text-white text-6xl font-extrabold">132+</h1>
                            <h4 className="text-gray-300">31 more will Launch</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
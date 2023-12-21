import Btn from "../../Component/Btn";
import Title from "../../Component/Title";
import dawnload1 from "/src/assets/download-thumb-1.png"
import dawnload2 from "/src/assets/download-thumb-2.png"
const Application = () => {
    return (
        <div className="py-10">
            <Title title={'Download app today!'} subtitle={"Download app for Andraoid today — it's free."}></Title>

            <div className="p-5 my-5 grid md:grid-cols-2 gap-10">
                <div className="bg-[#ebf2fc] rounded-3xl">
                    <div className="p-10 space-y-2">
                    <h4 className=" text-2xl text-[#0e1133] font-bold">Android</h4>
                    <p className=" font1">Download app for Android today — it&lsquo;s free.</p>
                    <Btn btnName={"Download for Android"}></Btn>
                    </div>
                    <img className=" md:h-56 lg:h-96 m-auto" src={dawnload1} alt="" />
                </div>
               
                <div className="bg-[#ebf2fc] rounded-3xl">
                    <div className="p-10 space-y-2">
                    <h4 className=" text-2xl text-[#0e1133] font-bold">iOS & iPadOS</h4>
                    <p className=" font1">Download app for iOS & iPadOS today — it&lsquo;s free.</p>
                    <Btn btnName={"Download for Android"}></Btn>
                    </div>
                    <img className=" md:h-56 lg:h-96 m-auto" src={dawnload2} alt="" />
                </div>
               
            </div>
        </div>
    );
};

export default Application;
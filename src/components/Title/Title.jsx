const Title = ({title, subTitle}) => {
    return (
        <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <h3 className="text-[#627382]">{subTitle}</h3>
        </div>
    );
};

export default Title;
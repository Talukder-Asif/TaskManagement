/* eslint-disable react/prop-types */

const Title = ({title, subtitle}) => {
    return (
        <div className='m-auto'>
        <h3 className='text-center m-auto text-3xl text-[#0e1133] font-bold' >{title}</h3>
        <p className='max-w-[90%] font1 text-center m-auto md:max-w-[60%]'>{subtitle}</p>
            
        </div>
    );
};

export default Title;
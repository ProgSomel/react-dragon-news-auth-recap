import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-8xl mx-auto font-poppins my-8 px-4 md:px-8 lg:px-16">
            <Outlet></Outlet>      
        </div>
    );
};

export default Root;
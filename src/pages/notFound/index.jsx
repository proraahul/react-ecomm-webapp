import Page404 from '../../assets/images/page-404.png';
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
    const navToHome = useNavigate()
    return (
        <>
            <section className="not-found w-full h-auto py-12">
                <div className="container-fluid">
                    <div className="flex flex-col items-center justify-center">
                        <img src={Page404} alt="404 not found page image" />
                        <h1 className='text-6xl opacity-80 font-medium mt-2'>Page Not Found</h1>
                        <p className="my-5 text-center">The link you clicked may be broken or the page may have been removed. <br />
                        visit the Homepage or contact us about the Problem
                         </p>

                         <div className="mt-4">
                            <button className="bg-custom-green text-white py-2 px-7 rounded-sm btn hover:bg-[#FDC040]" onClick={() => navToHome('/')}>Back to Homepage</button>
                         </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ErrorPage
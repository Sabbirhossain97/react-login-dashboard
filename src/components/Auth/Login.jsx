import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Spinner,Google } from '../SvgComponents/SVG';

function Login() {

    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        errorMessage: "",
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            axios.post('https://dummyjson.com/auth/login', {
                username: credentials.username,
                password: credentials.password,
                expiresInMins: 30,
            })
                .then(res => {
                    setLoading(false);
                    const token = res?.data?.token
                    sessionStorage.setItem('token', token)
                    if (res?.status === 200) {
                        toast.success("Successfully logged in!");
                        setTimeout(() => {
                            navigate('/dashboard');
                        }, 1000);
                    }
                })
                .catch(err => {
                    setLoading(false);
                    if (err.response && err.response.data && err.response.data.message) {
                        setCredentials({ ...credentials, errorMessage: err.response.data.message })
                        toast.error(err.response.data.message);
                    } else {
                        toast.error("An error occurred while logging in. Please try again later.");
                    }
                });
        } catch (error) {
            toast.error(error)
        }
    }

    return (
        <div>
            <div className="bg-gray-100 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="bg-white w-full max-w-xl space-y-4 border border-gray-100 px-8 rounded-xl shadow-xl">
                    <div className='pt-[92px]'>
                        <h1 className='font-semibold text-center text-[24px] leading-9 pb-[68px]'>
                            Tesla Corp
                        </h1>
                        <h2 className="mt-6 text-center text-[17px] leading-[26px] font-semibold tracking-tight text-gray-900">
                            Login to your dashboard
                        </h2>
                        <p className='text-center font-normal text-[13px] leading-[20px] mt-2 text-lg'>
                            Enter with your username and password
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="current-email"
                                    required
                                    value={credentials.username}
                                    className={`placeholder:text-[#828282] placeholder:font-normal placeholder:text-[13px] placeholder:leading-[18px] text-base font-medium text-left text-slate-800  focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-[9px] rounded-lg bg-white border ${credentials.errorMessage ? 'border-red-500' : 'border-[#E0E0E0]'}`}
                                    placeholder="Username"
                                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value, errorMessage: '' })}
                                />
                            </div>
                            {credentials.errorMessage && <p className='text-red-500 pt-1'>{credentials.errorMessage}</p>}
                            <div className="mt-4">
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={credentials.password}
                                    className={`mt-4 placeholder:text-[#828282] placeholder:font-normal placeholder:text-[13px] placeholder:leading-[18px] text-base font-medium text-left text-slate-800  focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-[9px] rounded-md bg-white border ${credentials.errorMessage ? 'border-red-500' : 'border-[#E0E0E0]'}`}
                                    placeholder="Password"
                                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value, errorMessage: '' })}
                                />
                            </div>
                            {credentials.errorMessage && <p className='text-red-500 pt-1'>{credentials.errorMessage}</p>}
                        </div>

                        <div className='mt-4'>
                            <button
                                type="submit"
                                className="w-full p-3 text-[13px] leading-[19px] font-[500] bg-black rounded-md hover:opacity-75 duration-300 transition text-white"
                            >
                                <p className='flex justify-center items-center gap-2'>{loading ? <><Spinner /><span>Processing...</span></> : "Login"}</p>
                            </button>
                        </div>
                        <div className="mt-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center text-[13px] leading-[19px] font-normal text-[#828282]">
                                or continue with
                            </p>
                        </div>
                        <div className="mt-5 flex flex-row w-full ">
                            <div className="flex items-center justify-center h-[52px] w-full ">
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center h-[52px] hover:opacity-75 duration-300 transition bg-[#EEEEEE] rounded-lg px-6 py-2 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    <Google />
                                    <span className="ml-2 text-[13.44px] leading-[19px] font-[500]">Google</span>
                                </button>
                            </div>
                        </div>
                        <div className='mt-5 pb-32'>
                            <p className='text-center text-[11.52px]'>
                                <span className='text-[#828282] font-normal  leading-[17.28px]'>By clicking continue, you agree to our</span> <span className='text-black font-normal leading-[17.28px]'>Terms of Service</span> <span className='text-[#828282]'>and</span> <span className=' font-normal leading-[17.28px]'>Privacy Policy</span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
import React from 'react';

const Payment = () => {

    return(
        <>
        <head>
            <title>Pokaribs - Payment</title>
        </head>
            <section className='h-screen w-full flex flex-col items-center justify-center'>
                <div className='w-full flex flex-col items-center justify-center gap-5'>
                    <h1 className='text-3xl '>Location Details</h1>
                    <form action="" className='w-[25%] flex flex-col gap-3 h-fit items-center justify-center px-4 py-6 shadow-xl bg-slate-100'>
                        <input type="text" name="" placeholder='Input your Full Name' className='p-2 border-[1px] w-full placeholder:text-slate-700 rounded-sm  border-[grey] ' id="" />
                        <textarea type="text" name="" id="" placeholder='Input Your Exact Location' className='p-4 border-[1px] w-full placeholder:text-slate-700 rounded-sm  border-[grey] '></textarea>
                        <button type="submit" className='bg-black text-white px-5 py-2 hover:bg-yellow-500 rounded-[4px] w-fit'>Proceed</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Payment;
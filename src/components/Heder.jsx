import tf from '../assets/troll-face.png'
export default function Heder() {
    
    return<>
        <heder className='flex bg-linear-to-bl from-violet-500 to-fuchsia-500 p-5 items-center' >
            <img src={tf} className='h-10 pr-2' />
            <h1 className='text-white text-3xl font-medium'>Meme Generator</h1>
        </heder>
    </>
}
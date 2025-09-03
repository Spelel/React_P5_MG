import { useState, useEffect } from "react"

export default function Main() {

    const [meme, setMeme] = useState({
        topText:"One dose not simply",
        bottomText:"Walk into Mordor",
        imageUrl:"http://i.imgflip.com/1bij.jpg"
    })

    const [memeFetch, setMemeFetch] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(resp => resp.json())
            .then( data => setMemeFetch(data.data.memes))
    }, [])

    function randomMeme() {
        const randomM = Math.floor(Math.random() * memeFetch.length)
        // console.log(randomM)
        console.log(memeFetch[randomM].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: memeFetch[randomM].url
        }))
    }

    function handleChange(event) {
        const {value, name} = event.currentTarget
        // console.log(value)
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return<>
    <main className="flex flex-col items-center ">
        <div className="flex justify-between flex-wrap w-130 mt-13 gap-5">
            <label className="flex flex-col">Top Text
                <input className="border rounded-md h-10 pl-3 mt-1"
                    type="text"
                    placeholder="Top text here"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
            </label>

            <label className="flex flex-col">Bottom Text
                <input className="border rounded-md h-10 pl-3 mt-1"
                    type="text"
                    placeholder="Bottom text here"
                    name="bottomText"                    
                    onChange={handleChange}
                    value={meme.bottomText}
                />
            </label>
            <button className="border rounded-md w-130 mb-5 bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white py-2" onClick={randomMeme}> Get a new meme image 🖼</button>
        </div>

        <div className="relative flex flex-col justify-center items-center">
            <img className="max-w-130 rounded-md" src={meme.imageUrl}/>
            <p className="absolute text-center inset-x-0 top-0 my-2 uppercase text-white font-medium text-shadow-lg text-3xl">{meme.topText}</p>
            <p className="absolute text-center inset-x-0 bottom-0 my-2 uppercase text-white font-medium text-shadow-lg text-3xl">{meme.bottomText}</p>
        </div>
    </main>

    </>
}
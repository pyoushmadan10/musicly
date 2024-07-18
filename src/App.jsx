import React, { Component, useState } from "react";
import Music from "./Components/Music";
import Navbar from "./Components/Navbar";
function App() {
  const raw = [
    {
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8fDI%3D",
      name: "Bad liar",
      artist: "imagine dragons",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fHwy",
      name: "Love me like u do",
      artist: "Ellie gourdling",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fHwy",
      name: "Tum hi ho",
      artist: "Arijit Singh",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8fDI%3D",
      name: "Only You",
      artist: "Joseph Vincent",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDI%3D",
      name: "Perfect",
      artist: "Ed Sheeran",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWN8ZW58MHx8MHx8fDI%3D",
      name: "Bhula diya",
      artist: "Darshan Raval",
      added: false,
    },
  ];

  const [data, setData] = useState(raw);

  const handleFav=(songindex) => {
    setData((previous) => {
      return previous.map((items,index)=>{
        if(index===songindex){
          return {...items,added:!items.added};
        }
        return items;
      })
    })
  }
  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar favdata={data} />
      <div className="mt-6 px-10 flex flex-wrap gap-6 ">
        {data.map((obj,songindex) => {
          return <Music values={obj} setFav={()=>handleFav(songindex)} />;
        })}
      </div>
    </div>
  );
}

export default App;

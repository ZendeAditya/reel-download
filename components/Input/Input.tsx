"use client";

import GetUrl from "@/utils/getreel";
import React, { FormEvent, useRef, useState } from "react";
interface Reel {
  url: string;
}
const Input = () => {
  const inputVal = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<Reel | null>(null);
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const reel = await GetUrl(inputVal.current?.value);
    console.log(reel);
    setData(reel?.result);
  };
  return (
    <section className="flex items-center justify-center gap-4 flex-col">
      <form onSubmit={onSubmit}>
        <div className="relative">
          <input
            ref={inputVal}
            type="url"
            name="Instareelurl"
            id="ReelUrl"
            className="py-2 px-2 w-[30rem] border-2 border-gray-500 rounded-md"
            placeholder="Paste reel url here!"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Search"
            className="py-2 px-8 bg-green-300 text-white rounded-md m-2 cursor-pointer"
          />
        </div>
      </form>
      <div className="flex items-center justify-center min-h-screen">
        {data.map((reel, id) => (
          <div key={id}>
            <video
              controls
              className="w-96 h-96 rounded-md"
              src={reel.url}
            ></video>
            <div className="py-5">
              <a
                href={reel.url}
                download
                className="py-2 px-8 rounded-md mt-5 border-2 outline-none hover:bg-green-400 hover:duration-500 hover:ease-in"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Input;

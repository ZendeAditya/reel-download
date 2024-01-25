const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f07e928367msh4cde99a007fd8dcp1ec3fejsnd130f8c964b5",
    "X-RapidAPI-Host": "instagram-post-reels-stories-downloader.p.rapidapi.com",
  },
};
const GetUrl = async (url: any) => {
  try {
    const res = await fetch(
      `https://instagram-post-reels-stories-downloader.p.rapidapi.com/instagram/?url=${url}`,
      options
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default GetUrl;

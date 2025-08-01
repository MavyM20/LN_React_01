const getImage = async () => {
  try {
    const apiKey = "YrEochoG8jPgSa4Ib8oq9kGl6851TPTX";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await resp.json();

    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //manejo del error
    console.error(error);
  }
};

getImage();

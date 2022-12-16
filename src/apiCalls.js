const getDog = async() => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!res.ok) {
      throw new Error("OOOOPS")
    }
    const data = await res.json();
    return data;
}

export { getDog }

